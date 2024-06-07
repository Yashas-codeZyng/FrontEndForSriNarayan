import './App.css';
import { Chat } from './components/Chat/index.tsx';
import UserInput from './components/UserInput/index.tsx';

function App() {
  return (
    <div className="App">
      <Chat />
      <UserInput />
    </div>
  );
}

export default App;
