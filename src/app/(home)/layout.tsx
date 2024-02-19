import { Toaster } from '@/components/ui/toaster';
import { TopMenu } from '@/components';

export default function LoginLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu/>
      <Toaster />
      {children}
    </>
  );
}