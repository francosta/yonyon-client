import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Typography = {
  $rem: width > 340 ? 18 : 16,

  // size
  $h1Size: '1.777rem',
  $h2Size: '1.222rem',
  $bodySize: '1rem',
  $smBodySize: '0.777rem',
  $labelSize: '0.666rem',

  // weight
  $mWeight: 500,
  $rWeight: 400,
};

export default Typography;
