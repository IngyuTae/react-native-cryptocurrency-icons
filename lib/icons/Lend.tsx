import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgLend = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#0fa9c9" r={16} />
      <Path
        d="M17.147 20.446L11.697 26l-1.554-1.705 3.777-3.85L10 16.452l1.673-1.706zm3.18-3.191L22 15.549l-3.92-3.995 3.777-3.849L20.303 6l-5.474 5.554zm-7.96-3.167l5.498 5.7 1.673-1.705-5.498-5.603z"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgLend);
export default Memo;
