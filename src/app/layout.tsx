import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import ReactQueryProvider from "./ReactQueryProvider";
import Header from '@/components/view/Header';
import FloatingBtn from '@/components/ui/FloatingBtn';

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"], 
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata = {
  title: '댕도네냥',
  description: '마음을 전해보세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={notoSansKr.className}>
      <body>
        <Header />
      <ReactQueryProvider>{children}</ReactQueryProvider>
      <FloatingBtn /> 
        </body>
    </html>
  )
}
