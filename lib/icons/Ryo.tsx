import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgRyo = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#3D58B0" />
      <G fill="#FFF">
        <Path d="M15.986 4C9.376 4 4 9.376 4 15.986S9.376 27.97 15.986 27.97 27.97 22.595 27.97 15.986C27.971 9.376 22.595 4 15.986 4zm0 1.632a10.34 10.34 0 0110.353 10.354 10.34 10.34 0 01-10.353 10.353A10.34 10.34 0 015.632 15.986 10.341 10.341 0 0115.986 5.632z" />
        <Path d="M11.533 11.56v8.85h8.905v-8.85h-8.905zm1.45 1.45h6.004v5.95h-6.003v-5.95z" />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgRyo);
export default Memo;
