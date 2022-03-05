import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgGusd = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#00DCFA" />
      <Path
        d="M19.378 5c-3.87 0-7.157 2.976-7.57 6.807C7.975 12.221 5 15.508 5 19.377A7.627 7.627 0 0012.622 27c3.87 0 7.17-2.976 7.57-6.807 3.832-.414 6.808-3.701 6.808-7.57A7.627 7.627 0 0019.378 5zm5.836 8.476a5.93 5.93 0 01-4.97 4.97v-4.97h4.97zM6.786 18.524a5.93 5.93 0 014.97-4.983v4.97h-4.97v.013zm11.673 1.72a5.895 5.895 0 01-5.837 5.035 5.894 5.894 0 01-5.836-5.034h11.673zm.065-6.768v5.035h-5.048v-5.035h5.048zm6.69-1.72H13.541a5.895 5.895 0 015.837-5.035 5.894 5.894 0 015.836 5.034z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgGusd);
export default Memo;
