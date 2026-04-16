import { describe, it, expect } from 'vitest'
import { Hono } from 'hono'
import { Layout } from './Layout.js'

describe('Layout Component', () => {
  it('should render the title and children correctly', async () => {
    const app = new Hono()
    const title = 'Test Title'
    const content = 'Test Content'

    app.get('/test', (c) => {
      return c.html(
        <Layout title={title}>
          <div id="test-content">{content}</div>
        </Layout>
      )
    })

    const res = await app.request('/test')
    const html = await res.text()

    expect(html).toContain(`<title>${title}</title>`)
    expect(html).toContain(`<div id="test-content">${content}</div>`)
    expect(html).toContain('<header>')
    expect(html).toContain('<footer>')
    expect(html).toContain('<link rel="stylesheet" href="/static/style.css"/>')
  })
})
