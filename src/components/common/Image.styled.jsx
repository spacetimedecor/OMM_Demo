import styled from "styled-components";

export const StyledImage = styled("img")`
  padding: ${ ({ theme, padding }) => padding || theme.layout.topBar.imagePadding };
  
  ${ ({ onClick }) => onClick ? '&:hover { cursor: pointer }' : '' }
`;
