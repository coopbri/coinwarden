import React, { ReactNode } from "react";
import { View, Image } from "react-native";
import styled from "styled-components";

import { formatPrice } from "../../lib/util/number";
import { formatName } from "../../lib/util/string";
import Text from "../Text/Text";

interface Props {
  /** Cryptocurrency image */
  image: string;
  /** Cryptocurrency symbol (e.g. 'BTC') */
  symbol: string;
  /** Cryptocurrency name (e.g. 'Bitcoin') */
  name: string;
  /** Current price */
  price: number;
  /** React children */
  children?: ReactNode;
}

/**
 * Cryptocurrency details card.
 * @param {Props} props
 */
const CoinCard: React.FC<Props> = ({ image, symbol, name, price }: Props) => {
  return (
    <Card>
      <MainCoinData>
        <Icon source={{ uri: image }} />
        <Symbol>{symbol.toUpperCase()}</Symbol>
        <Separator color="#d1d1d1">|</Separator>
        <Name>{formatName(name)}</Name>
      </MainCoinData>

      {/* display USD price with commas */}
      <Price>${formatPrice(price)}</Price>
    </Card>
  );
};

const Card = styled(View)`
  margin-bottom: 10px;
  margin: 0 10px 10px 10px;
  border-radius: 15px;
  border-color: #f9de9d;
  border-width: 3px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const MainCoinData = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Icon = styled(Image)`
  width: 35px;
  height: 35px;
`;

const Symbol = styled(Text)`
  margin: 7px 5px 0 9px;
  font-weight: bold;
  font-size: 18px;
`;

const Separator = styled(Text)`
  margin-top: 7px;
  font-size: 16px;
  padding: 0 2px;
  font-weight: bold;
`;

const Name = styled(Text)`
  margin: 7px 20px 0 5px;
  font-size: 18px;
`;

const Price = styled(Text)`
  margin-top: 7px;
  font-weight: bold;
  font-size: 22px;
`;

export default CoinCard;
