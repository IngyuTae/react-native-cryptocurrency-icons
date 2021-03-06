import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgQsp = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#454545" r={16} />
      <Path
        d="M11.5 16c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .653-.143 1.272-.394 1.833l-2.97-2.97-2.272 2.273 2.97 2.97A4.468 4.468 0 0116 20.5a4.505 4.505 0 01-4.5-4.5m11.813 0a7.273 7.273 0 00-1.18-3.978L25 9.154 22.846 7l-2.868 2.868c-1.146-.745-2.51-1.181-3.978-1.181s-2.832.436-3.978 1.18L9.154 7 7 9.154l2.868 2.868c-.745 1.146-1.181 2.51-1.181 3.978s.437 2.832 1.181 3.978L7 22.846 9.154 25l2.868-2.868c1.146.745 2.51 1.181 3.978 1.181s2.832-.436 3.978-1.181L22.846 25 25 22.846l-2.868-2.868A7.272 7.272 0 0023.313 16"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgQsp);
export default Memo;
