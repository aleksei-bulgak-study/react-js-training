import React from 'react';
import { shallow } from 'enzyme';
import LabeledText from './LabeledText';

describe('LabeledText', () => {
  test('when all props passed then all props rendered', () => {
    const textComponent = shallow(
      <LabeledText
        id="testId"
        title="testTitle"
        value="testValue"
        className="additionalClass"
      />,
    );
    expect(textComponent.find('label.labeled-title').text()).toContain('testTitle');
    expect(textComponent.find('label.labeled-title > p#testId').hasClass('additionalClass')).toBeTruthy();
    expect(textComponent.find('label.labeled-title > p#testId').text()).toEqual('testValue');
    expect(textComponent.html()).toMatchSnapshot();
  });
});
