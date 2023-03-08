export default function TodoListItem({
  item,
  index,
}: {
  item: { title: string };
  index: number;
}) {
  return (
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
  );
}
