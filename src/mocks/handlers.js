import { rest } from 'msw';

export const handlers = [rest.post('/login', null), rest.get('/user', null)];
