import { useState } from "react";
import { Container, Header, Title, InputBox } from "./TodoAppStyle";
import InputField from "../components/module/inputField/InputField";
import TodoList from "../components/template/todoList/TodoList";

const NotsApp: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Container>
      <Header>
      <Title>ToDo</Title>
        <InputBox>
          <InputField inputValue={inputValue} setInputValue={setInputValue} />
        </InputBox>
      </Header>
      <TodoList />
    </Container>
  );
};

export default NotsApp;
