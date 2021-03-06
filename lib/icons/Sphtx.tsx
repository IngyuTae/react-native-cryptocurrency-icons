import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgSphtx = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#00b098" r={16} />
      <Path
        d="M6 12.391v-.356h8.417v.356zm0-1.035V11h8.417v.356zm3.55 10.64v-8.893h.338v8.893zm.98 0v-8.893h.337v8.893zm15.232-.728l-3.798-4.013.238-.251L26 21.016zM16.519 11l3.798 4.013-.238.251-3.798-4.012zm8.55 11l-3.798-4.013.238-.252 3.798 4.013zm-9.242-10.268l3.798 4.012-.239.252-3.798-4.012zm5.421 4.768l.239-.252 4.275-4.516.238.252-4.275 4.516-.238.252-.454.48-.239.252L16.52 22l-.238-.252 4.275-4.516.238-.252zm-.454-.984L25.07 11l.238.252-4.275 4.516-.238.252-.454.48-.239.252-4.274 4.516-.239-.252 4.275-4.516.238-.252.455-.48z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgSphtx);
export default Memo;
