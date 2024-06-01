import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí podrías agregar la lógica de autenticación
    if (email === 'test@test.com' && password === 'password') {
      navigation.navigate('Home');
    } else {
      alert('Email o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../img/Logo.jpg')}
          style={styles.logo}
        />
        <View style={styles.space} />
      </View>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createaccount}>Crear una cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button2}>
        <Ionicons name="logo-google" size={24} color="black" style={{ marginRight: 10 }} />
        <Text style={{ color: "black" }}>Iniciar con Google</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20, // Añadir margen inferior para espacio entre el logo y el formulario
  },
  logo: {
    width: 100, // Ajustar el tamaño del logo según sea necesario
    height: 100, // Ajustar el tamaño del logo según sea necesario
    resizeMode: 'contain',
  },
  space: {
    height: 20, // Añadir un espacio vertical entre el logo y el formulario
  },
  loginBox: {
    width: '80%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10, // Para añadir sombra en Android
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  createaccount: {
    marginTop: 16,
    color: 'blue',
    textAlign: 'center',
  },
  button2: {
    width: '50%',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default LoginScreen;
