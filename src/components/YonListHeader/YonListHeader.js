import React, { useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';
import EStyleSheet from 'react-native-extended-stylesheet';

const YonListHeader = ({ setButtonMode, buttonMode }) => {
  const { width } = Dimensions.get('window');

  const styles = EStyleSheet.create({
    container: {
      flexDirection: 'row',
      height: '6.5%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      position: 'absolute',
      flexDirection: 'row',
      height: '100%',
      backgroundColor: '$primaryColorShade1',
      width: width / 2,
      left: buttonMode === 'you' ? 0 : null,
      right: buttonMode === 'answered' ? 0 : null,
    },
    buttonYou: {
      flex: 1,
    },

    buttonAnswered: {
      flex: 1,
    },
    buttonYesText: {
      color: buttonMode === 'you' ? '$textColor' : '$primaryColorShade1',
      fontFamily: 'circular-bold',
      fontSize: '$h2Size',
      alignSelf: 'center',
    },
    buttonAnsweredText: {
      color: buttonMode === 'answered' ? '$textColor' : '$primaryColorShade1',
      fontFamily: 'circular-bold',
      fontSize: '$h2Size',
      alignSelf: 'center',
    },
  });

  const ref = useRef();

  const transition = (
    <Transition.Together>
      <Transition.Change />
    </Transition.Together>
  );

  const toggleButton = (button) => {
    ref.current.animateNextTransition();
    setButtonMode(button);
  };

  return (
    <Transitioning.View
      transition={transition}
      ref={ref}
      style={styles.container}
    >
      <View style={styles.buttonContainer} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={styles.buttonYou}
          onPress={() => toggleButton('you')}
        >
          <Text style={styles.buttonYesText}>you</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAnswered}
          onPress={() => toggleButton('answered')}
        >
          <Text style={styles.buttonAnsweredText}>answered</Text>
        </TouchableOpacity>
      </View>
    </Transitioning.View>
  );
};

export default YonListHeader;
