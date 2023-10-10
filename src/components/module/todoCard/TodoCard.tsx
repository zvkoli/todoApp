import {useContext, useRef, useState} from "react";
import {TodosContext} from "../../../context/TodosContext";
import {Card, Text, Button, ButtonBox, Input} from "./TodoCardStyle";
import {INoteCardProps } from "../../../types/NoteCardProps";
import {MdOutlineDone, MdOutlineDoneAll , MdEdit} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai";

const TodoCard: React.FC<INoteCardProps> = ({ text, id }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(text);
  const { todos, setTodos } = useContext(TodosContext);

  const handleDone = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = () => {
    setEdit(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSaveEdit = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editTodo };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      {edit ? (
        <Card>
          <Input
            type="text"
            value={editTodo}
            ref={inputRef}
            autoFocus={edit}
            onChange={(e) => setEditTodo(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSaveEdit();
              }
            }}
          />
          <Button
            onClick={handleSaveEdit}
          >
            <MdOutlineDone />
          </Button>
        </Card>
      ) : (
        <Card>
          <Text>
            {text}
          </Text>
          <ButtonBox>
            <Button onClick={handleDone}>
              {todos.find((todo) => todo.id === id)?.done ? <MdOutlineDoneAll /> : <MdOutlineDone />}
            </Button>
            <Button onClick={handleEdit}>
              <MdEdit />
            </Button>
            <Button onClick={handleDelete}>
              <AiFillDelete />
            </Button>
          </ButtonBox>
        </Card>
      )}
    </>
  );
};

export default TodoCard;
