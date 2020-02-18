import React, { Component } from 'react';
import api from '../services/api';
import styles from '../styles/pokemonPageStyleSheet'
import _ from 'lodash';
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
export default class Pokemon extends Component {

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation
        return {
            title: `${state.params.pokemon.name.replace(/^\w/, c => c.toUpperCase())}`//this.navigationOptions.getParams(pokemon)
        }
    }

    state = {
        pokemonInfo: {},
        types: [],
        ImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    }

    componentDidMount() {
        this.loadPokemons();
    }

    loadPokemons = async () => {
        const pokemonName = this.props.navigation.state.params.pokemon.name

        const response = await api.get(`/pokemon/${pokemonName}/`);
        const { types, ...pokemonInfo } = response.data;

        this.setState({
            // results: [...this.state.results, ...results],
            types: types,
            pokemonInfo,

        })
    };


    takeIdFromUrl = (baseURL) => {
        const id = baseURL.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        return id;
    }

    renderItem = ({ item }) => {
        const typeColor = item.type.name;

        return (
            <View style={_.get(styles, typeColor)}>
                <Text style={styles.pokemonTypes}>{item.type.name}</Text>
            </View>
        );
    }
    render() {
        const pokemon = this.props.navigation.state.params.pokemon;

        return (
            <View >
                <Text style={styles.pokemonStats}>Name: {this.takeIdFromUrl(pokemon.name)}</Text>
                <Text style={styles.pokemonStats}>Weight: {this.state.pokemonInfo.weight} hectograms</Text>
                <Text style={styles.pokemonStats}>Height: {this.state.pokemonInfo.height} decimetres</Text>
                <Text style={styles.pokemonStats}>Base Experience: {this.state.pokemonInfo.base_experience}</Text>

                <Image
                    style={styles.Image}
                    source={{ uri: this.state.ImageUrl + this.takeIdFromUrl(pokemon.url) + ".png" }}
                />
                <View >
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.types}
                        keyExtractor={item => item.type.url}
                        renderItem={this.renderItem}
                    />
                </View>


            </View>
        )
    }


}

