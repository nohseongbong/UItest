import {GluestackUIProvider, Heading, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config'; // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Heading size="4xl">안녕</Heading>
      <Text>Hello World!</Text>
    </GluestackUIProvider>
  );
}
