import { ReactNode } from 'react';
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
      <TodoList
        data={list}
        renderItem={({ item, index }) => {
          return (
            <TodoListItem
              key={index}
              item={item}
              onDelete={onDelete}
              onToggle={onToggle}
              index={index}
            />
          );
        }}
      />
    </div>
  );
}

function TodoList<T>({
  data,
  renderItem,
}: {
  data: T[];
  renderItem: ({ item, index }: { item: T; index: number }) => ReactNode;
}) {
  return (
    <div className='todolist'>
      {data?.map((item, index) => {
        return renderItem({ item, index });
      })}
    </div>
  );
}

export default App;
