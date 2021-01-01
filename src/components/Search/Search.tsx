import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import styled from "styled-components";

import theme from "../../lib/theme";
import { Coins } from "../../lib/types";

interface Props {
  /** Search query */
  query: string;
  /** Set search query state */
  setQuery: (query: string) => void;
  /** Coin data */
  data: Coins;
  /** React children */
  children?: ReactNode;
}

/**
 * Cryptocurrency search bar.
 * @param {Props} props
 */
const Search: React.FC<Props> = ({ query, setQuery, data }: Props) => {
  return (
    <>
      {/* search bar */}
      <SearchBar
        placeholder="Search for a cryptocurrency..."
        onChangeText={(query: string) => query && setQuery(query)}
        value={query}
        containerStyle={{
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
          padding: 0,
        }}
        inputContainerStyle={{
          backgroundColor: theme.colors.background,
        }}
      />

      {/* display error if no coins match query */}
      {data.length <= 0 && query && (
        <ErrorContainer>
          <ErrorText>No coins found!</ErrorText>
        </ErrorContainer>
      )}
    </>
  );
};

const ErrorContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const ErrorText = styled(Text)`
  font-size: 20px;
  text-align: center;
`;

export default Search;
