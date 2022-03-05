import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgRepv2 = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#0E0E21" fillRule="nonzero" cx={16} cy={16} r={16} />
      <Path
        d="M11.55 15.245l-1.24-.805a.25.25 0 01-.079-.337l4.784-8.111a.49.49 0 01.42-.242h1.129a.49.49 0 01.42.242l4.784 8.111a.25.25 0 01-.079.337l-1.24.805a.244.244 0 01-.341-.082l-4.003-6.786a.122.122 0 00-.21 0l-4.003 6.786a.243.243 0 01-.342.082zm11.477.995l1.904 3.228a.504.504 0 01-.155.674l-8.51 5.53a.484.484 0 01-.53 0l-8.51-5.53a.5.5 0 01-.156-.674l1.904-3.228a.243.243 0 01.342-.082l1.239.805a.25.25 0 01.079.337l-1.088 1.845a.127.127 0 00.04.168l6.348 4.125c.04.027.09.027.131 0l6.35-4.125a.125.125 0 00.04-.168L21.367 17.3a.25.25 0 01.079-.337l1.24-.805a.243.243 0 01.341.082z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgRepv2);
export default Memo;
