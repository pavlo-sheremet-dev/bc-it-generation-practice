import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onclickIncrement = option => {
    console.log(option);

    this.setState(prevState => {
      return {
        [option]: prevState[option] + 5,
      };
    });

    // this.setState(prevState => {
    //   return { [option]: prevState[option] + 1 };
    // });
  };

  render() {
    return (
      <>
        {Object.keys(this.state).map(option => (
          <button
            key={option}
            type="button"
            onClick={() => this.onclickIncrement(option)}
          >
            {option}
          </button>
        ))}
      </>
    );
  }
}
