import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

it('render the home page', async () => {
  const { render } = await getPage({
    route: '/',
  });

  render();

  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
