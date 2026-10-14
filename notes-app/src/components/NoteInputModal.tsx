
import { useState } from 'react';
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import type { Note } from '../types';

export type NoteDraft = Pick<Note, 'title' | 'content'>;

type Props = {
  visible: boolean;
  initial?: NoteDraft;
  onSave: (draft: NoteDraft) => void;
  onCancel: () => void;
};

export function NoteInputModal({
  visible,
  initial,
  onSave,
  onCancel,
}: Props) {
  // La clé change lorsque les données initiales changent.
  const formKey = initial
    ? `${initial.title}-${initial.content}`
    : 'new';

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <Form
        key={formKey}
        initial={initial}
        onSave={onSave}
        onCancel={onCancel}
      />
    </Modal>
  );
}

function Form({
  initial,
  onSave,
  onCancel,
}: Omit<Props, 'visible'>) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [content, setContent] = useState(
    initial?.content ?? ''
  );

  const canSave = title.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;

    onSave({
      title: title.trim(),
      content: content.trim(),
    });
  };

  return (
    <View style={styles.backdrop}>
      <View style={styles.dialog}>
        <Text style={styles.heading}>
          {initial ? 'Edit note' : 'New note'}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#8A8D96"
          value={title}
          onChangeText={setTitle}
          maxLength={100}
          autoFocus
        />

        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Content"
          placeholderTextColor="#8A8D96"
          value={content}
          onChangeText={setContent}
          multiline
          textAlignVertical="top"
          maxLength={5000}
        />

        <View style={styles.actions}>
          <Pressable
            onPress={onCancel}
            accessibilityRole="button"
          >
            <Text style={styles.cancelAction}>Cancel</Text>
          </Pressable>

          <Pressable
            onPress={handleSave}
            disabled={!canSave}
            accessibilityRole="button"
            style={[
              styles.saveButton,
              !canSave && styles.disabledButton,
            ]}
          >
            <Text style={styles.saveText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 24,
  },
  dialog: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    gap: 14,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#202124',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#f0f0f3',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#202124',
  },
  multiline: {
    minHeight: 120,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
    marginTop: 4,
  },
  cancelAction: {
    color: '#60646c',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#208AEF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.4,
  },
});
