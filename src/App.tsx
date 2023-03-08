import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([
    { title: '빨래하기', checked: true },
    { title: '세차하기', checked: false },
  ]);

  const [value, setValue] = useState('');

  function onAdd() {
    setList([...list, { title: value, checked: false }]);
    setValue('');
  }

  function onDelete(index: number) {
    setList((list) => list.filter((_, i) => i !== index));
  }

  function onToggle(index: number) {
    setList((list) =>
      list.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      })
    );
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
            <div className='todolist_item_name'>
              <input
                type='checkbox'
                checked={item.checked}
                onChange={() => {
                  onToggle(index);
                }}
              />
            </div>
            <div className={`todolist_item_title ${item.checked && 'checked'}`}>
              {item.title}
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
