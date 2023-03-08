import { useState } from 'react';
import './App.css';
import TodoListItem from './TodoListItem';

function App() {
  const [LIST, setLIST] = useState([
    { title: '빨래하기' },
    { title: '세차하기' },
  ]);

  return (
    <div className='App'>
      <button>추가하기</button>
      <div className='todolist'>
        {LIST.map((item, index) => (
          <TodoListItem item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
