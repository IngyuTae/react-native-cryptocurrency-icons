import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgReq = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#00E6A0" cx={16} cy={16} r={16} />
      <Path
        d="M23.073 7.5a.653.653 0 01.477.192l-.006-.006a.65.65 0 01.184.364l.009.104-.007 3.417c0 .449-.178.88-.496 1.197l-4.24 4.227 4.537 4.523a1.689 1.689 0 11-2.383 2.394l-5.735-5.717a1.686 1.686 0 010-2.395l5.022-5.012h-8.498v11.889a1.69 1.69 0 01-1.718 1.718l-.17-.006A1.696 1.696 0 018.5 22.677V9.347c0-1.066.763-1.847 1.796-1.847z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgReq);
export default Memo;
