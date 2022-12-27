import { useState } from 'react';

import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

import { useArrayDataHandler } from 'hooks/useArrayDataHandler';

export const Todos = () => {
  const {
    data: todos,
    deleteData: deleteTodo,
    changeData: editTodo,
    addData: addTodo,
  } = useArrayDataHandler({ localStorageKey: 'todos-dfgdnDfgFRng' });

  const [editToDo, setEditToDo] = useState(null);

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
        <Grid>
          {todos.map(({ id, text }, idx) => {
            return (
              <GridItem key={id}>
                <Todo
                  id={id}
                  number={idx + 1}
                  text={text}
                  deleteTodo={deleteTodo}
                  openEditForm={toggleEditForm}
                />
              </GridItem>
            );
          })}
        </Grid>
      ) : (
        <Text>There are no todos...</Text>
      )}
    </>
  );
};
