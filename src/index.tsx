import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Home } from './pages/Home.js'

export const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(<Home />)
})

const port = 3000

if (process.env['NODE_ENV'] !== 'test') {
  console.log(`Server is running on http://localhost:${port}`)
  serve({
    fetch: app.fetch,
    port
  })
}
