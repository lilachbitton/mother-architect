import React from 'react';
import { GradientCard } from '../ui/Card';
import { Home, Compass } from 'lucide-react';
import { SketchIcon } from '../ui/Icons';

const Header = () => {
  return (
    <GradientCard className="mb-20 p-16 text-center">
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
      
      <h1 className="text-6xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-rose-700 to-amber-800 mb-8">
        את האדריכל לבית שלך!
      </h1>
      
      <p className="text-xl text-amber-800 leading-relaxed">
        כשאת מביטה בבניין מוגמר, נפעמת מיופיו, את ודאי מבינה, כי לא ביום אחד נסתיימה בנייתו. 
        הבית הפרטי שלך, וחינוך ילדייך הם מלאכה מורכבת הפולשת על תחומים רבים, ודורשת זמן רב.
      </p>
    </GradientCard>
  );
};

export default Header;