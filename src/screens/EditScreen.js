import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {

  return <View>
    <Text>EditScreen-{navigation.getParam('id')}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default EditScreen;
