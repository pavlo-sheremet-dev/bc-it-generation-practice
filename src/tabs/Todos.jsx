import { useState } from 'react';

import { SearchForm, EditForm, Text, TodoList } from 'components';

import { useArrayDataHandler } from 'hooks/useArrayDataHandler';

export const Todos = () => {
  const [editToDo, setEditToDo] = useState(null);
  const {
    data: todos,
    deleteData: deleteTodo,
    changeData: editTodo,
    addData: addTodo,
  } = useArrayDataHandler({ localStorageKey: 'todos-dfgdnDfgFRng' });

  const toggleEditForm = id => {
    setEditToDo(id ? todos.find(el => el.id === id) : null);
  };

  const handleEdit = todo => {
    editTodo(todo);
    toggleEditForm();
  };

  return (
    <>
      {editToDo ? (
        <EditForm
          editToDo={editToDo}
          editingToDo={handleEdit}
          toggleEditForm={toggleEditForm}
        />
      ) : (
        <SearchForm onSubmit={addTodo} />
      )}

      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleEditForm={toggleEditForm}
        />
      ) : (
        <Text>There are no todos...</Text>
      )}
    </>
  );
};
