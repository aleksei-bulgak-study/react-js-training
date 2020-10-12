import arrayToStringFormatter from './arrayToStringFormatter';

describe('when arrayToStringFormatter', () => {
  test('have list of genres and comma as separator then string of genres returned', () => {
    const genres = ['comedy', 'drama', 'horror'];
    const result = arrayToStringFormatter(genres, ',');
    expect(result).toEqual('comedy,drama,horror');
  });

  test('have single element as genre and comma as separator then single genre returned', () => {
    const genres = ['comedy'];
    const result = arrayToStringFormatter(genres, ',');
    expect(result).toEqual('comedy');
  });
});
