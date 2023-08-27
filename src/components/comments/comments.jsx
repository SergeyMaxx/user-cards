import React from "react";
import NewCommentForm from "./newCommentForm";
import CommentsList from "./commentsList";
import { useComments } from "../../hooks/useComments";
import { useParams } from "react-router-dom";

function Comments() {
  const { id } = useParams();
  const { getCommentsById, createComment } = useComments();
  const comments = getCommentsById(id);

  const handleAddComment = (data) => {
    createComment(data);
  };

  const sortedCommentList = comments?.sort(
    (a, b) => parseFloat(b.created_at) - parseFloat(a.created_at)
  );

  return (
    <>
      <div className="my-10">
        <NewCommentForm onAddComment={handleAddComment} />
      </div>

      {!!sortedCommentList?.length && (
        <div className="my-10">
          <CommentsList commentsList={sortedCommentList} />
        </div>
      )}
    </>
  );
}

export default Comments;
