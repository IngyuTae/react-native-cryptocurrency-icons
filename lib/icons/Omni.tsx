import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgOmni = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#1c347a" r={16} />
      <Path
        d="M10.065 6.888a10.93 10.93 0 00-3.19 3.196V6.888zm15.004 3.11a10.93 10.93 0 00-3.134-3.11h3.134zm-3.088 15.084a10.933 10.933 0 003.088-3.08v3.08zM6.875 21.916a10.93 10.93 0 003.144 3.166H6.875zM26 16c0 5.514-4.486 10-10 10S6 21.514 6 16 10.486 6 16 6s10 4.486 10 10zm-10 7.292c4.02 0 7.292-3.271 7.292-7.292 0-4.02-3.271-7.292-7.292-7.292-4.02 0-7.292 3.271-7.292 7.292 0 4.02 3.271 7.292 7.292 7.292z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgOmni);
export default Memo;
