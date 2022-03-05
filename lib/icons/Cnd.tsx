import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgCnd = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#383939" r={16} />
      <Path
        d="M19.473 11.479l2.667-.611 1.033-1.701-1.02-1.673-1.306-.902L18.164 6l-1.655.933-2.648-.472-3.636 2.519-.283 2.942-1.543.644.178 2.729-1.077.858 1.076 3.072.162.322 1.138 3.163 2.339.828 1.734 1.764 1.994.698.902-.26 1.431-.165 2.098-.601 3.126-1.765-.818-3.232-1.574-.62-.784.897-2.205.542-3.207-.508-1.035-1.197.36-1.171-1.516-2.399 1.275-1.556.136-2.645 1.826-1.048 1.252-.5 1.7.307z"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgCnd);
export default Memo;
