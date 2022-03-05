import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgVrsc = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#3165D4" fillRule="nonzero" cx={16} cy={16} r={16} />
      <Path
        d="M8.846 7.428c.551-.473 1.324-.86 1.996-.587 1.21.49 4.456 7.044 4.456 7.044s4.543-6.46 6.174-7.048c.557-.201 1.32.152 1.902.588 2.042 1.528 2.253 3.66 2.077 4.252-.222.744-11.505 15.073-11.505 15.073-.338-.138-7.023-12.557-7.385-14.682-.346-2.031.832-3.411 2.285-4.64z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgVrsc);
export default Memo;
