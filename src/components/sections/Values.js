import React from 'react';
import { Card } from '../ui/Card';
import { SketchIcon } from '../ui/Icons';
import { Heart, Sun, Book, Compass } from 'lucide-react';

const values = [
  {
    icon: <SketchIcon><Heart className="w-10 h-10 text-rose-600 stroke-2" /></SketchIcon>,
    text: "השלמה - עוזרת להם להוסיף עוד חלק באישיותם, מקבלת את הטוב שבהם והקצת פחות"
  },
  {
    icon: <SketchIcon><Sun className="w-10 h-10 text-amber-600 stroke-2" /></SketchIcon>,
    text: "אהבה - המון חיזוקים, מילה טובה, חיבוק ותמיכה בכל צעד בדרך"
  },
  {
    icon: <SketchIcon><Book className="w-10 h-10 text-amber-700 stroke-2" /></SketchIcon>,
    text: "יראת שמים - מעניקה כלים לחיים של תורה, ערכים ומידות טובות"
  },
  {
    icon: <SketchIcon><Compass className="w-10 h-10 text-rose-600 stroke-2" /></SketchIcon>,
    text: "הכנעה - את הכעס והרוגז ובמקביל בחירה לשנות אווירה ולהתקדם"
  }
];

const Values = () => {
  return (
    <div className="relative mb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl"></div>
      <div className="relative p-12 rounded-3xl border border-amber-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-amber-900">יסודות הבית שלך</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-white bg-opacity-95 backdrop-blur-md p-8 hover-scale"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl border border-amber-100 shadow-inner">
                  {value.icon}
                </div>
                <p className="text-xl text-amber-800">{value.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;