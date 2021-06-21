import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#5DADE2',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5DADE2',
    marginLeft: 80,
    marginRight: 80,
  },
};

export default Button;
