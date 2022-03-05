import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgWaves = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#0155ff" r={16} />
      <Path d="M16 6l10 10-10 10L6 16z" fill="#fff" />
    </G>
  </Svg>
);

const Memo = memo(SvgWaves);
export default Memo;
