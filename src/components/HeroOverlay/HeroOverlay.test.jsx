import * as React from "react";

import themed from "../../theme/themed";
import HeroOverlay from "./HeroOverlay.component";

describe("HeroOverlay", () => {
  it("should render correctly", () => {
    const component = themed(
      <HeroOverlay>
        Test
      </HeroOverlay>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
