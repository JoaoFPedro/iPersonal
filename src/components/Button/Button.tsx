import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';


const Button: React.FC<React.PropsWithChildren> = ({children}) => {
    return ( 
        <TouchableOpacity style={styles.button}>
       
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
     );
}
 

export default Button;