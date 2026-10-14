//Flutter Project Structure
/*import 'package:flutter/material.dart';
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text(
            'Hello, Flutter!',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}*/

//Flutter Widgets and Styling
/*import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

// Application principale
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: StyleDemo(),
    );
  }
}

// Widget pour démontrer le style
class StyleDemo extends StatelessWidget {
  const StyleDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF5F5F5),
      appBar: AppBar(
        title: const Text('Flutter Style Demo'),
        backgroundColor: const Color(0xFF3498DB),
        foregroundColor: Colors.white,
        centerTitle: true,
      ),
      body: Center(
        child: Container(
          width: 200,
          height: 200,
          decoration: BoxDecoration(
            color: const Color(0xFF3498DB),
            borderRadius: BorderRadius.circular(10),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.25),
                blurRadius: 4,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: const Center(
            child: Text(
              'Styled Component',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
*/

//Flutter Layouts
/*import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

// Application principale
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: LayoutDemo(),
    );
  }
}

// Démonstration du Layout
class LayoutDemo extends StatelessWidget {
  const LayoutDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          // Header en haut
          Container(
            height: 80,
            color: const Color(0xFF3498DB),
            alignment: Alignment.center,
            child: const Text(
              'Header',
              style: TextStyle(
                color: Colors.white,
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),

          // Content prend tout l'espace disponible
          Expanded(
            child: Container(
              width: double.infinity,
              color: const Color(0xFFECF0F1),
              alignment: Alignment.center,
              child: const Text(
                'Content',
                style: TextStyle(fontSize: 18),
              ),
            ),
          ),

          // Footer en bas
          Container(
            height: 60,
            color: const Color(0xFF2C3E50),
            alignment: Alignment.center,
            child: const Text(
              'Footer',
              style: TextStyle(
                color: Colors.white,
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }
}*/

// lib/main.dart
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import 'screens/home_screen.dart';
import 'screens/notes_screen.dart';

void main() => runApp(const NotesApp());

final _router = GoRouter(
  routes: [
    GoRoute(path: '/', builder: (context, state) => const HomeScreen()),
    GoRoute(path: '/notes', builder: (context, state) => const NotesScreen()),
  ],
);

class NotesApp extends StatelessWidget {
  const NotesApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Notes App',
      theme: ThemeData(colorSchemeSeed: const Color(0xFF208AEF)),
      darkTheme: ThemeData(
        colorSchemeSeed: const Color(0xFF208AEF),
        brightness: Brightness.dark,
      ),
      routerConfig: _router,
    );
  }
}
