import React from "react";
import PropTypes from "prop-types";
import { useComments } from "../../hooks/useComments";

function Comment({ comment }) {
  const { removeComment } = useComments();

  return (
    <>
      <div className="relative border p-2 rounded-md mb-2">
        <button onClick={() => removeComment(comment._id)} className="dark:text-slate-100 absolute top-0 right-[10px] text-[30px]">x</button>
        <h1 className="dark:text-slate-100 text-2xl">{comment.name}</h1>
        <p className="dark:text-slate-100 text-gray-700">{comment.content}</p>
      </div>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
