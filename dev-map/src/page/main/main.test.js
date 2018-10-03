import React from "react";
import { shallow } from "enzyme";

import Main from "./index";

import store from "../../store";
import MapGL, { Marker } from "react-map-gl";

describe("<Main />", () => {
  it("should contain MapGL", () => {
    const wrapper = shallow(<Main store={store} />);
    expect(wrapper.dive().find(<MapGL />));
  });

  it("should contain Marker", () => {
    const wrapper = shallow(<Main store={store} />);
    expect(
      wrapper
        .dive()
        .find(<Marker latitude={-5.821855} longitude={-35.228174} />)
    );
  });
});
