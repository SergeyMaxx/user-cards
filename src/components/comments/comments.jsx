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
  const sortedComentList = comments?.sort(
    (a, b) => parseFloat(b.created_at) - parseFloat(a.created_at)
  );
  return (
    <>
      <div className="my-10">
        <NewCommentForm onAddComment={handleAddComment} />
      </div>

      {!!sortedComentList?.length && (
        <div className="my-10">
          <CommentsList commentsList={sortedComentList} />
        </div>
      )}
    </>
  );
}

export default Comments;
