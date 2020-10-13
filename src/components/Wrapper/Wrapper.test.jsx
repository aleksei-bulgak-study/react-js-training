import React from 'react';
import { render } from 'enzyme';
import Wrapper from './Wrapper';

describe('when Wrapper rendered', () => {
  test('then child component should be rendered', () => {
    const ChildComponent = <div className="test">Test child element</div>;
    const wrapperComponent = render(<Wrapper>{ChildComponent}</Wrapper>);

    expect(wrapperComponent.find('.wrapper > .test')).toBeTruthy();
    expect(wrapperComponent).toMatchSnapshot();
  });
});
