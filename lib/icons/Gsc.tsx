import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgGsc = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#FF0060" />
      <Path
        d="M25.07 12.047h-9.148a3.876 3.876 0 103.628 5.224h-3.628a1.022 1.022 0 01-1.023-1.023v-.124a1.022 1.022 0 011.023-1.023h6.047c.044.282.065.567.062.852a6.109 6.109 0 11-6.109-6.139l.187-.031c.039.018.08.028.124.031h5.426c2.961 0 4.17-1.581 4.17-3.814h-9.907C10.45 6 6.01 10.433 6 15.907c-.008 5.474 4.418 9.92 9.892 9.938 5.474.017 9.927-4.402 9.953-9.876v-3.132a.775.775 0 00-.775-.79z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgGsc);
export default Memo;
