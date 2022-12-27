const data = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
};

export const Examples = () => {
  return (
    <>
      <Heading />
      <br />
      <Title text={'Компонент User'} tag={'h1'} />
      <User firstName={'Ivan'} lastName="Ivanov" />
      <br />
      <Title text={'Компонент User2'} />
      <User2 firstName="Ivan" lastName={'Ivanov'} />
      <br />
      <Title text={'Компонент User3'} tag="h3" />
      <User3 userData={data} />
      <br />
      <Title text={'Компонент User3'} tag="h3" />
      <User4 userData={data} />
    </>
  );
};

const Heading = () => {
  return <h1>My first component</h1>;
};

const User = props => {
  return (
    <>
      <p>
        <b>First name:</b> {props.firstName}
      </p>
      <p>
        <b>Last name:</b> {props.lastName}
      </p>
    </>
  );
};

const User2 = ({ firstName, lastName }) => {
  // полная аналогия User, параметр props деструтуризирован
  return (
    <>
      <p>
        <b>First name:</b> {firstName}
      </p>
      <p>
        <b>Last name:</b> {lastName}
      </p>
    </>
  );
};

const User3 = ({ userData }) => {
  // передаём только один проп, который ожижает получить объект
  // с двумя свойствами firstName и lastName
  return (
    <>
      <p>
        <b>First name:</b> {userData.firstName}
      </p>
      <p>
        <b>Last name:</b> {userData.lastName}
      </p>
    </>
  );
};

const User4 = ({ userData }) => {
  // аналогия User3, только делаем деструктуризацию userData
  const { firstName, lastName } = userData;
  return (
    <>
      <p>
        <b>First name:</b> {firstName}
      </p>
      <p>
        <b>Last name:</b> {lastName}
      </p>
    </>
  );
};

const Title = ({ text, tag = 'h2' }) => {
  const Tag = tag;
  return <Tag>{text}</Tag>;
};
