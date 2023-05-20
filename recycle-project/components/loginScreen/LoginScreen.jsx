import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, TextInput, Label } from "react-native";

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
        <ImageBackground source={require('../loginScreen/img/FUNDO AMEBA.png')} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
        <Image source={require('../loginScreen/img/logo.png')} style={styles.logo} /> 
        </View>
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Faça Login</Text>
            <View>
                <View style={styles.label}>
                    <Text style={styles.textInput}>Seu e-mail</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="teste@teste.com.br" />
                </View>
                <View style={styles.label}>
                    <Text style={styles.textInput}>Sua senha</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="*****" />
                </View>
                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity style={styles.forgotPasswordLink}>
                        <Text style={styles.textInput}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Cadastrar-me</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
          <View style={styles.box}>
          
          </View>
          <View style={styles.logoContainer}>
           
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    marginTop: 350,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#9D9494',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginRight: 60,
  },
  textInput: {
    color:'#6C6B6B',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: '#06980C',
    borderRadius: 30,
    marginTop: 5,
    paddingHorizontal: 10,
    textAlign: 'left',
    placeholderTextColor: '#ccc',
  },
  forgotPasswordLink: {
    marginBottom: 10,
  },
  button: {
    width:135,
    height:35,
    backgroundColor: '#A2FF82',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    marginTop: 130,
    width: 310,
    height: 77,
  },
  box:{
    width:430,
    height:101,
    backgroundColor:'#CEFAB4',
  },
  label:{
    marginLeft:60,
  },
});

export default LoginScreen;