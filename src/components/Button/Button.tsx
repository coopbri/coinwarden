import React, { ElementType } from "react";
import { PressableProps, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

interface Props {
  /** Button text */
  text?: string;
  /** `onPress` event prop
   * @see https://reactnative.dev/docs/pressable#onpress
   */
  onPress?: () => void;
  /** Button container props */
  rest?: PressableProps;
}

/**
 * Custom, isomorphic cross-platform button component. Contains a `TouchableOpacity` wrapper and a `Text` component housed within.
 * @param {Props} props
 */
const Button: React.FC<Props> = ({ text, ...rest }: Props) => {
  return (
    <ButtonContainer<ElementType> {...rest}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ButtonText = styled(Text)`
  font-size: 18px;
  padding: 10px 0;
  color: white;
`;

export default Button;
