import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgVib = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#ff1f43" r={16} />
      <Path d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z" fill="#fff" />
    </G>
  </Svg>
);

const Memo = memo(SvgVib);
export default Memo;
