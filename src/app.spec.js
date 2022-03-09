import React from 'react';
import { App } from "./App";
import { shallow } from 'enzyme';
import * as someTextModule from './services/someText'
import sinon from "sinon";

describe('<App/>', () => {
    it('check that it renders a div with the text', () => {
        sinon.stub(someTextModule , "phraseForComponent").returns('Hello!');
        const wrapper = shallow(<App/>);
        expect(wrapper.find('div').find("h2").text()).toContain('Hello!');
    })
});

