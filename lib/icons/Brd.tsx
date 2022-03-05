import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgBrd = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#fe5d86" r={16} />
      <Path
        d="M8 9.039C8 8.465 8.472 8 9.054 8h7.588c4.476 0 6.055.528 7.143 1.601a3.43 3.43 0 01.98 2.606c0 1.851-.997 3.106-3.687 3.657 2.598.454 3.917 1.51 3.917 3.634a3.604 3.604 0 01-1.02 2.696C22.91 23.244 21.17 24 16.487 24H9.054A1.047 1.047 0 018 22.961zm5.761 5.962c0-.383.315-.693.703-.693h2.443c1.394 0 2.437-.068 2.92-.568a1.18 1.18 0 00.323-.891c.03-.32-.078-.638-.3-.875-.49-.482-1.532-.567-2.943-.567H12.36v9.232h4.5c1.532 0 2.667-.114 3.197-.642.244-.25.37-.59.346-.937.022-.353-.103-.7-.346-.96-.536-.527-1.67-.567-3.197-.567h-2.38a.708.708 0 01-.516-.205.687.687 0 01-.204-.51z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgBrd);
export default Memo;