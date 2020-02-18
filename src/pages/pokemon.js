import React, { Component } from 'react';
import api from '../services/api';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF6347"
    },
    list: {
        padding: 20,
        borderBottomColor: "#FF6347",

    },
    pokemonContainer: {
        backgroundColor: '#78C850',
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },
    pokemonStats: {
        textTransform: 'capitalize',
        fontSize: 23,
        fontFamily: 'monospace',
        fontWeight: "bold",
        color: "#323",
    },
    pokemonTypes: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontFamily: 'monospace',
        fontWeight: "bold",
        color: "#323",
    },
    Image: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 450,
        width: 450,

    },
    //Objetos para defininição de types de acordo com cores
    normal: {
        backgroundColor: "#A8A878",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,

    },

    fire: {
        backgroundColor: "#F08030",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    water: {
        backgroundColor: "#6890F0",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    electric: {
        backgroundColor: "#F8D030",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    grass: {
        backgroundColor: "#78C850",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    ice: {
        backgroundColor: "#98D8D8",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    ground: {
        backgroundColor: "#E0C068",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    flying: {
        backgroundColor: "#A890F0",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    ghost: {
        backgroundColor: "#705898",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    rock: {
        backgroundColor: "#B8A038",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    fighting: {
        backgroundColor: "#C03028",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    poison: {
        backgroundColor: "#A040A0",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    psychic: {
        backgroundColor: "#F85888",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    bug: {
        backgroundColor: "#A8B820",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    dark: {
        backgroundColor: "#705848",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    steel: {
        backgroundColor: "#B8B8D0",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },

    dragon: {
        backgroundColor: "#7038F8",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    },
    fairy: {
        backgroundColor: "#FFB6C1",
        borderWidth: 5,
        borderColor: '#DDD',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
    }
})
