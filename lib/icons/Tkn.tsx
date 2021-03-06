import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgTkn = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#24DD7B" />
      <Path
        fill="#FFF"
        d="M13.092 7.913L17.495 6l-.036 5.053H23v3.5h-5.578v6.063c0 1.84 3.12 2.057 4.294 1.444l1.064 3.176c-2.606 1.515-9.725 1.154-9.725-4.584V7.912h.037zm-4.11 7.578C7.887 15.491 7 14.425 7 13.11c0-1.316.887-2.382 1.982-2.382 1.094 0 1.981 1.066 1.981 2.382 0 1.315-.887 2.381-1.981 2.381z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgTkn);
export default Memo;
