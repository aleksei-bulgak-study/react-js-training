import React from 'react';
import { render } from 'enzyme';
import Footer from './Footer';
import Brand from '../Brand';

describe('when Footer rendered', () => {
  test('then Brand component is rendered', () => {
    const footerComponent = render(<Footer />);

    expect(footerComponent.find(Brand)).toBeTruthy();
    expect(footerComponent).toMatchSnapshot();
  });
});
