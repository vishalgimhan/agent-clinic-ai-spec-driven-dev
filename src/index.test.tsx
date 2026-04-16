import { describe, it, expect } from 'vitest'
import { app } from './index.js'

describe('AgentClinic App', () => {
  it('should return 200 OK and "AgentClinic" on GET /', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    const body = await res.text()
    expect(body).toContain('<h1>AgentClinic</h1>')
  })
})
