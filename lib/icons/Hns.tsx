import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgHns = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#000" cx={16} cy={16} r={16} />
      <Path
        d="M23.265 12.35l-1.298-2.318 2.515.001a.23.23 0 01.182.106l.49.81L26 12.35h-2.735zm-4.652 14.04c-.06.11-.14.11-.166.11H17.42l-1.544-.001 3.995-7.212a.388.388 0 00-.334-.575l-6.81.009-1.354-2.358h9.925l.016-.002a.372.372 0 00.114-.024l.025-.01a.38.38 0 00.182-.166l1.635-3.039h2.7L18.613 26.39zm-3.402-.274l-.323-.534c-.413-.685-.942-1.563-1.002-1.66-.02-.032-.03-.111.013-.188l2.344-4.246 2.641-.003-3.673 6.631zm-4.503-4.513L9.395 19.26l1.323-2.493 1.327 2.309-1.337 2.528zm-1.762.365h-1.43a.233.233 0 01-.18-.106l-.427-.707L6 19.65h2.734l1.298 2.318H8.946zm4.44-16.357c.06-.111.14-.111.165-.111h2.582l-4.006 7.212-.008.02a.416.416 0 00-.027.074l-.008.035a.302.302 0 00-.004.043l-.002.02c0 .004 0 .009.002.013a.2.2 0 00.004.042.216.216 0 00.006.036l.01.036a.5.5 0 00.03.067.272.272 0 00.045.06.312.312 0 00.053.05c.01.009.022.017.033.024l.012.009c.004.003.009.003.014.006.02.01.04.019.062.025l.023.007a.356.356 0 00.087.011h.174l6.638-.009c.176.307.504.885.783 1.376l.532.935h-9.88l-.012.002a.382.382 0 00-.332.202L8.726 18.88H6.03c1.178-2.128 7.277-13.13 7.356-13.27zm3.407.282l.24.397c.421.699 1.016 1.685 1.08 1.788.02.032.028.111-.014.188l-2.343 4.244-2.64.003 3.677-6.62zm4.497 4.502l1.313 2.345-1.339 2.488-.544-.957c-.368-.647-.636-1.119-.787-1.382.287-.525 1.041-1.915 1.357-2.494z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgHns);
export default Memo;
