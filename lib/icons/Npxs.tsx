import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgNpxs = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#F5D100" />
      <G fill="#FFF">
        <Path d="M15.972 4C9.372 4 4 9.372 4 15.972s5.372 11.982 11.982 11.982c6.609 0 11.981-5.372 11.981-11.982C27.963 9.363 22.582 4 15.973 4zm0 23.03c-6.092 0-11.058-4.956-11.058-11.058C4.924 9.88 9.88 4.923 15.972 4.923c6.093 0 11.059 4.957 11.059 11.059 0 6.092-4.957 11.049-11.059 11.049z" />
        <Path d="M9.774 10.656l.88-.881 4.688 4.687-.881.88zm6.818 6.821l.881-.881 4.687 4.687-.881.88zm-1.495-1.502l.88-.88.888.886-.88.882zm1.508-1.475l4.687-4.686.88.881-4.686 4.687zm-6.797 6.788l4.686-4.686.881.88-4.686 4.687z" />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgNpxs);
export default Memo;
