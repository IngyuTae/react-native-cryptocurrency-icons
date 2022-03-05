import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgDnt = (props: SvgProps) => (
  <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#2c398f" r={16} />
      <Path
        d="M25.075 19.1a2.338 2.338 0 001.425-.577c-.551 2.816-2.091 5.587-4.734 7.11-2.022 1.178-4.55 1.57-7.008 1.27-.368-1.062-1.333-2.193-3.01-3.047-2.643-1.362-3.884-3.717-5.01-2.563-.104.1-.19.217-.253.346a4.353 4.353 0 01-.138-.323c-2.16-5.356 0-10.736 4.32-14.591 2.574-2.286 5.584-2.032 8.273-.785a1.362 1.362 0 00-.506 1.085v5.402a5.435 5.435 0 00-6.944 1.258 5.498 5.498 0 00.104 7.088 5.435 5.435 0 006.978 1.051 1.398 1.398 0 002.666-.6V7.302c2.068 1.454 3.722 3.301 4.48 4.571.37.638.634 1.332.782 2.055-.325-.24-.704-.4-1.103-.462-.85-.046-1.494 1.109-1.057 2.77.368 1.502-.092 2.818.735 2.864zm-10.363.092c-2.896-1.662-.46-5.933 2.436-4.271.873.485.965 2.032.804 3.024-.299 1.709-1.907 2.009-3.24 1.247zm1.356-11.036c-.644.023-1.103.808-1.08 1.155.022.346.505.554 1.171.323.598-.208 1.15-.07 1.126-.416-.023-.346-.597-1.085-1.217-1.062z"
        fill="#fff"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgDnt);
export default Memo;
