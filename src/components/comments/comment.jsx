import React from "react";
import PropTypes from "prop-types";
import { useComments } from "../../hooks/useComments";

function Comment({ comment }) {
  const { removeComment } = useComments()

  return (
    <>
      <div className="relative border p-2 rounded-md">
        <button onClick={() => removeComment(comment._id)} className="absolute top-0 right-[10px] text-[30px]">x</button>
        <h1 className=" text-2xl">{comment.name}</h1>
        <p className=" text-gray-700">{comment.content}</p>
      </div>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
