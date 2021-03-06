import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgZil = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#49c1bf" r={16} />
      <G fill="#fff">
        <Path
          d="M9 7.281l11.114 5.383 2.845-1.282L11.891 6z"
          fillOpacity={0.304}
        />
        <Path
          d="M20.114 12.651l2.845-1.281v2.865l-2.845 1.281zm0 13.284v-8.937l2.845-1.295v8.951z"
          fillOpacity={0.646}
        />
        <Path d="M9 7.284v2.897l7.693 3.737L9 17.728v2.856l11.114 5.373v-2.874l-7.548-3.671 7.548-3.881v-2.865z" />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgZil);
export default Memo;
