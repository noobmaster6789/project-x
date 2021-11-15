import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'features/todos/todosSlice';

const mapDispatch = { addTodo };

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const onChange = (e) => setTodoText(e.target.value);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!todoText.trim()) {
            return;
          }
          addTodo(todoText);
          setTodoText('');
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatch)(AddTodo);
