import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgBcc = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#F7931C" />
      <Path
        fill="#FEFDFC"
        d="M7.351 19.32c-.008-3.012 2.113-5.54 5.147-6.109.26-.048.334-.135.327-.389a41.633 41.633 0 010-2.029c.005-.243-.072-.388-.281-.524-.729-.475-1.027-1.339-.76-2.116a1.875 1.875 0 011.888-1.29c.77.036 1.475.609 1.683 1.37.21.764-.082 1.595-.76 2.026-.24.152-.315.305-.307.577.02.676.013 1.352.004 2.029-.003.196.026.301.259.331.443.059.876.178 1.286.354.154.066.237.026.34-.088 1.435-1.581 2.875-3.159 4.318-4.733.149-.162.106-.273.038-.44-.352-.868-.146-1.805.518-2.425.606-.565 1.608-.726 2.332-.375.852.413 1.32 1.205 1.262 2.135-.078 1.244-1.288 2.181-2.516 1.926-.249-.052-.393.008-.554.186a787.317 787.317 0 01-4.024 4.414c-.163.177-.186.272.017.448 2.204 1.922 2.804 4.818 1.548 7.456-.095.2-.074.314.08.46.367.349.722.71 1.074 1.075.14.145.271.183.479.13.81-.204 1.65.16 2.054.863a1.867 1.867 0 01-.261 2.213c-.554.589-1.459.76-2.162.408-.768-.384-1.192-1.205-1.01-2.048.053-.242-.003-.38-.165-.533a19.247 19.247 0 01-.867-.874c-.163-.176-.264-.179-.45-.004-1.899 1.77-4.101 2.228-6.531 1.364-2.416-.857-3.999-3.206-4.006-5.787"
      />
    </G>
  </Svg>
);

const Memo = memo(SvgBcc);
export default Memo;
