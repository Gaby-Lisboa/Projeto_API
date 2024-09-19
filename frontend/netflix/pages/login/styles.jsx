import { StyleSheet } from "react-native"; //é um componente que eu vou usar para fazer os estilos

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 300,
        paddingBottom: 300,
    },

    users: {
        backgroundColor: '#a1c6e7', // azul claro
        width: "85%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 20,
        paddingVertical: 20,
    },

    text: {
        fontWeight: '500',
        color: 'black',
        marginBottom: 10,
    },

    input: {
        width: "65%",
        height: 25,
        borderRadius: 2,
        backgroundColor: "#d0e9ff", // azul muito claro
        marginBottom: 10,
        borderColor: '#5a8ea1', // azul escuro
        padding: 8,
        outlineWidth: 0,
    },

    btn: {
        width: "30%",
        height: 25,
        backgroundColor: "#5a8ea1", // azul escuro
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginRight: 8,
    },

    boxEnter: {
        flexDirection: 'row',
        width: "85%",
        minHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles; //o styles não é pelo nome do arquivo, é pela constante que ta armazenando meus estilos
