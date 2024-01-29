import cookie from '@fastify/cookie'
import fastify from 'fastify'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()
// Cookies <-> Formas das gente se manter contexto entre as requisições
app.register(cookie)

app.register(transactionsRoutes, {
  prefix: '/transactions',
})
