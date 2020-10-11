import React from 'react';
import { shallow } from 'enzyme';
import CloseButton from './CloseButton';

describe('when CloseButton', () => {
  test('with title and onClick handler then click should trigger function', () => {
    const onClick = jest.fn();
    const className = "additionalClass";
    const button = shallow(
      <CloseButton
        onClick={onClick}
        className={className}
        type="button"
      />,
    );

    button.simulate('click');
    expect(onClick).toBeCalled();
    expect(button.text()).toEqual('Close');
    expect(button.hasClass(className)).toEqual(true);
  });
});
