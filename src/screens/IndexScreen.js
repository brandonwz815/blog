import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}-{item.id}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name="plus" size={30} />
    </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
