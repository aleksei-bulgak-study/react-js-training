import React from 'react';
import { mount } from 'enzyme';
import LabeledInput from './LabeledInput';

describe('LabeledInput', () => {
  test('when error was not specified then only input rendered', () => {
    let value = 'test value';
    const onChange = jest.fn((e) => {
      value = e.target.value;
    });
    const input = mount(
      <LabeledInput
        id="testid"
        title="test title"
        value={value}
        onChange={onChange}
        type="button"
        name="testName"
      />,
    );

    expect(input.find('input#testid').props().value).toEqual('test value');
    input.find('input#testid').simulate('change', { target: { value: 'new Value' } });
    expect(onChange).toHaveBeenCalled();
    input.setProps({value});
    expect(input.find('input#testid').props().value).toEqual('new Value');
  });

  test('when error was specified then it rendered', () => {
    let value = 'test value';
    const onChange = jest.fn((e) => {
      value = e.target.value;
    });
    const input = mount(
      <LabeledInput
        id="testid"
        title="test title"
        value={value}
        onChange={onChange}
        type="button"
        name="testName"
        error="error message"
      />,
    );

    expect(input.find('input#testid').props().value).toEqual('test value');
    input.find('input#testid').simulate('change', { target: { value: 'new Value' } });
    expect(onChange).toHaveBeenCalled();
    input.setProps({value});
    expect(input.find('input#testid').props().value).toEqual('new Value');
    expect(input.find('p.labeled-input__error').text()).toEqual("error message");
  });
});
