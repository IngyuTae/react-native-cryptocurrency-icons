import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgElla = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#396a28" r={16} />
      <Path
        d="M18.073 13.212L16 11.14l-2.087 2.086-2.164-2.164L16 5l4.28 6.005zm-4.883.738L11.14 16l2.072 2.073-2.156 2.156L5 16l5.99-4.25zm5.584 4.137L20.86 16l-2.064-2.064 2.226-2.226L27 16l-6.044 4.269zm-4.838.71L16 20.86l2.05-2.05 2.182 2.183L16 27l-4.204-6.064zM16 12.527L19.472 16 16 19.472 12.528 16z"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgElla);
export default Memo;
