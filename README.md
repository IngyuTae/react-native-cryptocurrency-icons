# react-native-cryptocurrency-icons

Cryptocurrency icons for React Native

## Highlights

- [x] [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons/blob/master/README.md)
- [x] react-native-svg
- [x] Typescript
- [x] Generic icon for fallback

## Getting Started

### 1. Install react-native-svg

#### Expo managed workflow

```sh
expo install react-native-svg
```

#### Vanilla React Native

If you have a project that has been created with `react-native init` or using Expo bare workflow, refer to the [installation guide](https://github.com/react-native-svg/react-native-svg#installation) for `react-native-svg`.

### 2. Install package

```sh
yarn add react-native-cryptocurrency-icons
```

or

```sh
npm install react-native-cryptocurrency-icons
```

## Usage

```tsx
import { StyleSheet, Text, View } from 'react-native';
import CryptoIcon from 'react-native-cryptocurrency-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <CryptoIcon name="btc" size={32} style={styles.icon} />
      <Text>Bitcoin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 8,
  },
});
```

## References

- https://github.com/spothq/cryptocurrency-icons
- https://github.com/gregberge/svgr
- https://github.com/svg/svgo
- https://github.com/mikedemarais/react-coin-icon
