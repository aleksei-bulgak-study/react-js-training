import React from 'react';
import { shallow } from 'enzyme';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
  test('when button clicked then onClick is triggered', () => {
    const onClick = jest.fn();
    const buttonComponent = shallow(
      <LinkButton onClick={onClick} title="testTitle" />,
    );
    buttonComponent.simulate('click');

    expect(onClick).toHaveBeenCalled();
    expect(buttonComponent.html()).toMatchSnapshot();
  });
});
