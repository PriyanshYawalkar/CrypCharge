import { createStackNavigator } from 'react-navigation/stack';
import index from "../../app/(tabs)/index";
import profile from "../../app/(tabs)/profile";
import scanqr from "../../app/(tabs)/scanqr";
import booking from "../../app/(tabs)/booking";
import { Wallet } from "./pages/Wallet";
import Pay from "./pages/Pay";
import Login from ".././pages/Login";
import "./shim";


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="index" component={index} />
            <Stack.Screen name="Profile" component={profile} />
            <Stack.Screen name="scanqr" component={scanqr} />
            <Stack.Screen name="booking" component={booking} />
            <Stack.Screen name="Wallet" component={Wallet} />
            <Stack.Screen name="Pay" component={Pay} />
            <Stack.Screen name="Login" component={Login} />
            

        </Stack.Navigator>
    );
}