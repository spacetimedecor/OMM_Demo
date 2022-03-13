import styled from "styled-components";

const StyledHeroOverlay = styled("div")`
  position: absolute;
  color: white;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.heroOverlay.backgroundColor };

  h2.subtitle {
    text-align: center;
    font-size: 20px;
    font-family: Subtitle;
  }
`;

export default StyledHeroOverlay;
