import { View, Text, Image } from "react-native";
import TextButton from "../../components/auth_components/text-button";

export default function CreateProfilePhoto() {
  return (
    <View style={styles.container}>
      <TitleBar></TitleBar>
      <Navigation></Navigation>
      <Text style={styles.heading}>Profile Photo</Text>
      <Text style={{ width: "90%", marginBottom: 16 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <TextButton
        text={"Upload Photo"}
        hasBorder={true}
        color={"#DDDDDD"}
      ></TextButton>
      <Text style={{ textAlign: "center", marginBottom: 16 }}>
        JPG or PNG format, Maximum 5 MB
      </Text>
      <Text style={{ fontWeight: 500, fontSize: 14, marginBottom: 16 }}>
        Upload Preview
      </Text>
      <Card
        image={require("../../assets/boy.png")}
        name={"John Doe"}
        bio={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ></Card>
    </View>
  );
}

function Card({ image, name, bio }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={{ width: 100, height: 100 }}></Image>
      <View style={{ padding: 16, flex: 1, alignItems: "space-betweeen" }}>
        <Text style={{ fontWeight: 500, marginBottom: 16 }}>{name}</Text>
        <Text>{bio}</Text>
      </View>
    </View>
  );
}

function TitleBar() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/back.png")}
        style={{
          padding: 8,
          width: 13,
          height: 7,
          marginRight: 12,
          marginTop: 5,
        }}
      ></Image>
      <View>
        <Text style={styles.heading}>Create Your Profile</Text>
      </View>
    </View>
  );
}

function Navigation() {
  return (
    <View style={styles.navigation}>
      <Text style={{ color: "blue" }}>About Us {">"} </Text>
      <Text>Photo {">"} </Text>
      <Text>Certification {">"} </Text>
      <Text>Education {">"} </Text>
    </View>
  );
}
const styles = {
  header: {
    flexDirection: "row",
    alightItems: "center",
    marginBottom: 24,
  },
  container: {
    marginTop: 68,
    padding: 16,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
  },
  navigation: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#33363B",
    height: 124,
    alignItems: "center",
  },
};
