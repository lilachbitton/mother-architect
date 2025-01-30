import React from 'react';
import { 
  Crown, Heart, Sparkles, Sun, Shield, 
  Compass, Book, Home, Star, Coffee,
  Flower, Key, Lock, Feather,
  Ruler, CircleDot, Triangle
} from 'lucide-react';

// Sketch Icon Component
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
        {/* Header with Architectural Elements */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-rose-100 to-amber-100 rounded-3xl opacity-20"></div>
          <div className="relative bg-white rounded-3xl p-16 text-center border border-amber-100 shadow-xl overflow-hidden">
            {/* Architectural Corner Details */}
            <div className="absolute top-4 right-4 w-32 h-32 border-t-2 border-r-2 border-amber-200 opacity-20"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 border-b-2 border-l-2 border-amber-200 opacity-20"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4 opacity-10">
              <SketchIcon size="large">
                <Home className="w-32 h-32 text-amber-300" />
              </SketchIcon>
            </div>
            <div className="absolute bottom-0 left-0 transform translate-y-1/4 -translate-x-1/4 opacity-10">
              <SketchIcon size="large">
                <Compass className="w-32 h-32 text-rose-300" />
              </SketchIcon>
            </div>
            
            {/* Crown with Architectural Elements */}
            <div className="relative inline-block mb-6">
              <div className="relative">
                <SketchIcon>
                  <Crown className="w-20 h-20 text-amber-400 stroke-2" />
                </SketchIcon>
                <div className="absolute -top-2 -right-2">
                  <SketchIcon>
                    <Ruler className="w-6 h-6 text-amber-300 transform rotate-45" />
                  </SketchIcon>
                </div>
                <div className="absolute -top-2 -left-2">
                  <SketchIcon>
                    <Compass className="w-6 h-6 text-amber-300 transform -rotate-45" />
                  </SketchIcon>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-rose-700 to-amber-800 mb-8 tracking-wide">
              את האדריכל לבית שלך!
            </h1>
            <p className="text-2xl text-amber-800 font-serif italic tracking-wider">
              בונה באהבה • מעצבת בחכמה • מובילה בעוצמה
            </p>
          </div>
        </div>

        {/* Empowerment Quote */}
        <div className="relative mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-amber-100">
            {/* Architectural Details */}
            <div className="absolute -top-6 right-8 transform -rotate-45">
              <SketchIcon>
                <Triangle className="w-12 h-12 text-amber-300" />
              </SketchIcon>
            </div>
            <div className="absolute -top-6 left-8 transform rotate-45">
              <SketchIcon>
                <Ruler className="w-12 h-12 text-rose-300" />
              </SketchIcon>
            </div>
            
            <div className="text-center relative">
              <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <SketchIcon>
                    <Heart className="w-16 h-16 text-rose-400" />
                  </SketchIcon>
                  <div className="absolute top-0 right-0">
                    <SketchIcon>
                      <Compass className="w-6 h-6 text-amber-400" />
                    </SketchIcon>
                  </div>
                </div>
              </div>
              <p className="text-3xl text-amber-900 font-serif mt-8 leading-relaxed">
                אל תמעיטי בערכך!
                <br />
                <span className="font-bold">האמיני בכוחות הטמונים בך וביכולותייך!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Role Cards */}
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
                  <p className="text-lg text-amber-800 leading-relaxed font-medium">{role.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl"></div>
          <div className="relative p-12 rounded-3xl border border-amber-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-amber-900">יסודות הבית שלך</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((item, index) => (
                <div key={index} 
                     className="bg-white bg-opacity-95 backdrop-blur-md rounded-2xl p-8 border border-amber-100 shadow-lg 
                              transform transition-all duration-300 hover:scale-102">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl border border-amber-100 shadow-inner">
                      {item.icon}
                    </div>
                    <p className="text-xl text-amber-800 font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Blessing */}
        <div className="relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-rose-200 to-amber-200 rounded-3xl opacity-20"></div>
          <div className="relative bg-white rounded-3xl p-16 border border-amber-100 shadow-xl overflow-hidden">
            {/* Architectural Details */}
            <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 opacity-10">
              <SketchIcon>
                <Triangle className="w-32 h-32 text-amber-300" />
              </SketchIcon>
            </div>
            <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/2 opacity-10">
              <SketchIcon>
                <Ruler className="w-32 h-32 text-rose-300" />
              </SketchIcon>
            </div>
            
            <div className="relative">
              <SketchIcon>
                <Star className="w-16 h-16 text-amber-400 mx-auto mb-8" />
              </SketchIcon>
            </div>
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
        <div className="absolute -bottom-2 -right-2">
          <SketchIcon>
            <Compass className="w-8 h-8 text-rose-400" />
          </SketchIcon>
        </div>
      </div>
    ),
    title: "אדריכלית הנשמה",
    content: "את משרטטת את חדרי ליבם בעדינות אין קץ, בוחרת בתבונה היכן ימוקם כל רגש, כל ערך, כל חלום שיצמח"
  },
  {
    icon: (
      <div className="relative">
        <SketchIcon>
          <Shield className="w-12 h-12 text-amber-700 stroke-[1.5]" />
        </SketchIcon>
        <div className="absolute -bottom-2 -right-2">
          <SketchIcon>
            <Ruler className="w-8 h-8 text-amber-500" />
          </SketchIcon>
        </div>
      </div>
    ),
    title: "מעצבת העתיד",
    content: "בידייך הכוח להעניק להם כלים לחיים מלאי משמעות, לבנות את עולמם הפנימי באהבה אינסופית"
  }
];

const values = [
  {
    icon: <SketchIcon>
      <Heart className="w-10 h-10 text-rose-600 stroke-2" />
    </SketchIcon>,
    text: "יוצקת יסודות של אהבה ואמונה בכל צעד"
  },
  {
    icon: <SketchIcon>
      <Sun className="w-10 h-10 text-amber-600 stroke-2" />
    </SketchIcon>,
    text: "מאירה את דרכם באור של חכמה ותבונה"
  },
  {
    icon: <SketchIcon>
      <Book className="w-10 h-10 text-amber-700 stroke-2" />
    </SketchIcon>,
    text: "מעניקה כלים לחיים של תורה ויראת שמים"
  },
  {
    icon: <SketchIcon>
      <Compass className="w-10 h-10 text-rose-600 stroke-2" />
    </SketchIcon>,
    text: "מנווטת במפת החיים עם אהבה אינסופית"
  }
];

export default MotherArchitect;