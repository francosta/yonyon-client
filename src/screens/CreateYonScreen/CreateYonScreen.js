import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch } from 'react-redux';
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
    height: '80%',
    fontWeight: 'bold',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '18.7%',
  },
  success: {
    textAlign: 'center',
    fontSize: '$h1Size',
  },
});

const CreateYonScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [yon, setYon] = useState('');
  const [yonCreated, setYonCreated] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateYon = async (answer) => {
    setError(null);
    const yonToCreate = { yon, answer };
    if (!yon) {
      return setError('error');
    }
    try {
      await dispatch(yonActions.createYon(yonToCreate));
      setYonCreated(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert(
        'You must ask a question to create a yon.',
        'Enter a question and select your answer.',
        [{ text: 'Okay', onPress: () => setError(null) }]
      );
    }
  }, [error]);

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
        <Text style={styles.success}>your yon was created</Text>
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
      {!yonCreated ? (
        <View style={styles.buttonContainer}>
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
        </View>
      ) : null}
    </View>
  );
};

export default CreateYonScreen;
