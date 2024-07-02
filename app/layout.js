import './global.scss'


export const metadata = {
  title: 'Learn Japanese',
  description: 'Learn Japanese with ease',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
        <head>
            <link rel="manifest" href="/manifest.json" />
        </head>
      <body>{children}</body>
    </html>
  )
}
