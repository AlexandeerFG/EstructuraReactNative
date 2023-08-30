import {Image, Text, View} from 'react-native';

export const App = () => {
  return (
    <View>
      {/* <Text>Pinche Marvin Chaquetin</Text> */}
      <Image
        source={{uri: 'https://reqres.in/img/faces/1-image.jpg'}}
        style={{width: 150, height: 150, borderRadius: 100}}
      />
      <Image
        source={{uri: 'https://reqres.in/img/faces/2-image.jpg'}}
        style={{width: 150, height: 150, borderRadius: 100}}
      />
       <Image
        source={{uri: 'https://reqres.in/img/faces/3-image.jpg'}}
        style={{width: 150, height: 150, borderRadius: 100}}
      />
      <Image
        source={{uri: 'https://reqres.in/img/faces/4-image.jpg'}}
        style={{width: 150, height: 150, borderRadius: 100}}
      />
    </View>
  );
};
