import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/chat' element={<ChatPage/>} />
      </Routes>
    </section>
  );
}

export default App;
