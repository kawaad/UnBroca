import React from 'react';
import { FlatList, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Card } from "./Card";
import { ColorPalette } from "../../constants";
import Product from '../../infra/models/product';

interface Props {
  navigation: any;
  productsIDlist?: Product[];
  style?: StyleProp<ViewStyle>;
}

const renderer = (item: Product, index: number, navigation: any) => {
  return (
      <Card
        product = {item}
        navigation = {navigation}
        style = {{ 
          flex:1/2, 
          marginRight: index % 2 ? 10 : 15,
          marginLeft:  index % 2 ? 15 : 10
        }}
      />
  );
};

export function CardsScroll({ navigation, productsIDlist, style }: Props) {
  return (
    <FlatList
      data={productsIDlist}
      style={[styles.productView, style]}
      numColumns={2}
      renderItem={({ item, index }) => {
        return renderer(item, index, navigation);
      }}
      ListEmptyComponent={
        <Text style={styles.emptyText}>
          Sem items para mostrar!
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  productView: {
    alignContent: "space-around",
  },

  emptyText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: ColorPalette.Gray2,
  },
});
