import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgOmg = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle fill="#101010" cx={16} cy={16} r={16} />
      <Path
        d="M16.057 17.776l-2.03-5.598H12.3v7.323h1.245v-5.159l1.884 5.159h1.224l1.882-5.159v5.159h1.276v-7.323h-1.725zM7.671 12C5.423 12 4 13.695 4 15.845c0 2.149 1.423 3.84 3.671 3.84 2.248 0 3.674-1.679 3.674-3.84C11.345 13.683 9.922 12 7.67 12zm0 6.383c-1.433 0-2.29-1.078-2.29-2.533 0-1.456.857-2.541 2.29-2.541s2.293 1.088 2.293 2.536c0 1.447-.858 2.538-2.293 2.538zm16.467-1.547h2.102c-.124 1.068-.9 1.57-1.894 1.57-1.423 0-2.216-1.047-2.216-2.554 0-1.413.699-2.573 2.186-2.573.972 0 1.758.496 1.842 1.329h1.39c-.188-1.674-1.465-2.606-3.19-2.606-2.449 0-3.59 1.884-3.59 3.892 0 2.157 1.32 3.788 3.37 3.788 1.202 0 1.874-.556 2.144-1.026v.837h1.266v-3.916h-3.41v1.26z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgOmg);
export default Memo;