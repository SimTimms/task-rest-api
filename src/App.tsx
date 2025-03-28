import "./App.css";
import { Crud } from "./pages";

const App: React.FC = () => {
  return (
    <main className="app-main">
      <Crud data-testid="crud-component" />
    </main>
  );
};

export default App;
