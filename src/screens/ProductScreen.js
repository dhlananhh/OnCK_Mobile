import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';
import products from '../data/products';


const ProductScreen = () => {
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </View>
            )}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    imageContainer: {
        width: '50%',
        padding: 1,
    }
});

export default ProductScreen;