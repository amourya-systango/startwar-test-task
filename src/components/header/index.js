import React from 'react';
import {
  Image, View, Text
} from 'react-native';
import { Images, Literals, Colors } from '../../utils/index';
import styles from './styles';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

function Header({
}) {
  return (
    <View>
        <View style={styles.container}>
          <View style={styles.row}>
            <View>
             <Ionicons name="md-menu" size={25} color={Colors.WHITE} style={styles.leftIcon} />
            </View>
            <View style={styles.subContent}>
              <Text style={styles.title}>{Literals.HEADER}</Text>
            </View>
            <FontAwesome name="bell" size={20} color={Colors.WHITE} style={styles.rightIcon} />
          </View>
        </View>
    </View>
  )
}

export default Header;
