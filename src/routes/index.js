import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {DetailData, ListData, TambahData, EditData} from '../pages/pages'

const Stack = createStackNavigator();

const Routes = () => {
    return (
       <Stack.Navigator>
           <Stack.Screen name="Tambah Data" component={TambahData}></Stack.Screen>
           <Stack.Screen name="List Data" component={ListData}></Stack.Screen>
           <Stack.Screen name="Detail Data" component={DetailData}></Stack.Screen>
           <Stack.Screen name="Edit Data" component={EditData}></Stack.Screen>
       </Stack.Navigator>
    );
}

export default Routes;