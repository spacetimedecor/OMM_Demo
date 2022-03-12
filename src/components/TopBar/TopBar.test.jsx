import * as React from "react";

import themed from "../../theme/themed";
import TopBar from "./TopBar.component";

describe("TopBar", () => {
  it("should render correctly", () => {
    const component = themed(
      <TopBar>
        Test
      </TopBar>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
