import React from 'react';
import { SvgProps } from 'react-native-svg';
import * as CryptoIcons from './icons';

export type CryptoIconName = keyof typeof CryptoIcons;

export interface CryptoIconProps extends SvgProps {
  name?: CryptoIconName;
  size?: number;
}

function CryptoIcon({ name = 'GENERIC', size, ...props }: CryptoIconProps) {
  const CryptoIconElement = CryptoIcons[name] || CryptoIcons.GENERIC;
  return <CryptoIconElement width={size} height={size} {...props} />;
}

export default React.memo(CryptoIcon);
