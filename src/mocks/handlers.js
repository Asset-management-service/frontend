import { rest } from 'msw';

export const handlers = [
  rest.get('/oauth2/authorization/google', (req, res, ctx) => {
    const redirect_uri = req.url.searchParams.get('redirect_uri');
    const jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    window.location.assign(`${redirect_uri}?token=${jwt}`);
    return res(
      ctx.status(307),
      ctx.set({
        Location: `${redirect_uri}?token=${jwt}`,
      }),
    );
  }),
  rest.get('/oauth2/authorization/google', (req, res, ctx) => {
    const redirect_uri = req.url.searchParams.get('redirect_uri');
    const jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    window.location.assign(`${redirect_uri}?token=${jwt}`);
    return res(
      ctx.status(307),
      ctx.set({
        Location: `${redirect_uri}?token=${jwt}`,
      }),
    );
  }),
  rest.get('/oauth2/authorization/google', (req, res, ctx) => {
    const redirect_uri = req.url.searchParams.get('redirect_uri');
    const jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    window.location.assign(`${redirect_uri}?token=${jwt}`);
    return res(
      ctx.status(307),
      ctx.set({
        Location: `${redirect_uri}?token=${jwt}`,
      }),
    );
  }),
  rest.get('/oauth/redirect', (req, res, ctx) => {
    return res(ctx.status(400));
  }),
  rest.get('/user', null),
];
