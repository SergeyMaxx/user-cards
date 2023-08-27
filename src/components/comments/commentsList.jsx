import React from "react";
import PropTypes from "prop-types";
import Comment from "./comment";

function CommentsList({ commentsList }) {
  return (
    <>
      <h2 className=" text-2xl font-semibold text-[#151515] w-full text-center mb-6">
        Комментарии
      </h2>
      <div className=" mb-3">
        <div className=" flex flex-col gap-2 items-center">
          {commentsList.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}

CommentsList.propTypes = {
  commentsList: PropTypes.array,
};
export default CommentsList;
