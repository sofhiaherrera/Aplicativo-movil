import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number | string;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}>
      <View style={estilos.headerFila}>
        <Text style={estilos.titulo}>{titulo}</Text>
        {enCurso && (
          <View style={estilos.badgeContainer}>
            <Text style={estilos.badge}>En Curso</Text>
          </View>
        )}
      </View>
      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: { 
    padding: 16, 
    borderRadius: 12, 
    marginVertical: 8, 
    borderWidth: 1,
    elevation: 1,
  },
  finalizado: { 
    backgroundColor: "#ffffff", 
    borderColor: "#e2e8f0" 
  },
  enCurso: { 
    backgroundColor: "#eef2ff", 
    borderColor: "#6366f1" 
  },
  headerFila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  titulo: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#0f172a" 
  },
  subtitulo: { 
    fontSize: 14, 
    color: "#475569",
    marginBottom: 2,
  },
  anio: { 
    fontSize: 12, 
    color: "#64748b" 
  },
  badge: { 
    color: "#ffffff", 
    fontWeight: "bold", 
    fontSize: 11 
  },
  badgeContainer: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
});