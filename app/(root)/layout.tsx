import type { Metadata } from 'next';
import { Header } from '@/shared/components/shared';


export const metadata: Metadata = {
  title: 'Nuxt Pizza',
  description: 'Nuxt Pizza',
};

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <div className="bg-white rounded-3xl">
        <Header />
        {children}
        {modal}
      </div>
    </main>
  );
}
