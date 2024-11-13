import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlusIcon: React.FC<{ color?: string }> = ({ color = "#d9534f" }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 5V19M5 12H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export default PlusIcon;