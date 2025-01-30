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
    },
  ],
  variable: '--font-frank'
});

export const metadata = {
  title: 'אדריכלית הבית והנשמה',
  description: 'את האדריכל לבית שלך - בונה באהבה, מעצבת בחכמה, מובילה בעוצמה',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${frank.variable} font-frank`}>
        {children}
      </body>
    </html>
  );
}