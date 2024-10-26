import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
/*
Objetivo: Crear una galería de imágenes con desplazamiento vertical.
Tareas:
•	Usar un FlatList o ScrollView para mostrar una lista de imágenes.
•	Cada imagen debe tener una descripción debajo.
•	Agregar un borde y un espacio entre las imágenes.
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TA 5</Text>
      <ScrollableComponent />
    </View>
  );
}

function ScrollableComponent() {
  const images = [
    {
      path: require("./assets/imagen1.jpg"),
      description: "Un tractor en el campo",
    },
    { path: require("./assets/imagen2.jpeg"), description: "Qué linda playa" },
    { path: require("./assets/imagen3.jpg"), description: "Bosque iluminado" },
  ];
  return (
    <ScrollView style={styles.mainComponent}>
      {images.map((currentImage, index) => {
        return (
          <Picture
            imagePath={currentImage.path}
            description={currentImage.description}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
}

function Picture({ imagePath, description }) {
  return (
    <View style={styles.frame}>
      <Image source={imagePath} style={styles.image} />
      <Text style={styles.description}>
        <Text style={styles.boldText}>Desc:</Text> {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flex: 1,
    backgroundColor: "beige",
    paddingTop: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
  },
  mainComponent: {
    backgroundColor: "grey",
    gap: 10,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  frame: {
    maxWidth: 300,
    height: 275,
    maxHeight: 500,
    justifyContent: "flex-start",
    alignContent: "center",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  image: {
    width: 200, // Ancho de la imagen
    height: 200, // Altura de la imagen
    resizeMode: "cover", // Modo de ajuste de la imagen (cover, contain, stretch, etc.)
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
  },
});
