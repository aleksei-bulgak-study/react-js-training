import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import FilmForm from './FilmForm';

describe('FilmForm', () => {
  beforeEach(async () => {
    await cleanup();
    jest.resetAllMocks();
  });

  test('when all fields are empty then errors is displayed', async () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    const form = render(
      <FilmForm
        title="Add film"
        onSubmit={onSubmit}
        onClose={onClose}
        defaultGenres={[{ label: 'All', value: 'all' }]}
      />,
    );
    const submitButton = form.container.querySelector('.film-form');

    expect(
      form.container.querySelectorAll('p.labeled-input__error').length,
    ).toEqual(0);

    await waitFor(() => {
      fireEvent.submit(submitButton);
    });

    expect(
      form.container.querySelectorAll('p.labeled-input__error').length,
    ).toEqual(5);

    expect(onSubmit).not.toHaveBeenCalled();
    expect(form).toMatchSnapshot();
  });

  test('when all fields are populated then onSubmit is called', async () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    const form = render(
      <FilmForm
        title="Add film"
        initialState={{ genres: ['all'] }}
        onSubmit={onSubmit}
        onClose={onClose}
        defaultGenres={[{ label: 'All', value: 'all' }]}
      />,
    );
    const submitButton = form.container.querySelector('.film-form__actions__submit');

    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-title'), {
        target: { value: 'test title' },
      });
    });
    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-release'), {
        target: { value: '11/10/2020' },
      });
    });
    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-url'), {
        target: { value: 'https://example.com' },
      });
    });
    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-overview'), {
        target: { value: 'test description' },
      });
    });
    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-runtime'), {
        target: { value: 123 },
      });
    });

    await waitFor(() => {
      fireEvent.submit(submitButton);
    });

    expect(
      form.container.querySelectorAll('p.labeled-input__error').length,
    ).toEqual(0);
    expect(form.container.querySelectorAll('.genres__error').length).toEqual(0);

    expect(onSubmit).toHaveBeenCalled();
    expect(form).toMatchSnapshot();
  });

  test('when all fields are populated then onReset clicked then values resetted', async () => {
    const onSubmit = jest.fn();
    const onClose = jest.fn();
    const form = render(
      <FilmForm
        title="Add film"
        initialState={{ genres: ['all'] }}
        onSubmit={onSubmit}
        onClose={onClose}
        defaultGenres={[{ label: 'All', value: 'all' }]}
      />,
    );
    const resetButton = form.container.querySelector(
      '.film-form__actions__reset',
    );

    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-title'), {
        target: { value: 'test title' },
      });
    });
    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-release'), {
        target: { value: '11/10/2020' },
      });
    });
    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-url'), {
        target: { value: 'https://example.com' },
      });
    });
    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-overview'), {
        target: { value: 'test description' },
      });
    });
    await waitFor(() => {
      fireEvent.change(form.container.querySelector('#film-runtime'), {
        target: { value: 123 },
      });
    });

    expect(
      form.container.querySelectorAll('p.labeled-input__error').length,
    ).toEqual(0);
    expect(form.container.querySelectorAll('.genres__error').length).toEqual(0);

    await waitFor(() => {
      fireEvent.click(resetButton);
    });

    expect(form.container.querySelector('#film-title').value).toEqual('');
    expect(form.container.querySelector('#film-release').value).toEqual('');
    expect(form.container.querySelector('#film-url').value).toEqual('');
    expect(form.container.querySelector('#film-overview').value).toEqual('');
    expect(form.container.querySelector('#film-runtime').value).toEqual('');

    expect(onSubmit).not.toHaveBeenCalled();
    expect(form).toMatchSnapshot();
  });
});
