import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  // background: grey; /* 사이즈 조정이 잘 되고 있는 지 확인하기 위한 임시 스타일 */
`;

const TodoList = () => {
  const todos = useSelector((store) => store);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
