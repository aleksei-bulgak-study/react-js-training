import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('when Image', () => {
  test('with src and alt provided then cmponent will be rendered', () => {
    const src = "image path";
    const image = shallow(<Image src={src} alt="testDescription" className="testImage"/>);

    expect(image.find('.testImage').prop('src')).toEqual(src);
    expect(image.find('.testImage').prop('alt')).toEqual("testDescription");
    expect(image).toMatchSnapshot();
  });
});
