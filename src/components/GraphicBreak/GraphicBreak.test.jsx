import * as React from "react";

import themed from "../../theme/themed";
import GraphicBreak from "./GraphicBreak.component";

describe("GraphicBreak", () => {
  it("should render correctly", () => {
    const component = themed(
      <GraphicBreak>
        Test
      </GraphicBreak>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
