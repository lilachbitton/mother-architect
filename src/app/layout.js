import './globals.css';
import localFont from 'next/font/local';

const frank = localFont({
  src: [
    {
      path: '../../public/fonts/FrankRuhlLibre-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FrankRuhlLibre-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FrankRuhlLibre-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-frank',
  display: 'swap',
});

export const metadata = {
  title: 'את האדריכל לבית שלך!',
  description: 'בונה באהבה • מעצבת בחכמה • מובילה בעוצמה',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={frank.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className="font-frank">
        {children}
      </body>
    </html>
  );
}