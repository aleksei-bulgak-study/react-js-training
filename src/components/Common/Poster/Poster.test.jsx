import React from 'react';
import { shallow } from 'enzyme';
import Poster from './Poster';

describe('Poster', () => {
  test('when invalid image specified then fallback image is used', () => {
    const poster = shallow(<Poster src="image-path" alt="test description" className="additionalClass" fallback="fallbackImg"/>);

    expect(poster.find('img.additionalClass').prop('src')).toEqual('image-path');
    poster.simulate('error');
    expect(poster.find('img.additionalClass').prop('src')).toEqual('fallbackImg');
    expect(poster.find('img.additionalClass').prop('alt')).toEqual('test description');
    expect(poster.find('img.additionalClass').hasClass('additionalClass')).toBeTruthy();
  });
});
