import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgKnc = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#31CB9E" cx={16} cy={16} r={16} />
      <G fill="#FFF">
        <Path d="M14.927 16.162l7.72 4.423a.408.408 0 00.618-.353v-8.146a.405.405 0 00-.618-.35l-7.72 4.426zm7.557-6.383l-5.278-3.882a.42.42 0 00-.661.222l-1.927 8.647 7.82-4.323a.39.39 0 00.046-.664M17.2 26.424l5.284-3.882a.395.395 0 00-.044-.673l-7.822-4.323 1.927 8.647a.417.417 0 00.655.238" />
        <Path d="M12.92 16.002l2.007-9.389a.398.398 0 00-.618-.404l-5.142 3.943a1.065 1.065 0 00-.417.85v10.006c-.005.337.15.656.417.861l5.117 3.932a.398.398 0 00.618-.405l-1.983-9.394z" />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgKnc);
export default Memo;
