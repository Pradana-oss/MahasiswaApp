import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {ListData, TambahData} from '../pages/pages'

const Stack = createStackNavigator();

const Routes = () => {
    return (
       <Stack.Navigator>
           <Stack.Screen name="Tambah Data" component={TambahData}></Stack.Screen>
           <Stack.Screen name="List Data" component={ListData}></Stack.Screen>
       </Stack.Navigator>
    );
}

export default Routes;