import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch, useSelector } from 'react-redux';
import * as yonActions from '../../store/actions/yon';
import AnswerButton from '../../components/AnswerButton/AnswerButton';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: '$h1Size',
    width: '90%',
    fontWeight: 'bold',
  },
});

const CreateYonScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [yon, setYon] = useState('');
  const [yonCreated, setYonCreated] = useState(false);

  const handleCreateYon = async (answer) => {
    const yonToCreate = { yon, answer };
    try {
      await dispatch(yonActions.createYon(yonToCreate));
      setYonCreated(true);
    } catch (e) {
      console.log(e);
    }
  };

  const resetInputsAndState = () => {
    setYonCreated(false);
    setYon('');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', resetInputsAndState);

    return () => {
      unsubscribe();
    };
  }, [setYonCreated]);

  return (
    <View style={styles.screen}>
      {yonCreated ? (
        <Text>Your yon was created!</Text>
      ) : (
        <TextInput
          placeholder="my yon goes here..."
          placeholderTextColor="#797979"
          multiline
          style={styles.input}
          textAlign="center"
          underlineColorAndroid="transparent"
          value={yon}
          onChangeText={setYon}
        />
      )}
      <AnswerButton
        clickHandler={() => handleCreateYon(true)}
        backgroundColor="#56205C"
        text="Y"
      />
      <AnswerButton
        clickHandler={() => handleCreateYon(false)}
        backgroundColor="#D1B63E"
        text="N"
      />

      <Button title="Create a Yon" onPress={handleCreateYon}></Button>
    </View>
  );
};

export default CreateYonScreen;
