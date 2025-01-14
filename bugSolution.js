```javascript
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}, {id: 3, name: 'Item 3'}];

const BugFreeFlatList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString() || item.name} //Ensure uniqueness
      renderItem={({item}) => <Text>{item.name}</Text>}
    />
  );
};

export default BugFreeFlatList; 
```