import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgChain = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#00ACED" fillRule="nonzero" />
      <G fill="#FFF">
        <Path d="M6 9.714v4.076l9.895 5.715 6.42-3.715v3.315l3.456 2.038V9.714l-9.885 5.715z" />
        <Path
          opacity={0.7}
          d="M15.886 4L6 9.714v11.429l9.886 5.714 9.857-5.714-3.495-2.038-6.362 3.676-6.39-3.676v-7.353l6.39-3.676 6.362 3.676 3.495-2.038z"
        />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgChain);
export default Memo;
