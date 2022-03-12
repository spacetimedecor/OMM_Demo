import * as React from "react";

import themed from "../../utils/themed";
import Home from "./Home.component";

describe("Home", () => {
  it("should render correctly", () => {
    const component = themed(
      <Home>
        Test
      </Home>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
