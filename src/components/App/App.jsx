import { Container, Section, Heading, Examples } from 'components';

// test

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Examples
        </Heading>
        <Examples />
        {/* <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard /> */}
      </Container>
    </Section>
  );
};
