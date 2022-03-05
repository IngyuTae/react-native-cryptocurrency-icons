import * as React from 'react';
import Svg, { SvgProps, G, Circle } from 'react-native-svg';
import { memo } from 'react';

const SvgGbyte = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
      <Circle cx={16} cy={16} r={11} fill="#FFF" />
    </G>
  </Svg>
);

const Memo = memo(SvgGbyte);
export default Memo;
