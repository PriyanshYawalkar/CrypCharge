// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['home']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function MaterialTabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof MaterialCommunityIcons>['face-man-profile']>) {
  return <MaterialCommunityIcons name="face-man-profile" size={28} style={[{ marginBottom: -3 }]} color="white" />
}

export function DateTabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof MaterialCommunityIcons>['']>) {
  return <MaterialCommunityIcons Fontisto name="date" size={24} color="black" />
}


export default TabBarIcon;


