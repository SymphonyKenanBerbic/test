import React from 'react';
import {FirstPage} from "../views";
import renderer from 'react-test-renderer';


test('renders without crashing', async () => {
    const component = renderer.create(<FirstPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


test('test on click action', async () => {
    const component = renderer.create(<FirstPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(tree.children).toHaveLength(4);
    expect(tree.children[1]).toMatch("test0");

    await component.getInstance().onClick();
    tree = component.toJSON();

    expect(tree.children[1]).toMatch("test1");

    await component.getInstance().onClick();

    tree = component.toJSON();
    expect(tree.children[1]).toMatch("test2");
    expect(tree.children).toHaveLength(4);
    console.log(tree);
    // re-rendering
});