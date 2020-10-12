import React from 'react';
import { mount } from 'enzyme';
import Congratulation from './Congratulation';

describe('Congratulation', () => {
  test('snapshot', () => {
    const onClose = jest.fn();
    const component = mount(<Congratulation onClose={onClose} />);

    component.find('button.close-button').simulate('click');
    expect(onClose).toHaveBeenCalled();
    expect(component.html()).toMatchSnapshot();
  });
});
