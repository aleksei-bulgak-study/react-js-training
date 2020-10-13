import { render } from 'enzyme';
import React from 'react';
import Brand from './Brand';

describe('when Brand', () => {
  test('then snapshot created', () => {
    const brandComponent = render(<Brand />);

    expect(brandComponent.find('.brand__name').text()).toEqual('netflix');
    expect(brandComponent).toMatchSnapshot();
  });
});
