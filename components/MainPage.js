import { useEffect, useState } from "react"
import { Icon } from "react-native-elements/dist/icons/Icon"
import { View, Text, StyleSheet } from "react-native-web"
import { getColombiaInfo } from "../api/services";

const MainPage = ({navigation}) => {
    const [colombiaInfo, setColombiaInfo] = useState({})

    useEffect(() => {
        async function fetchData () {
            const colombiaData = await getColombiaInfo()
            setColombiaInfo(colombiaData)
        }
        fetchData();
        navigation.setOptions({
            headerRigth: () => {
                return (
                    <Icon name='users' onPress={() => navigation.navigate('')} />
                )
            }
        })
        
    })
    

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Informacion acerca de: {colombiaInfo.name}</Text>
            <Text style={styles.text}>Regiones: {colombiaInfo.description}</Text>
            <Text style={styles.text}>Descripcion: {colombiaInfo.description}</Text>
            <Text style={styles.text}>Capital: {colombiaInfo.stateCapital}</Text>
            <Text style={styles.text}>Superficie: {colombiaInfo.surface}</Text>
            <Text style={styles.text}>Poblacion: {colombiaInfo.population}</Text>
        </View>
    )

}

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

export default MainPage