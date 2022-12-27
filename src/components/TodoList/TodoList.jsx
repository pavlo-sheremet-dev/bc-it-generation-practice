import { Grid, GridItem, Todo } from 'components';

export const TodoList = ({ todos, deleteTodo, toggleEditForm }) => {
  return (
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
  );
};
