import { useContext } from "react";
import { Form, Input, Button} from "./InputFieldStyle";
import { IoAddOutline } from "react-icons/io5";
import { TodosContext } from "../../../context/TodosContext";
import { IInputFieldProps } from "../../../types/InputFieldProps";

const InputField: React.FC<IInputFieldProps> = ({
  inputValue,
  setInputValue,
}) => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([...todos, { id: Date.now(), text: inputValue, done: false }]);
      setInputValue("");
    }
  };

  return (
    <Form onSubmit={handleAdd}>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Your Todo"
      />
      <Button type="submit">
        <IoAddOutline />
      </Button>
    </Form>
  );
};

export default InputField;
