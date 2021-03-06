import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',      
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
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'monospace',
        fontWeight: "bold",
        color: "#323",
    },
    Image: {
        flexDirection: 'row',
         justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        width: 410,

    },
    //Objetos para defininição de types de acordo com cores
    normal: {
        backgroundColor: "#A8A878",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',


    },

    fire: {
        backgroundColor: "#F08030",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',

    },

    water: {
        backgroundColor: "#6890F0",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    electric: {
        backgroundColor: "#F8D030",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    grass: {

        alignSelf: 'flex-start',
        backgroundColor: "#78C850",
        borderWidth: 3,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        height: 45,
        padding: 17,
        paddingTop: 5,
        marginBottom: 1,
    },
    poison: {
        height:45,
        alignSelf: 'flex-start',
        backgroundColor: "#A040A0",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 1,
    },

    ice: {
        backgroundColor: "#98D8D8",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
        height:45,
        alignSelf: 'flex-start',
    },

    ground: {
        backgroundColor: "#E0C068",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    flying: {
        backgroundColor: "#A890F0",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    ghost: {
        backgroundColor: "#705898",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    rock: {
        backgroundColor: "#B8A038",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    fighting: {
        backgroundColor: "#C03028",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    psychic: {
        backgroundColor: "#F85888",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    bug: {
        backgroundColor: "#A8B820",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
        height:45,
        alignSelf: 'flex-start',
    },

    dark: {
        backgroundColor: "#705848",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    steel: {
        backgroundColor: "#B8B8D0",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
        marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },

    dragon: {
        backgroundColor: "#7038F8",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    },
    fairy: {
        backgroundColor: "#FFB6C1",
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 50,
        padding: 17,
        paddingTop: 5,
          marginBottom: 15,
        height:45,
        alignSelf: 'flex-start',
    }
})

export default styles;