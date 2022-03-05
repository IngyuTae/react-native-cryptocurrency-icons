import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgChsb = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#01C38D" cx={16} cy={16} r={16} />
      <Path
        d="M18.503 5.5l-1.722.978v8.304l.94.534V8.992l3.23 1.833.003-.001.627.355.524-.295v-.5L17.722 7.9v-.864l.781-.444 4.54 2.577v2.294l-2.18 1.23-.073-.037a.921.921 0 00-.408-.099.948.948 0 00-.94.953c0 .525.421.953.94.953a.94.94 0 00.93-.856l.008-.082 2.2-1.241 2.04 1.158v5.123l-2.043 1.158-8.298-4.712V6.478L13.496 5.5 8.017 8.61v2.84L5.5 12.877v6.24l2.517 1.429v2.843l5.48 3.111 1.722-.978V17.2l-.94-.534v6.342l-3.86-2.187-.524.295v.5l4.383 2.484v.864l-.782.444-4.539-2.577v-2.294l2.18-1.229.073.036c.133.065.27.098.408.098.519 0 .94-.427.94-.952a.948.948 0 00-.94-.953.94.94 0 00-.93.856l-.008.082-2.2 1.241-2.04-1.158v-5.123l2.043-1.158 8.298 4.712v8.533l1.722.978 5.48-3.11v-2.84l2.517-1.427v-6.24l-2.517-1.428V8.611L18.503 5.5zM8.957 9.17l4.54-2.578.781.444V7.9l-5.32 3.016V9.17zm.488 2.562l4.833-2.74v5.484l-4.833-2.744zm8.277 5.791l4.833 2.745-4.833 2.74v-5.485zm0 7.441V24.1l5.32-3.016v1.747l-4.539 2.577-.781-.444z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgChsb);
export default Memo;
