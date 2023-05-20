import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


class Menu extends React.Component {
  render() {
    return (
      <View style={estilos.container} >

        
          <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={() => console.log('Menu')}>
            <Image source={require('../menu/img/icon_sobrenos.png')} style={{ width: 50, height: 50 }} />
            <Text style={estilos.texto}>Sobre nós</Text>
          </TouchableOpacity>
   

        
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={() => console.log('Menu')}>
          <Image source={require('../menu/img/icon_eu.png')} style={{ width:50, height:50}} />
          <Text style={estilos.texto} >Eu</Text>  
        </TouchableOpacity>
       

       
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={() => console.log('Menu')}>
          <Image source={require('../menu/img/CHAT TELA.png')} style={{ width: 50, height: 50 }} />
          <Text style={estilos.texto}>ChatBot</Text>
        </TouchableOpacity>
       

      
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}  onPress={() => console.log('Menu')}>
          <Image source={require('../menu/img/icon_coleta.png')} style={{ width: 50, height: 50 }} />
          <Text style={estilos.texto}>Coletas</Text>
        </TouchableOpacity>
      

       
        <TouchableOpacity onPress={() => console.log('Menu')}>
          <Image source={require('../menu/img/icon_home.png')} style={{ width: 50, height: 50 }} />
          <Text style={estilos.texto}>Menu</Text>
        </TouchableOpacity>
        

      </View>



    );
  }


}


const estilos = StyleSheet.create({
  container: {
    
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
     backgroundColor: '#CEFAB4',
     width: '430px',
     height: '104px',


  },
  texto: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',

  },
});



export default Menu;