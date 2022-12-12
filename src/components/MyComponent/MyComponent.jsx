import { Container, Heading, Section } from 'components/_reusable';

const MyComponent = () => {
  return (
    <>
      <Section pt={20}>
        <Container>
          <Heading title="Section 1" />
          <br />
          <p>some content</p>
          <br />
          <div style={{ width: 40, height: 40, backgroundColor: 'red' }}></div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading title="Section 2" />
          <br />
          <p>some content</p>
          <br />
          <div
            style={{ width: 40, height: 40, backgroundColor: 'yellow' }}
          ></div>
        </Container>
      </Section>
      <Section pb={20}>
        <Container>
          <Heading title="Section 3" />
          <br />
          <p>some content</p>
          <br />
          <div
            style={{ width: 40, height: 40, backgroundColor: 'green' }}
          ></div>
        </Container>
      </Section>
    </>
  );
};

export default MyComponent;
