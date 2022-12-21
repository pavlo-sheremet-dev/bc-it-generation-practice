import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
    editToDo: null,
  };

  onSubmit = todo => {
    this.setState(prevState => {
      const updateContacts = [...prevState.todos, { ...todo, id: nanoid() }];
      return {
        todos: updateContacts,
      };
    });
  };

  deleteTodoFromArr = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }));
  };

  toggleEditForm = id => {
    this.setState(prevState => {
      return {
        editToDo: id ? prevState.todos.find(el => el.id === id) : null,
      };
    });
  };

  editingToDo = todo => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(el => (el.id === todo.id ? todo : el)),
      };
    });
    this.toggleEditForm();
  };

  render() {
    const { todos, editToDo } = this.state;
    return (
      <>
        {editToDo ? (
          <EditForm
            editToDo={editToDo}
            editingToDo={this.editingToDo}
            toggleEditForm={this.toggleEditForm}
          />
        ) : (
          <SearchForm onSubmit={this.onSubmit} />
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
                    deleteTodo={this.deleteTodoFromArr}
                    openEditForm={this.toggleEditForm}
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
  }
}
