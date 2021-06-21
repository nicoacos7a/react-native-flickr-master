import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#F2F3F4',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#CCD1D1',
    position: 'relative',
  },
};

export default CardSection;
