import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Button: React.FC<React.PropsWithChildren> = ({children}) => {
    return ( 
        <TouchableOpacity style={styles.button}>
       
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
     );
}
 
const styles = StyleSheet.create({
    button: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#007AFF',
      borderRadius: 50,
      width: 80,
      height: 80,
      margin: 10,
    },
    icon: {
      marginBottom: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 12,
    },
  });
export default Button;