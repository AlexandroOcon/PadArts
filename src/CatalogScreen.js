import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

function CatalogScreen({ route }) {
  const { products } = route.params;
  const [priceFilter, setPriceFilter] = useState('');

  const filteredProducts = products.filter(product => {
    if (priceFilter === '') {
      return true;
    }
    return product.price <= parseFloat(priceFilter);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por precio (max)"
        value={priceFilter}
        onChangeText={setPriceFilter}
        keyboardType="numeric"
      />
      <ScrollView style={styles.productList}>
        {filteredProducts.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productList: {
    flex: 1,
  },
  productItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
});

export default CatalogScreen;
