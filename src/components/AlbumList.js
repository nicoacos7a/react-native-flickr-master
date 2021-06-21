import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = (props) => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
      )
      .then((response) => setAlbums(response.data.photosets.photoset));
  }, []);

  const renderItem = ({item}) => (
    <AlbumDetail
      navigation={props.navigation}
      key={item.id}
      title={item.title._content}
      albumId={item.id}
    />
  );

  return !albums ? (
    <Text>Cargando...........</Text>
  ) : (
    <View style={{flex: 1}}>
      <FlatList data={albums} renderItem={renderItem} />
    </View>
  );
};

export default AlbumList;
