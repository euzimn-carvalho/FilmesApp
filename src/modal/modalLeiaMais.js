import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

class ModalLeiaMais extends Component {
    render() {

        const { title, original_title, overview } = this.props.movie;

        return (
            <View style={styles.modal}>
                <View style={styles.bodyModal}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image
                            source={{ uri: this.props.poster }}
                            style={styles.poster}
                        />

                        <View style={styles.texto}>
                            <Text style={styles.titles}>Título:</Text>
                            <Text style={styles.desc}> {title}</Text>
                        </View>

                        <View style={styles.texto}>
                            <Text style={styles.titles}>Título Original:</Text>
                            <Text style={styles.desc}>{original_title}</Text>
                        </View>


                        <View style={styles.textoDesc}>
                            <Text style={styles.titles}>Descrição:</Text>
                            <Text style={styles.desc}>{overview}</Text>
                        </View>
                    </ScrollView>
                    <View style={styles.areaBotao} >
                        <TouchableOpacity style={styles.botaoView} onPress={this.props.modalVisible}>
                            <Text style={styles.botaoText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

export default ModalLeiaMais;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', margin: 10,
    },
    bodyModal: {
        height: '90%',
        width: '100%',
        backgroundColor: '#ff0',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 4,
        borderRadius: 25,
    },
    areaBotao: {
        zIndex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    botaoView: {
        width: 100,
        padding: 8,
        backgroundColor: '#2F4F4F',
        opacity: 1,
        borderRadius: 10
    },
    botaoText: {
        color: '#fff',
        textAlign: 'center'
    },
    poster: {
        height: 200,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    titles: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 14
    },
    texto: {
        padding: 10,
    },
    textoDesc: {
        padding: 10,

    }
});