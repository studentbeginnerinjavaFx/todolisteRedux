import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Done } from "../../Redux/actions/actions";
import Edit_task from "../Edit_task/Edit_task";
import "../Input_task/input.css";
const List_task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDone = (id, done) => {
    dispatch(Done({ id, done }));
  };
  return (
    <div>
      {task.map((el) => {
        return (
          <div key={el.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "45px",
                marginRight: "0px",
              }}
            >
              <p style={{ marginRight: "30px", marginTop: "9px" }}>
                {el.description}
              </p>
              <Button
                variant="outline-success"
                onClick={() => handleDone(el.id, el.isDone)}
                style={{ marginTop: "-8px" }}
              >
                {el.isDone ? "Not Completed" : "Completed"}
              </Button>
              <Edit_task el={el} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List_task;
