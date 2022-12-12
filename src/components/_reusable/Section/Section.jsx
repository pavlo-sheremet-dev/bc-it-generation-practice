import { SectionStyled } from './Section.styled';

const Section = ({ children, className, style, pt, pb }) => {
  return (
    <SectionStyled className={className} style={style} pt={pt} pb={pb}>
      {children}
    </SectionStyled>
  );
};

export default Section;
