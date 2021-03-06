import React, { FC } from 'react';

type Props = {
  content: string;
  deleteTodo: (id: string) => void;
  id: string;
  handleChange: (id: string) => void;
  isDone: boolean;
};

const Item: FC<Props> = ({ content, deleteTodo, id, handleChange, isDone }) => {
  const handleDeleteClick = () => {
    deleteTodo(id);
  };
  // 三項演算子
  // 条件式 ?  trueの時 : falseの時

  return (
    <li>
      <input onChange={() => handleChange(id)} type='checkbox' />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={handleDeleteClick}>削除</button>
    </li>
  );
};

export default Item;
