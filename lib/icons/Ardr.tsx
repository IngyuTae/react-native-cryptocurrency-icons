import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgArdr = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#3C87C7" />
      <Path
        fill="#FFF"
        d="M15.883 17.19l1.769 2.312L12.5 23l3.383-5.81zM16 6l2.727 4.474L11.455 23H6L16 6zm0 9.842l3.636-2.684L26 23h-4.545L16 15.842z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgArdr);
export default Memo;
