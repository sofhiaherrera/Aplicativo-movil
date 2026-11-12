import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function HobbiesScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.headerTitulo}>Intereses y Pasatiempos</Text>
      
      <TarjetaHobby
        nombre="Programación y Código"
        descripcionCorta="Explorar nuevos frameworks y desarrollo móvil."
        icono="code-slash-outline"
        onPress={() => Alert.alert("Detalles del Hobby", "Me encanta programar en React Native, crear arquitecturas limpias y experimentar con bases de datos.")}
      />

      <TarjetaHobby
        nombre="Lectura Tecnológica"
        descripcionCorta="Investigación de patrones de diseño y IA."
        icono="book-outline"
        onPress={() => Alert.alert("Detalles del Hobby", "Leo documentación oficial, artículos de ingeniería de software e historia de la tecnología.")}
      />

      <TarjetaHobby
        nombre="Música y Audio"
        descripcionCorta="Disfrutar de listas de reproducción y sonido."
        icono="musical-notes-outline"
        onPress={() => Alert.alert("Detalles del Hobby", "Escuchar música instrumental y lo-fi mientras desarrollo aplicaciones móviles.")}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  headerTitulo: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
});