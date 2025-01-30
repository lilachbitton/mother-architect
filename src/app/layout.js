import './globals.css';

export const metadata = {
  title: 'את האדריכל לבית שלך!',
  description: 'בונה באהבה • מעצבת בחכמה • מובילה בעוצמה',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-frank">
        {children}
      </body>
    </html>
  );
}