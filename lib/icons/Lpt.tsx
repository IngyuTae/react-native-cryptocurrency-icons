import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgLpt = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#000" fillRule="nonzero" />
      <Path
        d="M14.225 23.483h3.508v3.508h-3.508zm0-15.483h3.508v3.508h-3.508zm8.267 0H26v3.508h-3.508zM6 8h3.508v3.508H6zm12.358 7.742h3.508v3.508h-3.508zm-8.275 0h3.508v3.508h-3.508z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgLpt);
export default Memo;
