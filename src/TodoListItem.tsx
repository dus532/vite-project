export default function TodoListItem({
  item,
  index,
  onToggle,
  onDelete,
}: {
  item: { title: string; checked: boolean };
  index: number;
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}) {
  return (
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
  );
}
