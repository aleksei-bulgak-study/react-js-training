import React from 'react';
import { shallow } from 'enzyme';
import BaseModalWindow from './BaseModalWindow';
import CloseButton from '../../Common/CloseButton';

describe('BaseModalWindow', () => {
  test('make snapshot', () => {
    const Logo = "logo component";
    const onClick = jest.fn();
    const modal = shallow(
      <BaseModalWindow
        title="test title"
        onClose={onClick}
        className="additionalClass"
        Logo={Logo}
      >
        internal data component
      </BaseModalWindow>,
    );

    expect(modal.html()).toMatchSnapshot();
    modal.find(CloseButton).simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
