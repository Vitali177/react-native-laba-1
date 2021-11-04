import { StyleSheet } from 'react-native';

const portraitStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  input: {
    width: '90%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3939ab',
    color: '#3939ab',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  inputResult: {
    width: '90%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3939ab',
    color: '#3939ab',
    fontSize: 30,
    marginBottom: 10,
  },
  numbers: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    width: '25%',
    padding: 30,
  },
  buttonText: {
    fontSize: 25,
  },
  text: {
    color: '#000',
    fontSize: 22,
    color: '#5032f2'
  },
});

const landscapeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  input: {
    width: '90%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3939ab',
    color: '#3939ab',
    fontSize: 30,
  },
  inputResult: {
    width: '90%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3939ab',
    color: '#3939ab',
    fontSize: 30,
    marginBottom: 10,
  },
  numbers: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    width: '15%',
    padding: 7,
  },
  buttonText: {
    fontSize: 25,
  },
  text: {
    color: '#000',
    fontSize: 22,
    color: '#5032f2'
  },
});

export const getStyles = (isPortrait) => isPortrait ? portraitStyles : landscapeStyles;
