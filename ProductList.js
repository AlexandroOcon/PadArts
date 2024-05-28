// components/ProductList.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

function ProductList() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Productos Destacados</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/product1.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Silla Ergonómica</Text>
          <Text style={styles.productPrice}>$199.99</Text>
        </View>
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/product2.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Escritorio Moderno</Text>
          <Text style={styles.productPrice}>$299.99</Text>
        </View>
        {/* Agrega más productos según sea necesario */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productImage: {
    width: 150,
    height: 150,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    padding: 5,
  },
});

export default ProductList;
