// const StackScreen = () => {
//     return (
//         <Stack.Navigator initialRouteName="Login">
//             <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
//             <Stack.Screen name="Register" component={Register} options={{ title: 'Register', headerShown: false }} />
//             <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
//         </Stack.Navigator>
//     );
// };

{/* <Tab.Screen
    name="AdoptHistory"
    component={Dashboard}
    options={{
        tabBarLabel: 'Adopt History',
        tabBarIcon: ({ size, focused, color }) => {
            return (
                <Image
                    style={{ width: size, height: size }}
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                />
            );
        },
    }}
/> */}


// const HomeScreen = ({ navigation }) => {
//     return (
//         <SafeAreaView>
//             <Button
//                 title="Go to Jane's profile"
//                 onPress={() =>
//                     navigation.navigate('Login')
//                 }
//             />
//         </SafeAreaView>

//     );
// };

// const ProfileScreen = ({ navigation, route }) => {
//     return <Text>This is {route.params.name}'s profile</Text>;
// };

// const getFullName = (firstName, secondName, thirdName) => {
//     return firstName + ' ' + secondName + ' ' + thirdName;
// };

// const PizzaTranslator = () => {
//     const [text, setText] = useState('');
//     return (
//         <View style={{ padding: 10 }}>
//             <TextInput
//                 style={{ height: 40 }}
//                 placeholder="Type here to translate!"
//                 onChangeText={newText => setText(newText)}
//                 defaultValue={text}
//             />
//             <Text style={{ padding: 10, fontSize: 42 }}>
//                 {text
//                     .split(' ')
//                     .map(word => word && '🍕')
//                     .join(' ')}
//             </Text>
//         </View>
//     );
// };

// const TestButton = props => {
//     const [isHungry, setIsHungry] = useState(true);

//     return (
//         <View>
//             <Text>
//                 I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
//             </Text>
//             <Button
//                 onPress={() => {
//                     setIsHungry(false);
//                 }}
//                 disabled={!isHungry}
//                 title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
//             />
//         </View>
//     );
// };