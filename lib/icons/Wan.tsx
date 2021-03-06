import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgWan = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#136AAD" />
      <Path
        fill="#FFF"
        d="M7 11.09l2.667 1.13v6.353L16 14.786l6.394 3.787V12.22L25 11.09v11.974l-9-5.315-9 5.315V11.09zm.303-.489L16 5.5l8.758 5.101-2.364.978L16 7.883l-6.333 3.696-2.364-.978zm1.879 11.821l1.97-1.13 4.878 2.825 4.818-2.825 2.03 1.13L16.03 26.5l-6.848-4.078z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgWan);
export default Memo;
