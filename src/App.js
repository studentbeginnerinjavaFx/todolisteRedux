import Input_task from "./component/Input_task/Input_task";
import List_task from "./component/List_task/List_task";
import { useSelector } from "react-redux";
import { TodoListeReducer } from "./Redux/Reducer/TodoListeReducer";
function App() {
  const task = useSelector((el) => el.TodoListeReducer.task);

  return (
    <div className="App">
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "55px",
          fontFamily: "serif",
          fontSize: "30px",
          color: "royalblue",
        }}
      >
        My First Application with Redux : <br />
        <span
          style={{
            marginRight: "25px",
          }}
        >
          TodoListe
        </span>
      </p>
      <Input_task />
      <List_task task={task} />
    </div>
  );
}

export default App;
