
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import Header from "../Header/Header";
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View >
        <Header />
        <WelcomePage/>
        </View>
      );
}

export default Home;