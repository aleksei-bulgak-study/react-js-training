import React from 'react';
import { shallow } from 'enzyme';
import HamburgerButton from './HamburgerButton';

describe('when hamburger', () => {
  test('pressed then onClick action is triggered', () => {
    const onClick = jest.fn();
    const button = shallow(
      <HamburgerButton onClick={onClick} className="additionalClass" />,
    );
    expect(button.hasClass('additionalClass')).toEqual(true);
    button.simulate('click');
    expect(onClick).toBeCalled();
  });
});
