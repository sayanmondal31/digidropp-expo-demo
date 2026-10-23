import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [taps, setTaps] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.badge}>Auto-built by Digidropp</Text>
      <Text style={styles.title}>Expo demo</Text>
      <Text style={styles.subtitle}>Push to main and this app rebuilds itself.</Text>

      <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => setTaps((n) => n + 1)}>
        <Text style={styles.buttonText}>
          Tapped {taps} {taps === 1 ? 'time' : 'times'}
        </Text>
      </Pressable>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  badge: {
    color: '#a5b4fc',
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    overflow: 'hidden',
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '900',
    marginTop: 16,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 15,
    marginTop: 8,
    textAlign: 'center',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#6366f1',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 16,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
