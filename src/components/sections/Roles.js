import React from 'react';
import { Card } from '../ui/Card';
import { SketchIcon } from '../ui/Icons';
import { Home, Heart } from 'lucide-react';

const roles = [
  {
    icon: (
      <div className="relative">
        <SketchIcon>
          <Home className="w-12 h-12 text-amber-700 stroke-[1.5]" />
        </SketchIcon>
      </div>
    ),
    title: "אדריכלית הבית",
    content: `את האדריכל הראשי, מאשרת את הבניה וחותמת על אישורי הבניה, הפועל הפשוט, יוצקת היסודות 
             ומנווטת את המנוף. כמובן שאת גם מעצבת פנים והמארחת בחנוכת הבית. ההתחלה בחינוך הילדים היא 
             מיקוד מבט והסתכלות נכונה, להבין כמה כח יש בך.`
  },
  {
    icon: (
      <div className="relative">
        <SketchIcon>
          <Heart className="w-12 h-12 text-rose-600 stroke-[1.5]" />
        </SketchIcon>
      </div>
    ),
    title: "אדריכלית הנשמה",
    content: `את יוצקת יסודות בליבם ובנפשם של ילדייך - יסודות של תורה ויראת שמים טהורה. 
             ערכים, מידות טובות, ודרך ארץ. בידייך את משרטטת את חדרי ליבם (מותר ואסור), 
             בוחרת היכן ימוקם מקום משחקם בפנים (הבית) או בחוץ (חברים, גינה).`
  }
];

const Roles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      {roles.map((role, index) => (
        <div key={index} className="group">
          <div className="relative transform transition-all duration-500 hover:scale-102">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-rose-100 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
            <Card className="p-10">
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-200 opacity-20"></div>
              <div className="flex items-center gap-8 mb-8">
                <div className="relative">
                  <div className="p-6 bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl border border-amber-100 shadow-inner">
                    {role.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-amber-900">{role.title}</h3>
              </div>
              <p className="text-lg text-amber-800 leading-relaxed">{role.content}</p>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roles;