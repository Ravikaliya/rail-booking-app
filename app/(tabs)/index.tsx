// Import necessary components from React Native
import { Image, StyleSheet, Platform } from 'react-native';

// Import custom components
import { HelloWave } from '@/components/HelloWave'; // Component for displaying a wave animation
import ParallaxScrollView from '@/components/ParallaxScrollView'; // Component for creating a parallax scrolling effect
import { ThemedText } from '@/components/ThemedText'; // Component for displaying themed text
import { ThemedView } from '@/components/ThemedView'; // Component for displaying themed views

// Define the HomeScreen component
export default function HomeScreen() {
  return (
    // Use ParallaxScrollView to create a parallax scrolling effect
    <ParallaxScrollView
      // Set the background color of the header based on the theme
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      // Set the image to be displayed in the header
      headerImage={
        <Image
          // Set the source of the image
          source={require('@/assets/images/partial-react-logo.png')}
          // Set the style of the image
          style={styles.reactLogo}
        />
      }>
      {/* Container for the welcome title and wave animation */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText> {/* Display the welcome title */}
        <HelloWave /> {/* Display the wave animation */}
      </ThemedView>
      {/* Container for Step 1 instructions */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText> {/* Display the Step 1 subtitle */}
        <ThemedText>
          {/* Display instructions for editing the file and opening developer tools */}
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })} {/* Display platform-specific shortcut */}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      {/* Container for Step 2 instructions */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText> {/* Display the Step 2 subtitle */}
        <ThemedText>
          {/* Display instructions for exploring the app */}
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      {/* Container for Step 3 instructions */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText> {/* Display the Step 3 subtitle */}
        <ThemedText>
          {/* Display instructions for resetting the project */}
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

// Define styles for the components
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Align items vertically to the center
    gap: 8, // Add a gap of 8 units between items
  },
  stepContainer: {
    gap: 8, // Add a gap of 8 units between items
    marginBottom: 8, // Add a margin of 8 units at the bottom
  },
  reactLogo: {
    height: 178, // Set the height of the image
    width: 290, // Set the width of the image
    bottom: 0, // Position the image at the bottom
    left: 0, // Position the image at the left
    position: 'absolute', // Position the image absolutely
  },
});
