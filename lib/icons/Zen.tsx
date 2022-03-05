import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgZen = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#00EAAB" cx={16} cy={16} r={16} />
      <G fill="#FFF">
        <Path d="M24.8 9.568l-1.78 2.77a7.835 7.835 0 01.856 3.595c0 4.4-3.56 7.943-7.943 7.943a7.755 7.755 0 01-3.577-.856l-2.788 1.797c1.797 1.276 3.98 2.049 6.348 2.049 6.029 0 10.933-4.887 10.933-10.933 0-2.385-.756-4.568-2.049-6.365z" />
        <Path d="M15.933 21.39a5.482 5.482 0 005.39-4.483 12.473 12.473 0 00-9.942 2.066 5.458 5.458 0 004.552 2.418z" />
        <Path d="M18.62 15.63c.957 0 1.88.101 2.788.303a5.494 5.494 0 00-5.492-5.492 5.48 5.48 0 00-5.424 6.23c-1.377 1.059-2.032 1.882-2.066 1.915a8.049 8.049 0 01-.453-2.636c0-4.4 3.56-7.944 7.943-7.944 1.293 0 2.502.302 3.577.857l2.771-1.797A10.658 10.658 0 0015.933 5 10.923 10.923 0 005 15.933c0 2.435.79 4.669 2.133 6.482.52-.94 1.142-1.797 1.864-2.57 0 0 1.075-1.124 1.898-1.695a13.041 13.041 0 017.725-2.52z" />
      </G>
    </G>
  </Svg>
);

const Memo = memo(SvgZen);
export default Memo;
