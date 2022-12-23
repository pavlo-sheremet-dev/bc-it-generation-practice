import { Component, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [editToDo, setEditToDo] = useState(null);

  useEffect(() => {
    try {
      const parsedData = JSON.parse(localStorage.getItem('todos'));
      if (!parsedData) {
        return;
      } else {
        setTodos(parsedData);
      }
    } catch (error) {
      return;
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onSubmit = todo => {
    setTodos(prevTodos => [...prevTodos, { ...todo, id: nanoid() }]);
  };

  const deleteTodoFromArr = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  const toggleEditForm = id => {
    setEditToDo(id ? todos.find(el => el.id === id) : null);
  };

  const editingToDo = todo => {
    setTodos(prevState => prevState.map(el => (el.id === todo.id ? todo : el)));
    toggleEditForm();
  };

  return (
    <>
      {editToDo ? (
        <EditForm
          editToDo={editToDo}
          editingToDo={editingToDo}
          toggleEditForm={toggleEditForm}
        />
      ) : (
        <SearchForm onSubmit={onSubmit} />
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
                  deleteTodo={deleteTodoFromArr}
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

export class Todos2 extends Component {
  state = {
    todos: [],
    editToDo: null,
  };

  componentDidMount = () => {
    try {
      const getData = JSON.parse(localStorage.getItem('todos'));
      if (!getData) {
        return;
      } else {
        this.setState({ todos: getData });
      }
    } catch (error) {
      return;
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
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
