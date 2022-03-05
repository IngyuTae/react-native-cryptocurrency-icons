import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgMda = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#01a64f" r={16} />
      <Path
        d="M20.663 7.992c1.216 1.3 1.837 2.932 1.837 4.84 0 1.937-.621 3.57-1.838 4.87-.973 1.023-2.135 1.631-3.486 1.853v1.134h2.756v1.245h-2.784v.664h2.784v1.161h-2.756V26h-2.352v-2.24h-2.73v-1.162h2.757v-.664h-2.756v-1.245h2.73v-1.162c-1.325-.221-2.487-.83-3.46-1.853-1.243-1.3-1.865-2.933-1.865-4.869 0-1.964.595-3.596 1.838-4.869C12.58 6.636 14.122 6 16.014 6c1.865 0 3.405.636 4.649 1.992zm-2.541 7.386c.513-.664.784-1.522.784-2.573 0-1.023-.27-1.88-.838-2.545-.54-.691-1.243-1.023-2.054-1.023-.838 0-1.54.332-2.081.996-.542.664-.812 1.493-.812 2.545 0 1.078.271 1.936.812 2.6s1.243.996 2.08.996c.866 0 1.595-.332 2.109-.996z"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgMda);
export default Memo;
