import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgZec = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#ECB244" />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        d="M15.096 19.846h6.297v3.35h-3.875c.064.958.097 1.847.161 2.804h-3.261v-2.77h-3.876c0-1.093-.129-2.187.065-3.213.097-.547.678-1.026 1.033-1.504a462.137 462.137 0 013.714-4.581c.485-.582.969-1.129 1.518-1.778h-6.04v-3.35h3.586V6h3.132v2.735h3.908c0 1.128.129 2.222-.065 3.248-.097.547-.678 1.026-1.065 1.504a462.138 462.138 0 01-3.714 4.581 37.083 37.083 0 01-1.518 1.778z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgZec);
export default Memo;
