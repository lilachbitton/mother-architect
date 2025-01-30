import './globals.css';
import localFont from 'next/font/local';

const frank = localFont({
  src: [
    {
      path: '../../public/fonts/FrankRuhlLibre-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/FrankRuhlLibre-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-frank'
});

export const metadata = {
  title: 'את האדריכל לבית שלך!',
  description: 'בונה באהבה • מעצבת בחכמה • מובילה בעוצמה',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${frank.variable} font-frank`}>
        {children}
      </body>
    </html>
  );
}