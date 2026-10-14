import 'package:flutter_test/flutter_test.dart';
import 'package:notes_flutter/main.dart';

void main() {
  testWidgets('Home screen displays the notes app', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(const NotesApp());

    expect(find.text('Notes App'), findsNWidgets(2));
    expect(find.text('Flutter + go_router'), findsOneWidget);
  });
}
