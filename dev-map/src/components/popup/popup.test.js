import React from "react";
import { shallow } from "enzyme";

import Main from "../../page/main";
import Popup from "./index";

import store from "../../store";
import { SaveButton, CancelButton } from "./styles";

// const visiblePopup = true;

describe("<Popup />", () => {
  it("visiblePopup should be true", () => {
    const wrapper = shallow(<Popup store={store} />);
    wrapper.setProps({ visiblePopup: true });
    expect(wrapper.props().visiblePopup).toBeTruthy();
  });
});
