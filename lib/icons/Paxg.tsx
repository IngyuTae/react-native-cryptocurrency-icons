import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgPaxg = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#E4CE4D" cx={16} cy={16} r={16} />
      <Path
        d="M18.603 6.912c1.738 1.227 3.548 1.364 5.863 1.79 2.106.391 2.553 2.542 1.591 5.28a9.384 9.384 0 00-.18-.292l.18.292-.017.045.017-.045c1.467 2.492 1.456 5.191-1.719 6.572-5.653 2.46-5.99 7.305-11.333 4.697A6.71 6.71 0 0111 23.74l-.208-.237-.193-.033c-3.586-.635-5.94-2.579-3.762-7.539 1.927-4.383.206-8.696 6.116-8.504h.002c1.628-1.527 3.505-2.024 5.647-.515zm-5.507 4.432c-2.478 1.779-3.294 5.092-1.644 7.665a5.493 5.493 0 007.62 1.655c2.558-1.66 2.908-4.88 1.644-7.667-1.295-2.857-4.85-3.642-7.62-1.653z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgPaxg);
export default Memo;
