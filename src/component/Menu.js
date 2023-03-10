import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View ,TouchableOpacity, StyleSheet , Image , } from "react-native";


const Menu = () => {
    const navigation = useNavigation();
    return (
    <View style= {styles.menuContainer}>
         <TouchableOpacity style= {styles.iconStyle} 
         onPress= {() => navigation.navigate("Course") } >
         <Image
         style={styles.iconStytle}
         source={{
           uri: "https://img.icons8.com/stickers/90/000000/training.png",
         }}
       />

         </TouchableOpacity>

         <TouchableOpacity style= {styles.buttonStyle} 
         onPress= {() => navigation.navigate("Student") } >
         <Image
         style={styles.iconStytle} 
         source={{
            uri: "https://img.icons8.com/stickers/100/000000/conference.png",
         }}/>
         </TouchableOpacity>
  
         <TouchableOpacity style= {styles.buttonStyle} 
         onPress= {() => navigation.navigate("About") } >
         <Image
         style={styles.iconStytle} 
         source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
         }}/>
         </TouchableOpacity>

         <TouchableOpacity style= {styles.buttonStyle} 
         onPress= {() => navigation.navigate("Contact") } >
         <Image
         style={styles.iconStytle} 
         source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
         }}/>
         </TouchableOpacity>

    </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    textStyle: {
        textTransform: "uppercase",
        marginBottom: 50,
    },
    iconStytle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
});

export default Menu;