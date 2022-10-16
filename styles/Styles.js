import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonStyles: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 15,
    borderRadius: 100,
    width: 150,
    shadowOpacity: 100,
    shadowRadius: 2.5,
    shadowOffset: { width: 0, height: 0 },
  },

  welcomeButtonStyles: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 25,
    width: 350,
    borderRadius: 100,
    shadowOpacity: 10,
    shadowRadius: 2.5,
    shadowOffset: { width: 0, height: 0 },
  },

  buttonTextStyles: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },

  welcomeButtonTextStyles: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  },

  welcomeStyles: {
    textAlign: 'center',
    fontSize: 32.5,
    marginVertical: 10,
    fontWeight: '700',
  },

  textStyles: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 10,
  },

  headerStyles: {
    alignSelf: 'center',
    fontSize: 25,
    marginVertical: 10,
    fontWeight: 'bold',
  },

  topViewStyles: {
    marginBottom: 40,
  },

  textInputStyles: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 10,
    height: 50,
  },

  ownerLoginPageLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 17.5,
    marginVertical: 30,
    borderWidth: 1.5,
  },
});

export default styles;