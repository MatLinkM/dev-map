import React from "react";
import { shallow } from "enzyme";

import Popup from "./index";

import store from "../../store";

describe("<Popup />", () => {
  it("visiblePopup should be true", () => {
    const wrapper = shallow(<Popup store={store} />);
    wrapper.setProps({ visiblePopup: true });
    expect(wrapper.props().visiblePopup).toBeTruthy();
  });
});
