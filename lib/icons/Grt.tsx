import * as React from 'react';
import Svg, { SvgProps, Defs, G, Circle, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

import { memo } from 'react';

const SvgGrt = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <Defs></Defs>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#5942CC" fillRule="nonzero" cx={16} cy={16} r={16} />
      <G filter="url(#a)">
        <Path
          d="M20.707 19.543a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0zM15 7.25a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm7-2a1 1 0 110 2 1 1 0 010-2z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgGrt);
export default Memo;
