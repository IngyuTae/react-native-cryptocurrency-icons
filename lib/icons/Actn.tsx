import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgActn = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="red" />
      <Path
        d="M4.406 21.711l5.337-9.717c.221-.406.588-.516.96-.296h.039a.703.703 0 00.993-.292l3.749-5.744c.127-.242.289-.465.48-.662.168.206.293.443.367.698l1.62 4.013c.367.922 1.25 1.584 2.172 1.584h.293c.473.018.921.215 1.253.552l1.176 1.25c.349.37.67.763.96 1.179l3.792 5.448c.142.216.277.437.403.662v.036a3.36 3.36 0 01-.552-.542l-5.117-5.309a5.112 5.112 0 01-.811-1.068c-.408-.883-.922-1.253-1.73-1.214h-1.03c-.624 0-.773-.11-.96-.737l-1.469-4.6c-.257-.922-.295-.922-.552 0l-.993 3.12c-.221.623-.296 1.655-.185 1.655.038 0 .295-.48.7-1.325.077-.172.175-.333.293-.48.094.352.144.714.15 1.078-.108.254-.231.5-.37.737l-.036.11c-.442.809-.442.847.036 1.62l.441.735c.168.226.304.474.406.736a5.44 5.44 0 01-.663.48l-2.282 1.472a3 3 0 01-1.325.367c-.811-.036-1.51.37-2.136 1.214l-.883 1.253c-.318.392-.676.75-1.068 1.068l-.809.662a7.68 7.68 0 01-1.325.737l-.441.11c-.32.116-.655.19-.994.219-.151 0-.295 0-.295-.036.115-.268.25-.526.406-.773z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgActn);
export default Memo;
