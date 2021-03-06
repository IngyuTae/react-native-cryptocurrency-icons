import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgHt = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#2A3069" />
      <G fill="#FFF">
        <Path d="M18.347 10.533c0-3.52-1.707-6.506-2.987-7.466 0 0-.107-.107-.107.106-.106 6.72-3.52 8.534-5.333 11.094-4.373 5.653-.32 11.946 3.84 13.12 2.347.64-.533-1.174-.853-4.907-.534-4.693 5.44-8.107 5.44-11.947" />
        <Path d="M20.587 12.88c-.214.853-1.067 2.667-2.24 4.373-3.947 5.654-1.707 8.427-.427 9.92.747.854 0 0 1.813-.853.107-.107 3.627-1.92 3.947-6.08.427-4.053-2.133-6.613-3.093-7.36" />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgHt);
export default Memo;
