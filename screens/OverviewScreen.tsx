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
import Colors from "../constants/Colors";

const OverviewScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const coins = useSelector((state) => state.coins.coin_data);
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
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={(itemData) => <Text>itemData.item.name</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default OverviewScreen;
