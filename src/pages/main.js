import React, { Component } from 'react';
import api from '../services/api';
import { View, Image, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import styles from '../styles/mainStylesheet'
export default class Main extends Component {
    static navigationOptions = {
        title: "Pokedex"
    };

    state = {
        pokemonInfo: {},
        results: [],
        offSet: 0,
        limit: 20,
        ImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    };

    componentDidMount() {
        this.loadPokemons();
    }


    loadPokemons = async (offSet = 0) => {
        const response = await api.get(`/pokemon?offset=${offSet}&limit=${this.state.limit}`);

        const { results, ...pokemonInfo } = response.data;

        this.setState({
            results: [...this.state.results, ...results],
            pokemonInfo,
            offSet

        })
    };

    loadMore = () => {
        const { offSet, pokemonInfo } = this.state;
        // Pages 'a variavel de numero maximo de paginas nessa api utlizada como exemplo
        if (pokemonInfo.next == null) return;

        const offSetNumber = offSet + this.state.limit;

        this.loadPokemons(offSetNumber);
    }


    takeIdFromUrl = (baseURL) => {
        const id = baseURL.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        return id;
    }

    
    renderItem = ({ item }) => (
        <View style={styles.pokemonContainer}>
            <Text style={styles.pokemonName}>{this.takeIdFromUrl(item.url)}-{item.name}</Text>
            <Image
                style={styles.Image}
                source={{ uri: this.state.ImageUrl + this.takeIdFromUrl(item.url) + ".png" }}
            />
            <TouchableOpacity style={styles.pokemonButton}
                onPress={() => {
                    this.props.navigation.navigate("Pokemon", { pokemon: item })
                }}
            >
                <Text style={styles.pokemonButtonText}>Detalhes do Pokemon</Text>
            </TouchableOpacity>
        </View>
    );
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.results}
                    keyExtractor={item => item.url}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.3}
                />
            </View>
        );
    }
}
