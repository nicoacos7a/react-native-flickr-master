import React, {Component, useState, useEffect, useRef} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      )
      .then((response) => setPhotos(response.data.photoset.photo));
  }, []);

  const renderItem = ({item}) => (
    <PhotoDetail
      key={item.title}
      title={item.title}
      imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
    />
  );

  return !photos ? (
    <View style={styles}>
      <Text>Cargando...</Text>
    </View>
  ) : (
    <View style={{flex: 1}}>
      <FlatList data={photos} renderItem={renderItem} />
    </View>
  );
};

const styles = {
  alignSelf: 'center',
  margin: 100,
};

export default PhotoList;
