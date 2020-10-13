import React from 'react';
import { mount } from 'enzyme';
import LabeledMultiSelect from './LabeledMultiSelect';

describe('LabeledMultiSelect', () => {
  test('when error was specified then it rendered', () => {
    const onAction = jest.fn();
    const select = mount(
      <LabeledMultiSelect
        title="test title"
        onAction={onAction}
        name="testName"
        error="error message"
        options={[{ label: 'Test', value: 'test' }]}
      />,
    );
    expect(select.find('p.genres__error').text()).toEqual(
      'error message',
    );
    expect(select.html()).toMatchSnapshot();
  });
});
