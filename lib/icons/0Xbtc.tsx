import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const Svg0Xbtc = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#FF914D" fillRule="nonzero" />
      <G fill="#FFF">
        <Path d="M16 27.258c-6.218 0-11.258-5.04-11.258-11.258C4.742 9.782 9.782 4.742 16 4.742c6.218 0 11.258 5.04 11.258 11.258 0 6.218-5.04 11.258-11.258 11.258zm0-.662c5.852 0 10.596-4.744 10.596-10.596S21.852 5.404 16 5.404 5.404 10.148 5.404 16 10.148 26.596 16 26.596z" />
        <Path
          d="M14.09 24.132c.248-.102 1.218-.85 2.155-1.655a51.685 51.685 0 003.348-3.113c1.026-1.026 1.407-1.467 1.47-1.695.222-.801-2.205-9.606-2.699-9.795-.301-.116-2.993 2.123-5.377 4.467-1.398 1.374-1.785 1.831-1.815 2.13-.02.231.06.81.209 1.496.593 2.722 1.672 6.483 2.218 7.718.229.524.255.547.49.447z"
          fillRule="nonzero"
        />
      </G>
    </G>
  </Svg>
);

const Memo = memo(Svg0Xbtc);
export default Memo;
