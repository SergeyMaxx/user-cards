import React, { useState } from "react";
import { PropTypes } from "prop-types";
import Button from "../button";

const initialData = {
  name: "",
  content: "",
};

function NewCommentForm({ onAddComment }) {
  const [data, setData] = useState(initialData);
  const handleChange = (target, e) => {
    setData((prev) => ({ ...prev, [target]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(data);
    clearForm();
  };
  const clearForm = () => {
    setData(initialData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="dark:text-slate-100 text-2xl font-semibold text-[#151515] w-full text-center">
        Новый комментарий
      </h2>
      <div className=" flex justify-center">
        <div className=" flex flex-col gap-2 my-2 w-full md:w-1/2 ">
          <input
            value={data.name}
            placeholder="Имя"
            onChange={(e) => handleChange("name", e)}
            className="dark:bg-slate-900 dark:text-slate-100 border p-1 rounded-md"
          />
          <textarea
            rows={3}
            value={data.content}
            onChange={(e) => handleChange("content", e)}
            placeholder="Сообщение"
            className="dark:bg-slate-900 dark:text-slate-100 border p-1 rounded-md"
          />
          <Button
            type="open"
            color="bg-blue-500"
            onClick={handleSubmit}
            text="Добавить комментарий"
            rounded="rounded-md"
            disabled={!data.name || !data.content}
          />
        </div>
      </div>
    </form>
  );
}

NewCommentForm.propTypes = {
  onAddComment: PropTypes.func,
};

export default NewCommentForm;
