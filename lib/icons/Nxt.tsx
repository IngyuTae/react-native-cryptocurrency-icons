import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgNxt = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#008FBB" />
      <Path
        fill="#FFF"
        d="M26.082 16.833c-.507 0-.918-.373-.918-.833v-.834h-4.612c-.507 0-.918-.373-.918-.833 0-.46.411-.833.918-.833h5.53c.507 0 .918.373.918.833V16c0 .46-.41.833-.918.833zm-4.549 0h1.835c.507 0 .918.373.918.833 0 .46-.41.834-.918.834h-2.816a.987.987 0 01-.423-.094l-5.352-3.24h-1.542c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835c.198 0 .381.057.531.154l5.232 3.18h.7zm-6.463 0c.507 0 .918.373.918.833 0 .46-.411.834-.918.834h-1.835a.988.988 0 01-.423-.094l-5.352-3.24H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.833.918-.833h1.835a.98.98 0 01.531.154l5.232 3.18h1.554zm-9.152 0h1.835c.507 0 .918.373.918.834 0 .46-.411.833-.918.833H5.918c-.507 0-.918-.373-.918-.833 0-.46.41-.834.918-.834z"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgNxt);
export default Memo;
