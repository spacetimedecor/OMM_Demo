import * as React from "react";

import themed from "../../theme/themed";
import Hey from "./Hey.component";

describe("Hey", () => {
  it("should render correctly", () => {
    const component = themed(
      <Hey>
        Test
      </Hey>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
