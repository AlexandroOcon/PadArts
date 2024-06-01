import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

function ProductList() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Productos Destacados</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Productos de la categoría "Mouse" */}
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/mouse1.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Mouse Gaming</Text>
          <Text style={styles.productPrice}>$39.99</Text>
        </View>
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/mouse2.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Mouse Ergonómico</Text>
          <Text style={styles.productPrice}>$29.99</Text>
        </View>
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/mouse3.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Mouse Inalámbrico</Text>
          <Text style={styles.productPrice}>$19.99</Text>
        </View>

        {/* Productos de la categoría "Teclado" */}
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/teclado1.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Teclado Mecánico</Text>
          <Text style={styles.productPrice}>$59.99</Text>
        </View>
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/teclado2.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Teclado Multimedia</Text>
          <Text style={styles.productPrice}>$49.99</Text>
        </View>

        {/* Productos de la categoría "Monitor" */}
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/monitor1.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Monitor 24"</Text>
          <Text style={styles.productPrice}>$199.99</Text>
        </View>
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/monitor2.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Monitor 27"</Text>
          <Text style={styles.productPrice}>$299.99</Text>
        </View>

        {/* Productos de la categoría "Mousepad" */}
        <View style={styles.productItem}>
          <Image 
            source={{uri: 'https://example.com/mousepad1.jpg'}}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Mousepad XL</Text>
          <Text style={styles.productPrice}>$14.99</Text>
        </View>
        {/* Puedes agregar más productos según necesites */}
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
