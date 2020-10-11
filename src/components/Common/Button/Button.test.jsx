import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('when Button', () => {
  test('with title and onClick handler then click should trigger function', () => {
    const onClick = jest.fn();
    const title = "test button";
    const className = "additionalClass";
    const button = shallow(
      <Button
        title={title}
        onClick={onClick}
        className={className}
        type="button"
      />,
    );

    button.simulate('click');
    expect(onClick).toBeCalled();
    expect(button.text()).toEqual(title);
    expect(button.hasClass(className)).toEqual(true);
  });
});
