import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgEmc2 = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#0CF" />
      <G fill="#FFF">
        <Path
          fillOpacity={0.4}
          d="M7.894 19.161h4.397L10.398 23H6l1.894-3.839zm2.505-5.08h4.398L12.91 17.91h-4.4l1.89-3.83zm2.506-5.08h4.398l-1.889 3.83h-4.397L12.905 9z"
        />
        <Path
          fillOpacity={0.6}
          d="M12.277 19.16h4.398l-1.894 3.838h-4.398l1.894-3.839zm2.506-5.08h4.397l-1.888 3.828h-4.398l1.889-3.828zM17.288 9h4.398l-1.889 3.829H15.4L17.288 9z"
        />
        <Path d="M16.59 19.16h4.398l-1.893 3.838h-4.398l1.894-3.839zm2.506-5.08h4.398l-1.888 3.828h-4.398l1.888-3.828zM21.602 9H26l-1.889 3.829h-4.397L21.602 9z" />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgEmc2);
export default Memo;
