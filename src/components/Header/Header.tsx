import { View } from "react-native";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import Button from "../Button/Button";
import styles from "./styles";


const Header = () => {
    return ( 
        <>
        <View style={styles.container}>
            <Button children="Feedback"/>
            <Button children="Comentarios"/>
            <Button children="Teste"/>
            </View>
            
        </>
     );
}
 

export default Header;