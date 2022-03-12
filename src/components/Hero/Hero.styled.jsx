import styled from "styled-components";

const StyledHero = styled("div")`
  color: ${({ theme }) => theme.colors.primaryColor};
  height: ${({ height, theme }) => height || theme.layout.section.height };
  background: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.backgroundColor2 };
`;

export default StyledHero;
