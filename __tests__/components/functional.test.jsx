import React from 'react';
import { render } from '@testing-library/react'

import Functional from '../../src/components/functional';

describe("Functional component", () => {
  test("should be rendered and print hello world message", async () => {
    const result = render(<Functional />)
    expect(result.container.querySelector('p').textContent).toEqual('Hello World from functional component!')
  });
});
