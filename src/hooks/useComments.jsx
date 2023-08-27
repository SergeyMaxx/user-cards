import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import commentsService from "../service/comment.service";

const CommentContext = React.createContext();

export const useComments = () => {
  return useContext(CommentContext);
};
const CommentsProvider = ({ children }) => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function removeComment(commentId) {
    try {
      await commentsService.deleteComment(commentId)
      setComments(prevState => prevState.filter(c => c._id !== commentId))
    } catch (error) {
      errorCatcher(error)
      console.log(error)
    } 
  }
  async function createComment(data) {
    const comment = {
      ...data,
      _id: nanoid(),
      pageId: id,
      created_at: Date.now(),
    };
    try {
      const content = await commentsService.createComment(comment);
      setIsLoading(false);
      setComments((prev) => [...prev, content]);
      return content;
    } catch (error) {
      errorCatcher(error);
    }
  }
  async function getComments() {
    try {
      const content = await commentsService.getComments();
      setComments(content || []);
      return content;
    } catch (error) {
      errorCatcher(error);
    } finally {
      setIsLoading(false);
    }
  }

  function getCommentsById(pageId) {
    return comments.filter((comment) => comment.pageId === pageId);
  }

  function errorCatcher(error) {
    const { message } = error;
    setError(message);
  }
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);
  useEffect(() => {
    getComments();
  }, [id]);
  return (
    <CommentContext.Provider
      value={{ comments, createComment, isLoading, getCommentsById, removeComment }}
    >
      {children}
    </CommentContext.Provider>
  );
};

CommentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default CommentsProvider;
