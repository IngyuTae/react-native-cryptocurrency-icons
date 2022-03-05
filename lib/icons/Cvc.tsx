import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgCvc = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#3AB03E" />
      <Path
        fill="#FFF"
        d="M17.161 16.779a2.342 2.342 0 001.33-2.107c0-1.294-1.062-2.343-2.37-2.343-1.31 0-2.373 1.049-2.373 2.343a2.34 2.34 0 001.332 2.106v2.894h2.081v-2.893m-1.04 6.721c-4.186 0-7.59-3.364-7.59-7.5s3.404-7.5 7.59-7.5c3.415 0 6.31 2.24 7.26 5.312h2.616C24.987 9.342 20.949 6 16.12 6 10.531 6 6 10.477 6 16s4.531 10 10.12 10c4.829 0 8.867-3.342 9.877-7.812H23.38c-.95 3.072-3.845 5.312-7.26 5.312"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgCvc);
export default Memo;
