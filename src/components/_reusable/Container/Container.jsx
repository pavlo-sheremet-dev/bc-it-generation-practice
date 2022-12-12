import { ContainerStyled } from './Container.styled';

const Container = ({
  children,
  className,
  style,
  disableXPaddings = false,
  pt,
  pb,
}) => {
  return (
    <ContainerStyled
      style={style}
      disableXPaddings={disableXPaddings}
      className={className}
      pt={pt}
      pb={pb}
    >
      {children}
    </ContainerStyled>
  );
};

export default Container;
