// 액션
let nextId = 5;
export const create = (text) => ({
  type: 'CREATE',
  todo: {
    id: nextId++,
    text,
    done: false,
  },
});
export const toggle = (id) => ({ type: 'TOGGLE', id });
export const remove = (id) => ({ type: 'REMOVE', id });

// 상태
const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];
// 리듀서

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todoReducer;
