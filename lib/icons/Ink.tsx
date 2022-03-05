import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgInk = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#df1a14" r={16} />
      <Path
        d="M14.86 11.527c.307-.097.656.076.783.378.307.702.582 1.425.9 2.126.19.421.837.475 1.09.087.424-.702.763-1.447 1.176-2.16.339-.442.953-.226 1.419-.269.487-.032.847.583.571 1.004-1.334 2.493-2.678 4.976-4.012 7.47-.223.453-.953.453-1.154-.022-.297-.723-.53-1.479-.816-2.202-.17-.475-.9-.55-1.143-.097-.413.745-.773 1.522-1.186 2.256-.201.334-.625.28-.953.28-.318-.021-.699.076-.942-.194a.696.696 0 01-.096-.842c1.25-2.364 2.52-4.738 3.77-7.124.148-.27.275-.605.593-.69zm-4.363.184a9.55 9.55 0 011.112 0c.413.043.678.572.477.95-1.24 2.342-2.489 4.673-3.727 7.005-.149.26-.265.605-.583.69-.37.055-.751.023-1.122.023-.455.021-.836-.573-.561-.972 1.292-2.418 2.583-4.847 3.875-7.275.106-.205.286-.41.53-.421zm13.14.021c.402-.119.826-.032 1.239-.065.317.011.72-.054.953.227.286.292.2.842-.16 1.026-.73.464-1.45.96-2.19 1.414-.467.323-1.155-.227-.954-.767.18-.432.434-.83.636-1.252.116-.216.222-.496.476-.583zm-3.505 6.455c.212-.13.477-.086.678.022.561.28 1.122.583 1.694.853.244.108.498.313.508.604.043.389-.286.766-.667.734-.815 0-1.63.01-2.435 0-.402 0-.72-.475-.572-.863.106-.281.265-.53.392-.8.095-.204.19-.453.402-.55z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgInk);
export default Memo;
