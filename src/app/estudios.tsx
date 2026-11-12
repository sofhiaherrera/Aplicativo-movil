import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function EstudiosScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.headerTitulo}>Mi Formación Académica</Text>
      
      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa Municipal"
        anio={2018}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Técnico en Programación de Software"
        institucion="Colegio Técnico ABC"
        anio={2020}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Tecnólogo en ADSO"
        institucion="SENA - Centro de Gestión de Mercados, Logística y TIC"
        anio="2025 - Presente"
        enCurso={true}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  headerTitulo: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
});