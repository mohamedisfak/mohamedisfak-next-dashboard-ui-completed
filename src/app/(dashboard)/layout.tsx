import Menu from '@/component/Menu';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
          {/*LEFT*/}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
          <Link href="/" passHref>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} priority/>
            <span className="hidden lg:block">SmartCampus</span>
          </div>
          </Link>
          <Menu />
          </div>
          {/*RIGHT*/}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">r</div>
        </div>
    );
  }