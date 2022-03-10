import React from "react";
import { Text } from "./Text.jsx";
import { shallow } from "enzyme";

describe("<Text/>", () => {
  it("check that it renders a div with the text", () => {
    const wrapper = shallow(<Text />);
    expect(wrapper.find("div").find("h2").text()).toContain("SOME TEXT");
  });
});
