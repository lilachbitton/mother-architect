import React from 'react';

export const SketchIcon = ({ children, size = "normal", className = "" }) => {
  const sizeClasses = size === "large" ? "opacity-80" : "opacity-90";
  return (
    <div className={`relative ${sizeClasses} ${className}`}>
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