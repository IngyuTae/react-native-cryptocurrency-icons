import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgBos = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#00A8D6" />
      <Path
        fill="#FFF"
        d="M14.432 18.95v-1.917h2.954c1.97 0 2.955-.492 2.955-1.476v-5.164c0-.983-.985-1.475-2.955-1.475H12.66v3.098H10V7h7.09C21.03 7 23 8.082 23 10.246v5.459c0 2.164-1.97 3.246-5.91 3.246h-2.658zm5.909 1.181H23v1.623C23 23.918 21.03 25 17.09 25H10V13.492h7.09c.417 0 .81.012 1.183.036v1.921a9.18 9.18 0 00-.887-.04H12.66v7.673h4.727c1.97 0 2.955-.492 2.955-1.475V20.13z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgBos);
export default Memo;
