import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgAct = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#767DFF" fillRule="nonzero" />
      <Path
        fill="#FFF"
        d="M13.77 6.5h4.46a.87.87 0 01.759.444l6.906 12.319a.87.87 0 010 .85l-2.21 3.942a.87.87 0 01-.758.445H9.073a.87.87 0 01-.759-.445l-2.209-3.942a.87.87 0 010-.85l6.906-12.319a.87.87 0 01.759-.444zM16 11.401l-4.653 8.287h9.306L16 11.401z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgAct);
export default Memo;
