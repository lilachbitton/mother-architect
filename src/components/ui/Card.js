import React from 'react';

export const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      bg-white rounded-3xl p-8 border border-amber-100 shadow-xl 
      ${hover ? 'hover-scale' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export const GradientCard = ({ children, className = '', hover = false }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-rose-100 to-amber-100 rounded-3xl opacity-20"></div>
      <Card className={className} hover={hover}>
        {children}
      </Card>
    </div>
  );
};