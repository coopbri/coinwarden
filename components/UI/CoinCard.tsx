import React from "react";
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";

const CoinCard = (props) => {
  // convert obj to string and hide commas
  const str = (t) => {
    return String(t).replace(/,/g, "");
  };

  // uppercase text
  const uppercase = (t) => {
    return t.toUpperCase();
  };

  // capitalize text
  const capitalize = (t) => {
    return t.charAt(0).toUpperCase() + t.slice(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <Text style={styles.coinSymbol}>{uppercase(str(props.symbol))}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.coinName}>{capitalize(str(props.name))}</Text>
        <Text style={styles.coinPrice}>${props.price.toFixed(2)}</Text>
      </View>

      <View style={styles.statisticsContainer}>
        <Text>(Graph/Trends Placeholder)</Text>
        <Text>{props.percent_change_24h} (24h)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    borderColor: "#f9de9d",
    borderWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  coinSymbol: {
    marginTop: 7,
    marginLeft: 9,
    marginRight: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  coinName: {
    marginTop: 7,
    marginLeft: 5,
    marginRight: 20,
    fontSize: 16,
  },
  separator: {
    marginTop: 7,
    fontSize: 16,
    paddingHorizontal: 2,
    color: "#d1d1d1",
    fontWeight: "bold",
  },
  coinPrice: {
    marginTop: 7,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: "bold",
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#f1f1f1",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5,
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default CoinCard;
