import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgEop = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#35A7DF" />
      <Path
        d="M14.714 28L9.366 13.737l-2.16 9.84zM16.12 4.171l-5.863 7.132 5.863 14.983 5.897-14.983zM17.56 28l5.349-14.263 2.125 9.84z"
        fill="#FEFFFE"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgEop);
export default Memo;
