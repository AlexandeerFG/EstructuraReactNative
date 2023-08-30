import { Image, Text, View } from 'react-native';

export const App = () => {
  return (
    <View>
      {/* <Text>Pinche Marvin Chaquetin</Text> */}
      <Image
        source={{uri: 'https://reqres.in/img/faces/1-image.jpg'}}
        style={{width: 120, height: 120, borderRadius: 100}}
      />
      <Image
        source={{uri: 'https://reqres.in/img/faces/2-image.jpg'}}
        style={{width: 120, height: 120, borderRadius: 100}}
      />
      <Image
        source={{uri: 'https://reqres.in/img/faces/3-image.jpg'}}
        style={{width: 120, height: 120, borderRadius: 100}}
      />
      <Image
        source={{uri: 'https://reqres.in/img/faces/4-image.jpg'}}
        style={{width: 120, height: 120, borderRadius: 100}}
      />
      <Image
        source={{uri: 'https://reqres.in/img/faces/5-image.jpg'}}
        style={{width: 120, height: 120, borderRadius: 100}}
      />
    </View>
  );
};
