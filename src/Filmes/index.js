import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native'
import ModalLeiaMais from '../modal/modalLeiaMais'

class ListaFilme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisibility: false
        };
        this.modalVisible = this.modalVisible.bind(this);
    }

    modalVisible(visible) {
        this.setState({ modalVisibility: visible })
    }

    render() {
        const { id, title, poster_path, vote_average, backdrop_path } = this.props.filme;

        return (
            <View>
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                    <Image
                        source={{ uri: this.getUrlImg(poster_path) }}
                        style={styles.poster}
                        resizeMode='stretch'
                    />
                    <View style={styles.areaBotao} >
                        <TouchableOpacity style={styles.botaoView} onPress={() => this.modalVisible(true)}>
                            <Text style={styles.botaoText}>Leia Mais</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal transparent={true} visible={this.state.modalVisibility}>
                    <ModalLeiaMais modalVisible={() => this.modalVisible(false)} movie={this.props.filme} poster={this.getUrlImg(backdrop_path)} />
                </Modal>

            </View>
        );
    }

    getUrlImg(nameImg) {
        return 'https://image.tmdb.org/t/p/w500' + nameImg
    }
}
export default ListaFilme;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 4,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
        marginBottom: 40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    poster: {
        height: 400,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        zIndex: 2
    },

    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -60,
        zIndex: 9
    },
    botaoView: {
        width: 100,
        padding: 8,
        backgroundColor: '#2F4F4F',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        opacity: 1,
    },
    botaoText: {
        color: '#fff',
        textAlign: 'center'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyModal: {
        height: '80%',
        width: '100%',
        backgroundColor: '#ff0'
    }
});