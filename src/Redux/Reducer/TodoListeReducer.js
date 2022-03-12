import { Edit } from "../actions/actions";
import { ADD, EDIT, DONE } from "../constants/actions-type";

const initState = {
  task: [],
};
export const TodoListeReducer = (state = initState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case ADD:
      return {
        ...state,
        task: [
          ...state.task,
          { id: Math.random(), description: payload, isDone: false },
        ],
      };

    case EDIT:
      return {
        ...state,
        task: state.task.map((el) =>
          el.id == payload.id
            ? { ...el, description: payload.newDescription }
            : el
        ),

        //   task:[
        //     {
        //         id:Math.random(),
        //         description:"najet",
        //         isDone:false
        //     }
      };

    case DONE:
      return {
        ...state,
        task: state.task.map((el) =>
          el.id == payload.id ? { ...el, isDone: !payload.done } : el
        ),
      };

    default:
      return state;
  }
};
