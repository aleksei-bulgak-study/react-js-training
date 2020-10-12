import formatDate from './formatDate';

describe('formatDate', () => {
  test('when data specified then year returned', () => {
    const result = formatDate('11-11-2020');
    expect(result).toEqual(2020);
  });
});
