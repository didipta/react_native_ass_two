import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native-web";

export default function App() {
  const [more, setMore] = useState(false);
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={require("./assets/images/jeremy-bishop-dvACrXUExLs-unsplash (1).png")}
      style={styles.container}
    >
      <View style={styles.parents}>
        {!more && <ChildOne />}
        <ChildTwo setMore={setMore} more={more} />
      </View>
      {more && <ChildThree />}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  parents: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 35,
    paddingHorizontal: 25,
  },
});

const ChildOne = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Inter-Regular",
            fontSize: 15,
            color: "white",
            lineHeight: 25,
            fontWeight: "400",
            textAlign: "left",
          }}
        >
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Inter-Bold",
            marginTop: 10,
          }}
        >
          Ada Lovelace
        </Text>
      </View>
      <Image source={require("./assets/images/Combined Shape (1).png")} />
    </View>
  );
};

const ChildTwo = ({ setMore, more }) => {
  return (
    <View
      style={{
        marginBottom: 60,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/images/Path.png")}
          style={{
            width: 25,
            height: 25,
          }}
        />
        <Text
          style={{
            fontFamily: "Inter-Regular",
            fontSize: 20,
            color: "white",
            letterSpacing: 3,
          }}
        >
          GOOD EVENING
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontSize: 100,
            color: "white",
            letterSpacing: 5,
          }}
        >
          23:14{" "}
          <Text
            style={{
              color: "white",
              fontFamily: "Inter-Regular",
              fontSize: 20,
            }}
          >
            BST
          </Text>
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Inter-Bold",
            fontSize: 15,
            letterSpacing: 3,
            fontWeight: "700",
          }}
        >
          IN LONDON, UK
        </Text>

        <TouchableOpacity
          onPress={() => setMore(!more)}
          style={{
            marginTop: 20,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 30,
            width: 150,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-bold",
              fontSize: 15,
              color: "black",
              letterSpacing: 3,
            }}
          >
            MORE
          </Text>
          {more ? (
            <Image
              source={require("./assets/images/Group 3 (1).png")}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ) : (
            <Image
              source={require("./assets/images/Group 3.png")}
              style={{
                width: 30,
                height: 30,
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChildThree = () => {
  const [mode, setMode] = useState(true);
  const arr = [
    {
      title: "CURRENT TIMEZONE",
      value: "Europe/London",
    },
    {
      title: "Day of the year",
      value: "295",
    },
    {
      title: "Day of the week",
      value: "5",
    },
    {
      title: "Week number",
      value: "42",
    },
  ];
  return (
    <View
      style={{
        backgroundColor: mode ? "#000" : "#fff",
        paddingVertical: 40,
        paddingHorizontal: 25,
      }}
    >
      <TouchableOpacity
        onPress={() => setMode(!mode)}
        style={{
          alignSelf: "flex-end",
          marginBottom: 20,
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 30,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      >
        {mode ? (
          <Text
            style={{
              fontFamily: "Inter-Bold",
              fontSize: 15,
              color: "black",
              letterSpacing: 3,
            }}
          >
            LIGHT
          </Text>
        ) : (
          <Text
            style={{
              fontFamily: "Inter-Bold",
              fontSize: 15,
              color: "black",
              letterSpacing: 3,
            }}
          >
            DARK
          </Text>
        )}
      </TouchableOpacity>
      {arr.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 15,
              color: mode ? "white" : "black",
              letterSpacing: 3,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "Inter-Bold",
              fontSize: 15,
              color: mode ? "white" : "black",
              letterSpacing: 3,
            }}
          >
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};
