import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgSc = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#20EE82" />
      <Path
        fill="#FFF"
        d="M16 7.5a8.5 8.5 0 018.5 8.5v8.5H16a8.5 8.5 0 110-17zm5.1 13.6v-5.023c0-2.82-2.255-5.163-5.074-5.177a5.106 5.106 0 00-5.126 5.126c.014 2.819 2.358 5.074 5.177 5.074H21.1z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgSc);
export default Memo;
