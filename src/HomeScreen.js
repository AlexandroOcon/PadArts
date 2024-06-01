import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import ProductList from './ProductList';
import bannerImage from '../img/Sillas.jpg';

function HomeScreen({ products }) {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Menu>
          <MenuTrigger>
            <Ionicons name="menu-outline" size={24} color="black" style={styles.menuButton} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => navigation.navigate('Catalog', { products })}>
              <Text style={styles.menuOptionText}>Ver Catálogo Completo</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.navigate('Login')}>
              <Text style={styles.menuOptionText}>Cerrar Sesión</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={24} color="black" style={styles.profileButton} />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <MenuProvider>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image 
            source={bannerImage}
            style={styles.bannerImage}
          />
        </View>
        <Text style={styles.bannerText}>Ofertas Especiales en Productos de Oficina</Text>
        
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar productos..."
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categorías</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Mouse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Teclado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Monitor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Mousepad</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <ProductList />
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  bannerContainer: {
    backgroundColor: '#ccc',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerText: {
    textAlign: 'center',
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  searchBar: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    marginRight: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 16,
  },
  profileButton: {
    marginRight: 15,
  },
  menuButton: {
    marginLeft: 15,
  },
  menuOptionText: {
    fontSize: 16,
    padding: 10,
  },
});

export default HomeScreen;
