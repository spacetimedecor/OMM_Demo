import * as React from "react";

import themed from "../../theme/themed";
import OverlayMenu from "./OverlayMenu.component";

describe("OverlayMenu", () => {
  it("should render correctly", () => {
    const component = themed(
      <OverlayMenu>
        Test
      </OverlayMenu>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
