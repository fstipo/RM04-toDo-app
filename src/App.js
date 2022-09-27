import './App.css';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  return (
    <MainContainer>
      <Header text="My todos" />
      <Todo text="Learn React" />
    </MainContainer>
  );
}

export default App;
