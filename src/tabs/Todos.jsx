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

  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
      </>
    );
  }
}
