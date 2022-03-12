import React, { useState } from "react";

import { Add, Edit, Done } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";

const Input_task = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(Add(input));
    setInput("");
  };
  return (
    <div className="formkibira">
      <form onSubmit={handleAdd}>
        <input
          placeholder="Add your Task"
          className="m-0 p-0"
          onChange={handlechange}
          value={input}
          id="fname"
        />

        <button variant="outline-dark" className="button button2" type="Submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input_task;
