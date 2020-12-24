import { Text as ReactNativeText } from "react-native";
import styled from "styled-components";

/**
 * Text HOC; React Native Text component wrapper.
 */
const Text = styled(ReactNativeText)<{ color?: string }>`
  color: ${({ color }) => color || "black"};
`;

export default Text;
