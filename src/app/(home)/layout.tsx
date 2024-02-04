import { TopMenu } from '../../components/ui/top-menu';

export default function LoginLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu/>
      {children}
    </>
  );
}