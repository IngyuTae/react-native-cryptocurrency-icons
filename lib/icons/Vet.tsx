import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgVet = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#15BDFF" />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        d="M14.738 24.734L7.04 9.046a.38.38 0 01.34-.546h2.668c.143 0 .277.08.34.206l5.622 11.381c.5 1.02 1.951 1.02 2.452 0l5.604-11.372a.382.382 0 01.34-.206h.332c.197 0 .322.206.233.376l-7.78 15.85c-.501 1.02-1.951 1.02-2.453 0z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgVet);
export default Memo;
