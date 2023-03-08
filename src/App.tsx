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

  function onDelete(index: number) {
    setList(list.filter((_, i) => i !== index));
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
          <div key={index} className='todolist_item'>
            <div className='todolist_item_name'>{index + 1}</div>
            <div className='todolist_item_title'>{item.title}</div>
            <div className='todolist_item_button'>
              <button>수정</button>
            </div>
            <div className='todolist_item_button'>
              <button
                onClick={() => {
                  onDelete(index);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
