import type { Child } from 'hono/jsx'
import { Header } from './Header.js'
import { Main } from './Main.js'
import { Footer } from './Footer.js'

export const Layout = ({ children, title }: { children: Child, title: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
