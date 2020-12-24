import React, { ElementType, useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { CoinCard, Search, Text } from "../components";
import theme from "../lib/theme";
import { Coins } from "../lib/types";
import { getCoins } from "../store/slices/coins";
import { State } from "../store/store";

/**
 * Overview (main) application screen.
 */
const OverviewScreen: React.FC = () => {
  // redux
  const { coins, coinsLoading } = useSelector((state: State) => state.coins);
  const dispatch = useDispatch();

  // refs
  const listRef = useRef<FlatList>(null);

  // state
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [atTop, setAtTop] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>(null);
  const [filteredData, setFilteredData] = useState<Coins>(coins);

  useEffect(() => {
    // fetch coin data
    dispatch(getCoins());

    // falsify initial load state
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      // display filtered coins if search query present (exact substring match)
      const processedQuery = searchQuery?.toLowerCase();

      // filter coins with search query
      const filteredCoins = coins.filter(
        (coin: { [key: string]: string }) =>
          coin.symbol.toLowerCase().includes(processedQuery) ||
          coin.name.toLowerCase().includes(processedQuery),
      );

      // set filtered data to coins matching query filter pattern
      setFilteredData(filteredCoins);
    } else {
      // set filtered data to all coins if no search query present
      setFilteredData(coins);
    }
  }, [coins, searchQuery]);

  // display loading spinner while loading
  if (coinsLoading && initialLoad) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      {/* search bar */}
      <Search
        query={searchQuery}
        setQuery={setSearchQuery}
        data={filteredData}
      />

      {/* coin list */}
      <CoinList<ElementType>
        ref={listRef}
        refreshControl={
          <RefreshControl
            colors={["white"]}
            progressBackgroundColor={theme.colors.primary}
            refreshing={coinsLoading}
            onRefresh={() => {
              dispatch(getCoins());
            }}
          />
        }
        // handle scroll
        onScroll={({ nativeEvent }) => {
          const scrollOffset = nativeEvent.contentOffset.y;

          // set `atTop` state if <= 100 pixels from top
          setAtTop(scrollOffset <= 100);
        }}
        data={filteredData}
        renderItem={(coin: {
          item: {
            id: string;
            image: string;
            symbol: string;
            current_price: number;
          };
        }) => (
          <CoinCard
            key={coin.item.id}
            name={coin.item.id}
            image={coin.item.image}
            symbol={coin.item.symbol}
            price={coin.item.current_price}
          />
        )}
      />

      {/* scroll to top button (appears if y-offset >= threshold) */}
      {!atTop && (
        <Button
          title="SCROLL TO TOP"
          onPress={() => {
            listRef.current?.scrollToOffset({ animated: true, offset: 0 });
          }}
          color={theme.colors.background}
        />
      )}

      {/* footer */}
      <Footer>
        <Text color="white">Powered by CoinGecko</Text>
      </Footer>
    </Container>
  );
};

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

const Container = styled(View)`
  flex: 1;
`;

const CoinList = styled(FlatList)`
  padding-top: 10px;
`;

const Footer = styled(View)`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 5px 0;
`;

export default OverviewScreen;
