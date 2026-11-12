import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function ExperienciaScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.headerTitulo}>Experiencia Laboral y Proyectos</Text>
      
      <TarjetaExperiencia
        cargo="Desarrollador Junior / Aprendiz SENA"
        empresa="Proyectos Académicos ADSO"
        periodo="2025 - Presente"
        descripcion="Desarrollo de aplicaciones móviles multiplataforma con React Native y Expo, maquetación de interfaces responsivas y consumo de servicios backend."
      />

      <TarjetaExperiencia
        cargo="Soporte y Gestión de Bases de Datos"
        empresa="Prácticas de Modelado Relacional"
        periodo="2026"
        descripcion="Diseño, normalización hasta 3FN y optimización de consultas SQL en PostgreSQL y SQLite para sistemas de inventario."
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  headerTitulo: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
});