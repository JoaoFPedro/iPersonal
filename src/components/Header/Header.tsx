import { View } from "react-native";
import { Avatar } from "@rneui/themed";
import Button from "../Button/Button";
import styles from "./styles";

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Avatar
          size={48}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <Button children="Feedback" />
        <Button children="Comentarios" />
        <Button children="Teste" />
      </View>
    </>
  );
};

export default Header;
