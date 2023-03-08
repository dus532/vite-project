import './App.css';

// 1. data를 뿌려주는 가짜 LIST
const LIST = [{ title: '빨래하기' }, { title: '세차하기' }];

function App() {
  return (
    <div className='App'>
      <button>추가하기</button>
      <div className='todolist'>
        {LIST.map((item, index) => (
          <div className='todolist_item'>
            <div className='todolist_item_name'>{index + 1}</div>
            <div className='todolist_item_title'>{item.title}</div>
            <div className='todolist_item_button'>
              <button>수정</button>
            </div>
            <div className='todolist_item_button'>
              <button>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
