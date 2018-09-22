import React from "react";
import { shallow } from "enzyme";

import Popup from "./index";
import { SaveButton } from "./styles";

import store from "../../store";

describe("<Popup />", () => {
  it("visiblePopup should be false", () => {
    const wrapper = shallow(<Popup store={store} />);
    wrapper.setProps({ visiblePopup: false });

    expect(wrapper.visiblePopup).toBeFalsy();
  });

  it("visiblePopup should be true", () => {
    const wrapper = shallow(<Popup store={store} />);
    wrapper.setProps({ visiblePopup: false });

    wrapper.find(<SaveButton />).simulate("click");

    expect(wrapper.visiblePopup).toBeTruthy();
  });
});
