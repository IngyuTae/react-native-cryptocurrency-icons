import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgAlgo = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#000" cx={16} cy={16} r={16} />
      <Path
        d="M10.25 22.916l2.303-3.986 2.301-3.972 2.288-3.986.38-.632.167.632.702 2.624-.786 1.362-2.301 3.972-2.288 3.986h2.75l2.302-3.986 1.193-2.063.562 2.063 1.066 3.986h2.47l-1.066-3.986-1.067-3.972-.28-1.025 1.712-2.961H20.16l-.085-.295-.87-3.256L19.093 7h-2.4l-.056.084-2.246 3.888-2.302 3.986-2.287 3.972L7.5 22.916z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgAlgo);
export default Memo;
