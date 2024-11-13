import React from 'react';
import Svg, { Path, Line } from 'react-native-svg';

const MenuIcon: React.FC<{ color?: string , strokeWidth?: number }> = ({ color = "#000", strokeWidth = 1 }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <Path
      d="M8,9h15c0.6,0,1,0.4,1,1v18c0,0.6-0.4,1-1,1H9c-0.6,0-1-0.4-1-1V9l11.6-5.3C20.2,3.3,21,3.8,21,4.6V9"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    <Path
      d="M17.1,29l-0.4-3.3c-0.1-1.3,0.3-2.6,1.2-3.5c0.7-0.7,1.1-2,1.1-3.7V13"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    <Path
      d="M13,13v5.5c0,1.7,0.4,2.9,1.1,3.7c0.9,1,1.3,2.2,1.2,3.5L14.9,29"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    <Line
      x1="16" y1="19" x2="16" y2="13"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
    />
  </Svg>
);

export default MenuIcon;
