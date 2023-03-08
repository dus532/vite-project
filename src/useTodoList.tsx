import { useState } from 'react';

export function useTodoList() {
  const [list, setList] = useState([
    { title: '빨래하기', checked: true },
    { title: '세차하기', checked: false },
  ]);

  const [value, setValue] = useState('');

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

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

  return {
    list,
    value,
    handleValueChange,
    onAdd,
    onDelete,
    onToggle,
  };
}
