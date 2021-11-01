import React, { useEffect, useState } from "react";
import Dialog from 'react-native-dialog'

export default function NewItemDialog(props) {

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedHour, setSelectedHour] = useState({ title: '00:00' });
    const [text, setText] = useState('');

    useEffect(() => {
        if (props.selectedHour) {
            setSelectedHour(props.selectedHour)
        }

        setIsDialogOpen(props.dialogOpen)

    }, [props])

    function open() {
        setIsDialogOpen(true)
        setText('')
    }

    function close() {
        setIsDialogOpen(false)
        setText('')
    }

    function addItem() {
        if (text) {
            props.onNewItem(text);
            close()
        }
    }

    return (
        <Dialog.Container visible={isDialogOpen}>
            <Dialog.Title>Nova Tarefa - {selectedHour.title} {text}</Dialog.Title>
            <Dialog.Input value={text} onChangeText={(text) => setText(text)} />
            <Dialog.Button label='Cancelar' onPress={close} />
            <Dialog.Button label='Adicionar' />
        </Dialog.Container>

    );
}