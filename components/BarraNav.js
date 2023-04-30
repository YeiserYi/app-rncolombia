import MainPage from "./MainPage"
import { Icon } from "react-native-elements"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Regiones from "./Regiones"
import Departamentos from "./Departametos"
import Reservas from "./Reservas"

const Tab = createBottomTabNavigator()

function BarraNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name ="Inicio"
            component={MainPage}
            option={{
                tabBarIcon:({color, size}) => (
                    <Icon name="house" type="font-awesome" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen
            name ="Regiones"
            component={Regiones}
            option={{
                tabBarIcon:({color, size}) => (
                    <Icon name="earth.americas" type="font-awesome" color={color} size={size}/>
                    ),
            }}/>
            <Tab.Screen
            name ="Departamentos"
            component={Departamentos}
            option={{
                tabBarIcon:({color, size}) => (
                    <Icon name="location-dot" type="font-awesome" color={color} size={size}/>
                    ),
            }}/>
            <Tab.Screen
            name ="Reservas Naturales"
            component={Reservas}
            option={{
                tabBarIcon:({color, size}) => (
                    <Icon name="tree" type="font-awesome" color={color} size={size}/>
                    ),
            }}/>
        </Tab.Navigator>
    )
}

export default BarraNav