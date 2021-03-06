import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgCob = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#13bf99" r={16} />
      <Path
        d="M16 25h-4.536l2.272-3.957h4.528L20.536 25H16zm-2.263-14.044h-.001L11.464 7h9.072l-2.272 3.956h-4.528zm9.999 9.539h-.002.002l-2.273 3.958-2.264-3.957h.001l2.263-3.958H26l-2.264 3.957zM8.264 11.496l2.272-3.957 2.264 3.957-2.264 3.956H6zm4.535 9h.001l-2.264 3.957-2.272-3.957L6 16.537h4.536l2.264 3.957zm10.937-9L26 15.453h-4.536l-2.265-3.957 2.264-3.957 2.273 3.957z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgCob);
export default Memo;
