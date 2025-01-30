import React from 'react';
import { 
  Crown, Heart, Sparkles, Sun, Shield, 
  Compass, Book, Home, Star, Coffee,
  Flower, Key, Lock, Feather,
  Ruler, CircleDot, Triangle
} from 'lucide-react';

const SketchIcon = ({ children, size = "normal" }) => {
  const sizeClasses = size === "large" ? "opacity-80" : "opacity-90";
  return (
    <div className={`relative ${sizeClasses}`}>
      <div style={{
        filter: 'grayscale(0.4) contrast(0.9)',
        mixBlendMode: 'multiply'
      }}>
        {children}
      </div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0l100 100M100 0L0 100\' stroke=\'%23000\' stroke-width=\'0.5\' opacity=\'0.1\'/%3E%3C/svg%3E")',
        backgroundSize: '8px 8px'
      }}></div>
    </div>
  );
};

const MotherArchitect = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-rose-100 to-amber-100 rounded-3xl opacity-20"></div>
          <div className="relative bg-white rounded-3xl p-16 text-center border border-amber-100 shadow-xl overflow-hidden">
            <div className="absolute top-4 right-4 w-32 h-32 border-t-2 border-r-2 border-amber-200 opacity-20"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 border-b-2 border-l-2 border-amber-200 opacity-20"></div>
            
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-rose-700 to-amber-800 mb-8">
              את האדריכל לבית שלך!
            </h1>
            
            <p className="text-xl text-amber-800 leading-relaxed mb-8">
              כשאת מביטה בבניין מוגמר, נפעמת מיופיו, את ודאי מבינה, כי לא ביום אחד נסתיימה בנייתו. הבית הפרטי שלך, וחינוך ילדייך הם מלאכה מורכבת הפולשת על תחומים רבים, ודורשת זמן רב.
            </p>
          </div>
        </div>

        <div className="relative mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-amber-100">
            <div className="text-center">
              <p className="text-3xl text-amber-900 font-serif leading-relaxed">
                אל תמעיטי בערכך!
                <br />
                <span className="font-bold">האמיני בכוחות הטמונים בך וביכולותייך!</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {roles.map((role, index) => (
            <div key={index} className="group">
              <div className="relative transform transition-all duration-500 hover:scale-102">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-rose-100 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white rounded-3xl p-10 border border-amber-100 shadow-xl">
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
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl"></div>
          <div className="relative p-12 rounded-3xl border border-amber-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-amber-900">יסודות הבית שלך</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white bg-opacity-95 backdrop-blur-md rounded-2xl p-8 border border-amber-100 shadow-lg transform transition-all duration-300 hover:scale-102">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl border border-amber-100 shadow-inner">
                      {value.icon}
                    </div>
                    <p className="text-xl text-amber-800">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-rose-200 to-amber-200 rounded-3xl opacity-20"></div>
          <div className="relative bg-white rounded-3xl p-16 border border-amber-100 shadow-xl">
            <p className="text-3xl font-serif text-amber-900 mb-8 leading-relaxed">
              בהסתכלות מעמיקה את מבינה עד כמה גדולה הזכות להיות אמא!
            </p>
            <p className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-rose-700">
              ואת זכית!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    content: "את האדריכל הראשי, מאשרת את הבניה וחותמת על אישורי הבניה, הפועל הפשוט, יוצקת היסודות ומנווטת את המנוף. כמובן שאת גם מעצבת פנים והמארחת בחנוכת הבית."
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
    content: "את משרטטת את חדרי ליבם בעדינות אין קץ (מותר ואסור), בוחרת בתבונה היכן ימוקם כל רגש, מקום משחקם בפנים (הבית) או בחוץ (חברים, גינה)."
  }
];

const values = [
  {
    icon: <SketchIcon><Heart className="w-10 h-10 text-rose-600 stroke-2" /></SketchIcon>,
    text: "השלמה - עוזרת להם להוסיף עוד חלק באישיותם"
  },
  {
    icon: <SketchIcon><Sun className="w-10 h-10 text-amber-600 stroke-2" /></SketchIcon>,
    text: "אהבה - המון חיזוקים, מילה טובה וחיבוק"
  },
  {
    icon: <SketchIcon><Book className="w-10 h-10 text-amber-700 stroke-2" /></SketchIcon>,
    text: "קבלה - את הטוב שבהם והקצת פחות ואת הקשיים המלווים בחינוכם"
  },
  {
    icon: <SketchIcon><Compass className="w-10 h-10 text-rose-600 stroke-2" /></SketchIcon>,
    text: "הכנעה - את הכעס והרוגז ובמקביל בחירה לשנות אווירה"
  }
];

export default MotherArchitect;