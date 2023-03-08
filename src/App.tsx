import './App.css';
import { useTodoList } from './useTodoList';

function App() {
  const { value, handleValueChange, onAdd, onDelete, onToggle, list } =
    useTodoList();

  return (
    <div className='App'>
      <input value={value} onChange={handleValueChange} />
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
