import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgAdx = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#1B75BC" />
      <Path
        fill="#FFF"
        d="M11.587 8.602L16 13.208l4.305-4.606L23 11.36 18.604 16 23 20.603l-2.695 2.793L16 18.792l-4.413 4.604L9 20.68l4.36-4.706L9 11.36l2.587-2.757zm.355-.376L15.982 4l4.04 4.226-2.126 2.265-1.914-2.114-1.914 2.114-2.126-2.265zm0 15.548l2.126-2.265 1.914 2.114 1.914-2.114 2.126 2.265L15.982 28l-4.04-4.226z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgAdx);
export default Memo;
