import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgOnt = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#32a4be" fillRule="nonzero" r={16} />
      <Path
        d="M25 24.217L9.977 9.521A8.871 8.871 0 0116.2 7c4.86 0 8.8 3.854 8.8 8.609zM7 7.783l15.023 14.696A8.871 8.871 0 0115.8 25C10.94 25 7 21.146 7 16.391z"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgOnt);
export default Memo;
