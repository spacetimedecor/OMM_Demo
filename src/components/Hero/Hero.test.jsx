import * as React from "react";

import themed from "../../theme/themed";
import Hero from "./Hero.component";

describe("Hero", () => {
  it("should render correctly", () => {
    const component = themed(
      <Hero>
        Test
      </Hero>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
