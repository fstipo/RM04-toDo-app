import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="container display-4">
      <h1>My Todos</h1>
      <Todo text="Learn React" />
    </div>
  );
}

export default App;
