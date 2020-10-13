import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';
import Brand from '../Brand';

describe('when Header', () => {
  test('then Header and Brand is rendered', () => {
    const header = mount(<Header />);
    expect(header).toMatchSnapshot();
    expect(header.containsMatchingElement(<Brand />)).toEqual(true);
  });
});
