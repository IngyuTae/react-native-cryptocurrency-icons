import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgDlt = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#f4ae95" r={16} />
      <Path
        d="M15.807 8.958L9.713 21.965H19.83c.293 0 .558.18.673.455l.011.025a.641.641 0 01-.031.56.96.96 0 01-.835.495H8.896a.826.826 0 01-.466-.145l-.056-.038a.874.874 0 01-.29-1.09l7.19-15.149c.075-.158.182-.298.313-.41a.692.692 0 01.892-.01.497.497 0 01.135.172l7.293 15.252c.1.207.12.444.058.666a.57.57 0 01-.548.423h-.084a.877.877 0 01-.794-.516L16.249 8.96a.244.244 0 00-.22-.145.244.244 0 00-.222.143z"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgDlt);
export default Memo;
