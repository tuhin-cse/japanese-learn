import './global.scss'


export const metadata = {
  title: 'Learn Japanese',
  description: 'Learn Japanese with ease',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
