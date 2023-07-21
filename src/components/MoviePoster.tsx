import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie.poster_path);
  return (
    <View style={{width: 300, height: 420}}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.images}
        />
      </View>
    </View>
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
