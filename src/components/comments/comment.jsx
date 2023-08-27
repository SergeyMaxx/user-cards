import React from "react";
import PropTypes from "prop-types";

function Comment({ comment }) {
  return (
    <>
      <div className=" border p-2 rounded-md">
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
