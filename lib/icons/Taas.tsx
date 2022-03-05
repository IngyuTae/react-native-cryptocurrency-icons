import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgTaas = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#002342" />
      <Path
        fill="#FFF"
        d="M4 13h1.298v1.221H4V13zm1.298 4.774h3.777V19H4v-3.558h3.81v1.22H5.299v1.112zm17.627-2.332H28V19h-3.81v-1.226h2.512v-1.111h-3.777v-1.221zm3.798-1.162h-3.8v-1.221h3.8v1.22zm-16.411 1.162h5.075v2.384h-1.264V19h-3.811v-3.558zm3.777 2.332v-1.111H11.61v1.11h2.48zM10.312 13h5.075v1.221h-5.075V13zm6.334 2.442h5.075v2.384h-1.264V19h-3.81v-3.558zm3.772 2.332v-1.111h-2.48v1.11h2.48zM16.646 13h5.075v1.221h-5.075V13z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgTaas);
export default Memo;
