import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.title);

  return <View>
    <Text style={styles.label}>Enter Title:</Text>
    <TextInput
      style={styles.input}
      value={title}
      onChangeText={setTitle}
    />
    <Text style={styles.label}>Enter Content:</Text>
    <TextInput
      style={styles.input}
      value={content}
      onChangeText={setContent}
    />
    <Button
      title="Save Blog Post"
      onPress={() => onSubmit(title, content)}
    />
  </View>
};

BlogPostForm.defaultProps={
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;
