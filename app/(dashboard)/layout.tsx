export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function DasboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      DASBOARD HEADER
      <body>{children}</body>
    </html>
  )
}
