import React from "react";
import { App } from "./App";
import { shallow } from "enzyme";
import * as someTextModule from "./services/someText";
import sinon from "sinon";

describe("<App/>", () => {
  let wrapper;
  let getAppContentStub;

  beforeEach(() => {
    getAppContentStub = sinon
      .stub(someTextModule, "phraseForComponent")
      .returns("Hello!");
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    getAppContentStub.restore();
    wrapper.unmount();
  });
  it("check that it renders a div with the text", () => {
    expect(wrapper.find("div").find("h2").text()).toContain("Hello!");
  });
});
