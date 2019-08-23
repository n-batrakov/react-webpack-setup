import React from 'react';
import { mount } from 'enzyme';

const TestComponent = () => <p>Test</p>;

describe('App', () => {
    it('test', () => {
        const wrapper = mount(<TestComponent />);

        const expected = '<p>Test</p>';
        const actual = wrapper.html();

        expect(actual).toEqual(expected);
    });
});