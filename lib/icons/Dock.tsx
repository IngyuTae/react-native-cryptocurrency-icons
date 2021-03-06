import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgDock = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#786DBC" />
      <Path
        d="M15.931 10.771l-1.629-1.633a1.144 1.144 0 011.582-1.654l.038.038 3.636 3.636c.447.447.447 1.17 0 1.617l-3.64 3.636a1.143 1.143 0 01-1.616-1.616l1.707-1.707a5.695 5.695 0 104.705 5.63V6.142a1.143 1.143 0 012.286 0v12.729a8 8 0 11-7.07-8.104l.001.004z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgDock);
export default Memo;
