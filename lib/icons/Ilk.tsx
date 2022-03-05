import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgIlk = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#98C23A" />
      <Path
        d="M15.79 4C9.279 4 4 9.279 4 15.79c0 6.511 5.279 11.79 11.79 11.79 6.511 0 11.79-5.279 11.79-11.79C27.569 9.283 22.297 4.011 15.79 4zm0 22c-5.632 0-10.198-4.565-10.2-10.197-.002-5.632 4.561-10.2 10.193-10.203 5.632-.004 10.201 4.558 10.207 10.19-.006 5.631-4.569 10.194-10.2 10.2V26zm-5.21-11.26h-1.9v-4.16c0-.78.37-1.17 1.11-1.17h4.12a1 1 0 011.15 1.17v4.16h-1.88v-3.7h-2.6v3.7zm2.6 1.22h1.9v5a1 1 0 01-1.15 1.16H9.79a1 1 0 01-1.1-1.18v-5h4.5l-.01.02zm7.8.07h1.92v5a1 1 0 01-1.16 1.16h-4.17a1 1 0 01-1.14-1.16V10.67A1 1 0 0117.6 9.5h4.1a1 1 0 011.2 1.17v3h-2v-2.54h-2.5v4.9h2.58z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgIlk);
export default Memo;
