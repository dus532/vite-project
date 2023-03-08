import './App.css';
import TodoListItem from './TodoListItem';
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
          <TodoListItem
            key={index}
            item={item}
            onDelete={onDelete}
            onToggle={onToggle}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
