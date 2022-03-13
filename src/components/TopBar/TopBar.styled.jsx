import styled from "styled-components";

const StyledTopBar = styled("nav")`
  height: ${({ height, theme }) => height || theme.layout.topBar.height };
  background: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.backgroundColor1 };
  color: ${({ color, theme }) => color || theme.colors.primaryColor };
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 50;

  ${ ({ withBorder, borderColor, theme }) => withBorder ? 
    `${ borderColor || theme.colors.borderColor } 1px solid` : 
    '' 
  }
`;

export default StyledTopBar;
