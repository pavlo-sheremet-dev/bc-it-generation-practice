import { HeadingStyled } from './Heading.styled';

const Heading = ({ title = '', isHidden = false }) => {
  return (
    <HeadingStyled className={isHidden && 'isHidden'}>{title}</HeadingStyled>
  );
};

export default Heading;
