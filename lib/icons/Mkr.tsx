import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgMkr = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#1AAB9B" cx={16} cy={16} r={16} />
      <Path
        d="M7.558 21.156v-8.045l6.101 4.592v3.453h1.558V17.38a.909.909 0 00-.363-.726l-7.399-5.569A.909.909 0 006 11.81v9.346h1.558zm16.874 0v-8.045l-6.101 4.592v3.453h-1.558V17.38c0-.286.134-.555.362-.726l7.4-5.569a.909.909 0 011.455.726v9.346h-1.558z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgMkr);
export default Memo;
