import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date as NewDate,
} from './BlogCard.styled';
import propTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  const date = formatDistanceToNow(new Date(postedAt));
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={tag} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <NewDate>{date}</NewDate>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};

BlogCard.propTypes = {
  poster: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  postedAt: propTypes.string.isRequired,
};
