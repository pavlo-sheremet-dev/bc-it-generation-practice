import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  onSubmit = todo => {
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, { ...todo, id: nanoid() }],
      };
    });
  };

  deleteTodoFromArr = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
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
