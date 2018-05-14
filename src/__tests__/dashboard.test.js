import React from 'react';
import {Dashboard} from "../views";
import renderer from 'react-test-renderer';

it('renders without crashing dashboard', () => {
    const component = renderer.create(<Dashboard />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

