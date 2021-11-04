import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions  } from 'react-native';

import { buttonsPortrait, buttonsLandscape } from './config/buttons';
import { getStyles } from './assets/styles';
import expressionCalculator from './utils';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [prevButton, setPrevButton] = useState(false);
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  }, []);

  const isPortrait = dimensions.window.height >= dimensions.window.width;
  const styles = getStyles(isPortrait);
  const buttons = useMemo(() => isPortrait ? buttonsPortrait : buttonsLandscape, [isPortrait]);

  const calculate = () => {
    // Calculations with reverse polish notation
    setResult(`${expressionCalculator(input)}`);
  };

  const onButtonPress = (button) => {
    if (button.isOperation && prevButton.text === button.text || button.isOperation && prevButton.isOperation) {
      return;
    }

    switch (button.text) {
      case 'C':
        setInput('');
        setResult('');
        break;
      case 'Del':
        setInput((prev) => prev.slice(0, prev.length - 1));
        break;
      case '=':
        calculate();
        break;
      default:
        setInput(prev => prev + (button.value || button.text));
        break;
    }
    setPrevButton(button);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>JS One Love!</Text>
      <TextInput editable={false} value={input} style={styles.input}></TextInput>
      <TextInput editable={false} value={result} placeholder="Calculated" style={styles.inputResult}></TextInput>
      <View style={styles.numbers}>
        {buttons.map(button => <TouchableOpacity onPress={() => onButtonPress(button)} key={button.text} style={styles.button}>
          <Text style={styles.buttonText}>{button.text}</Text>
        </TouchableOpacity>)}
      </View>
    </View>
  );
}
