import styled from "styled-components";

const StyledHero = styled("div")`
  color: ${({ theme }) => theme.colors.primaryColor};
  height: ${({ height, theme }) => height || theme.layout.section.height };
  background: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.backgroundColor2 };
  position: relative;
  width: 100vw;
  &:hover {
    cursor: grab;
  }
  
  &:active {
    cursor: grabbing;
  }
`;

export default StyledHero;
