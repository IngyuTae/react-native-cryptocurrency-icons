import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgMaid = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#5592D7" />
      <G fill="#FFF" fillRule="nonzero">
        <Path d="M20.246 12.667V25.64L9.29 19.333c-3.24-1.897-3.034-3.077-3.034-5.64l11.263 6.512v-5.949l2.726-1.59z" />
        <Path
          d="M17.52 20.205L6.257 13.692l10.954-6.307c3.24-1.847 4.166-1.077 6.429.205l-11.263 6.513 5.143 2.974v3.128z"
          opacity={0.6}
        />
        <Path
          d="M12.377 14.103L23.64 7.59v12.615c0 3.744-1.131 4.154-3.394 5.436V12.667L15.05 15.64l-2.674-1.538z"
          opacity={0.2}
        />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgMaid);
export default Memo;
