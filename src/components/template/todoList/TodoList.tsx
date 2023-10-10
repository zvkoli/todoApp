import { useContext } from "react";
import { Container } from "./TodoListStyle";
import { TodosContext } from "../../../context/TodosContext";
import TodoCard from "../../module/todoCard/TodoCard";

const TodoList: React.FC = () => {
  const { todos } = useContext(TodosContext);

  return (
    <Container>
      {todos.map((todo) => {
        return <TodoCard key={todo.id} {...todo} />;
      })}
    </Container>
  );
};

export default TodoList;
