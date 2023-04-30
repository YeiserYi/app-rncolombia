import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native-web"
import { getDepartamentosColombia } from "../api/services";

const Departamentos = () => {
    
    const [departamentosColombia, setDepartamentosColombia] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const departamentosColombia = await getDepartamentosColombia();
            setDepartamentosColombia(departamentosColombia);
        }
        fetchData();
    }, []);


return (
    <View style={styles.container}>

        <Text style={styles.tittle}>Departamentos de Colombia</Text>
        {departamentosColombia.map(departamento => (
            <Text key={departamento.id} style={styles.text}>{departamento.name}</Text>
        ))}

    </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItem: "center",
        justifyContent: "center",
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        merginVertical: 5,
    },
})

export default Departamentos