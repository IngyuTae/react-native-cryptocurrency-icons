import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgRads = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#9d4bef" r={16} />
      <Path
        d="M11.47 7.661a3.808 3.808 0 110 7.616 3.808 3.808 0 010-7.616zm3.807 12.87a3.808 3.808 0 11-3.808-3.808 5.253 5.253 0 005.253-5.253 3.808 3.808 0 113.808 3.808 5.253 5.253 0 00-5.252 5.253zm5.253 3.808a3.808 3.808 0 110-7.616 3.808 3.808 0 010 7.616zm0-2.66a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm-9.06 0a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm9.06-9.062a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm-9.06 0a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgRads);
export default Memo;
