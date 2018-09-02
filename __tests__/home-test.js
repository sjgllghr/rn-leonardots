import 'react-native';
import React from 'react';
import Home from '../src/home';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const home = renderer.create(<Home />).toJSON;

    expect(home).toMatchSnapshot();
});