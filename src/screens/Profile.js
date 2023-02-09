import { View, Text, StyleSheet, Button } from 'react-native';
import logOut from "../firebase/functions/logOut"

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="cerrar sesión"
      onPress={() => logOut()}/>
=======
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
  },
});

export default Profile;