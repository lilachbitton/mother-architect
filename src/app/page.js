import React from 'react';
import Header from '@/components/sections/Header';
import Roles from '@/components/sections/Roles';
import Values from '@/components/sections/Values';
import { GradientCard } from '@/components/ui/Card';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        {/* Empowerment Quote */}
        <div className="relative mb-20">
          <GradientCard className="p-12 text-center">
            <p className="text-3xl text-amber-900 font-serif leading-relaxed">
              אל תמעיטי בערכך!
              <br />
              <span className="font-bold">האמיני בכוחות הטמונים בך וביכולותייך!</span>
            </p>
          </GradientCard>
        </div>

        <Roles />
        <Values />

        {/* Final Blessing */}
        <div className="relative text-center">
          <GradientCard className="p-16">
            <p className="text-3xl font-serif text-amber-900 mb-8 leading-relaxed">
              בדרך הסלולה הזו את מגיעה לחיבור פנימי עמוק בינך לבין ילדייך.
              <br />
              בהסתכלות מעמיקה את מבינה עד כמה גדולה הזכות להיות אמא!
            </p>
            <p className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-rose-700">
              ואת זכית!
            </p>
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default Home;