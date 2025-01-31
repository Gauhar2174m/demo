import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Box = ({ no, boxInfo
    , chance, winner }) => {

    const { isXChance, setIsXChance } = chance;
    const { boxes, setBoxes } = boxInfo;
    const player = isXChance ? 'X' : 'O';

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if( boxes[no] === null && winner === null) {
                    setBoxes((prevBoxInfo) => {
                        prevBoxInfo[no] = player
                        return prevBoxInfo;
                    });
                    setIsXChance((prevState) => !prevState)
                }
            }}
        >
            {boxes[no] !== null ? 
            <View style={styles.boxView}>
                { boxes[no] === 'X' ? 
                <Entypo name="cross" size={68} color="brown" />
                :
                <Entypo name="circle" size={68} color="purple" />
            } 
            </View>
            : <View style={styles.boxView}></View>
            }
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    boxView: {
        minWidth: 110,
        minHeight: 110,
        borderWidth: 2,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Box ;
