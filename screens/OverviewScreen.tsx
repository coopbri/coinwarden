import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import * as coinActions from "../store/actions/coins";
import CoinCard from "../components/UI/CoinCard";
import Colors from "../constants/Colors";

const OverviewScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const coins = useSelector((state) => state.coins.data);
  const dispatch = useDispatch();

  const loadCoinData = useCallback(async () => {
    try {
      await dispatch(coinActions.fetchCoinData());
    } catch (err) {
      throw err;
    }
  }, [dispatch, setIsLoading]);

  useEffect(() => {
    setIsLoading(true);
    loadCoinData().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCoinData]);

  // display loading spinner if fetching data
  if (isLoading) {
    return (
      <View style={styles.loadingIcon}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={(coin) => (
          <CoinCard
            key={coin.item.id}
            name={coin.item.id}
            image={coin.item.image}
            symbol={coin.item.symbol}
            price={coin.item.current_price}
          />
        )}
        style={styles.list}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by CoinGecko</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: { flex: 1 },
  list: { paddingTop: 10 },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    paddingVertical: 5,
  },
  footerText: {
    color: "white",
  },
});

export default OverviewScreen;
