/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';

import HomePage from '@/pages/index';

it('render the home page', async () => {
  render(<HomePage />);

  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
