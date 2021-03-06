import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgTzc = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#374851" r={16} />
      <Path
        d="M17.7 15.4v7.598c.204-.05.404-.107.6-.173v2.91a10.029 10.029 0 01-4 .121V15.4h-3.5v-2.8h10.4v2.8zm1.4 10.11V22.5a7.2 7.2 0 10-6.2 0v3.01C8.895 24.205 6 20.44 6 16c0-5.523 4.477-10 10-10s10 4.477 10 10c0 4.44-2.895 8.205-6.9 9.51z"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgTzc);
export default Memo;
