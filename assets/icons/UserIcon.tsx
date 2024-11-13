import React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserIcon: React.FC<{ color?: string }> = ({ color = "#d9534f" }) => (
  <Svg fill={color} width="24" height="24" viewBox="0 0 24 24">
    <Path d="M12,12c2.209,0,4-1.791,4-4s-1.791-4-4-4-4,1.791-4,4,1.791,4,4,4Zm0,2c-3.313,0-6,2.687-6,6v1h12v-1c0-3.313-2.687-6-6-6Z" />
  </Svg>
);

export default UserIcon;