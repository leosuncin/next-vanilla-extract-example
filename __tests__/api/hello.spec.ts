import { testApiHandler } from 'next-test-api-route-handler';

import helloHandler from '@/pages/api/hello';

it('get the name', async () => {
  await testApiHandler({
    handler: helloHandler,
    test: async ({ fetch }) => {
      const response = await fetch();

      expect(response.status).toEqual(200);
      await expect(response.json()).resolves.toMatchInlineSnapshot(`
        Object {
          "name": "John Doe",
        }
      `);
    },
  });
});
