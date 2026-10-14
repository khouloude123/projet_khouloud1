//React Native Project Structure

/*import { StyleSheet, Text, View } from 'react-native';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});*/

//React Native Components and Styling

/*import { StyleSheet, Text, View } from 'react-native';
export default function StyleDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Styled Component</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#3498db',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // Cross-platform shadow (works on iOS, Android and web)
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});*/

//React Native Layout

/*import { StyleSheet, Text, View } from 'react-native';
export default function LayoutDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Content</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 80,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
  },
  footer: {
    height: 60,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
});*/



import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes App</Text>

      <Text style={styles.subtitle}>
        React Native + Expo Router
      </Text>

      <Link href="/notes" style={styles.link}>
        Open my notes →
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#60646c',
  },
  link: {
    marginTop: 16,
    padding: 12,
    fontSize: 18,
    color: '#208AEF',
  },
});
