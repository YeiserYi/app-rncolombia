import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native-web"
import { getReservasColombia } from "../api/services";

const Reservas = () => {
    
    const [reservasColombia, setReservasColombia] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const reservasColombia = await getReservasColombia();
            setReservasColombia(reservasColombia);
        }
        fetchData();
    }, []);


return (
    <View style={styles.container}>

        <Text style={styles.tittle}>Reservas Naturales de Colombia</Text>
        {reservasColombia.map(reserva => (
            <Text key={reserva.id} style={styles.text}>{reserva.name}</Text>
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

export default Reservas