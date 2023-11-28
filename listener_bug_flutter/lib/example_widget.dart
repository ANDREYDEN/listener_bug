import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class ExampleWidget extends StatefulWidget {
  const ExampleWidget({super.key});

  @override
  State<ExampleWidget> createState() => _ExampleWidgetState();
}

class _ExampleWidgetState extends State<ExampleWidget> {
  @override
  void initState() {
    FirebaseFirestore.instance
        .collection('items')
        .where('tags', arrayContains: 'foo')
        .snapshots()
        .listen(
            (items) => print('Got items from query 1: ${items.docs.length}'));

    FirebaseFirestore.instance.collection('items').snapshots().listen(
        (items) => print('Got items from query 2: ${items.docs.length}'));

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(body: Center(child: Text('Example')));
  }
}
