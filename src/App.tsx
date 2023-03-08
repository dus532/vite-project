import { useState } from 'react';
import './App.css';
import TodoListItem from './TodoListItem';

function App() {
  const [list, setList] = useState([
    { title: '빨래하기' },
    { title: '세차하기' },
  ]);

  const [value, setValue] = useState('');
  console.log(value);

  function onAdd() {
    setList([...list, { title: value }]);
    setValue('');
  }

  return (
    <div className='App'>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={onAdd}>추가하기</button>
      <div className='todolist'>
        {list.map((item, index) => (
          <TodoListItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
