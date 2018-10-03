import React from "react";
import { shallow } from "enzyme";

import Main from "../../page/main";

import store from "../../store";
import { SaveButton } from "./styles";

describe("<Popup />", () => {
  it("visiblePopup should be false", () => {
    const wrapper = shallow(<Main store={store} />);

    expect(wrapper.visiblePopup).toBeFalsy();
  });

  it("visiblePopup should be true", () => {
    const wrapper = shallow(<Main store={store} />);
    console.log(wrapper.debug());

    const button = shallow(<SaveButton />);
    console.log(button.debug());
    button.simulate("click");

    expect(wrapper.visiblePopup).toBeTruthy();
  });
});
