import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgGup = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#37DCD8" />
      <Path
        fill="#FFF"
        d="M15.99 12.679l-2.784-2.804A32.574 32.574 0 0116 6a32.464 32.464 0 012.79 3.859l-2.8 2.82zm5.718 2.81c.786 2.202 1.939 4.404.84 6.518a7.503 7.503 0 01-3.112 3.135c-3.619 1.92-8.099.51-10.005-3.135-1.11-2.114.183-4.49.97-6.691.721-1.623 1.45-3.119 2.278-4.557l3.31 3.334 3.329-3.352c.875 1.514 1.631 3.072 2.39 4.749z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgGup);
export default Memo;
