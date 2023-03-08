import './App.css';
import TodoListItem from './TodoListItem';

// 1. data를 뿌려주는 가짜 LIST
const LIST = [{ title: '빨래하기' }, { title: '세차하기' }];

function App() {
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
