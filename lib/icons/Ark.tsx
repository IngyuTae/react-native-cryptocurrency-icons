import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgArk = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#F70000" />
      <Path
        fill="#FFF"
        d="M15.947 13.347L5 24.89 15.996 7 27 25 15.947 13.347zm1.588 4.585h-3.422l1.76-1.936 1.662 1.953v-.017zm-6.6 3.177v-.024l1.941-1.987v-.009l5.92-.025 1.998 2.045h-9.858z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgArk);
export default Memo;
