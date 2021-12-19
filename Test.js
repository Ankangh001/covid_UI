import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('http://ankangh.xyz/Api/maps.php');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 50, alignItems: 'center', justifyContent:'center' }}>
      <Button title="jgkgkg" />
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.id}, {item.email},  {item.res}</Text>
          )}
        />
      )}
    </View>
  );
};