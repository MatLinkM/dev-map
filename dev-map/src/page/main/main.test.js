import React from "react";
import { shallow } from "enzyme";
import Main from "./index";

it("should render MapGL", () => {
  const wrapper = shallow(<Main />);

  expect(wrapper.contains(<MapGL />)).toBe(true);
});
