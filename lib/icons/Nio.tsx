import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgNio = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#70C9C9" />
      <Path
        fill="#FFF"
        d="M16 13.764h-4.822L16 5.5l4.822 8.264H16zm.655 9.736l2.515-4.309 2.411-4.131L26.5 23.5h-9.845zm-3.825-4.309l2.515 4.309H5.5l4.919-8.44 2.41 4.131z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgNio);
export default Memo;
