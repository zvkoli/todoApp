import TodoApp from "./pages/TodoApp";
import { TodosContextProvider } from "./context/TodosContext";

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <TodoApp />
    </TodosContextProvider>
  );
};

export default App;
