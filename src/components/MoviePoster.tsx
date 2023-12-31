import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  movie: Movie;
  height: number;
  width: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{width, height, marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 7}}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.images}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  images: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
