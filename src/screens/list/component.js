
import React from 'react';
import { Text, View, SafeAreaView, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Header } from '../../components/index';
import { Literals, Images, Colors } from '../../utils';

export default class ListComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      search: '',
    }
  }

  // Reterive the data of list from state
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.list != prevState.list && prevState.search.length == 0) {
      return {
        list: nextProps.list,
      };
    }
    return null;
  }

  handleSearch(text) {
    const { list } = this.state;
    const newData = list.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return (itemData.includes(textData));
    });
    this.setState({ list: newData, search: text });
  }

  render() {
    const { list, search } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.textInput}>
          <TextInput
            value={search}
            onChangeText={(text) => this.handleSearch(text)}
            placeholder={Literals.SEARCH}
            selectionColor={Colors.BLACK}
            placeholderTextColor={Colors.GRAY}
            style={styles.input}
          />
          <View style={styles.searchimg}>
            <Image source={Images.SEARCH} style={styles.searchIcon} />
          </View>
        </View>
        <View style={styles.content}>
          {
            list.length > 0 ?
              <FlatList
                data={list}
                showsVerticalScrollIndicator={false}
                extraData={this.state}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.card}>
                      <Text style={styles.text}>{item.name}</Text>
                      <Image source={Images.CAR} style={styles.fltImg} />
                      <View style={styles.row}>
                        <Text style={styles.carTitle}>{item.manufacturer}</Text>
                        <Text style={styles.price}>{'$' + item.cost_in_credits}</Text>
                      </View>
                      <View style={styles.rating}>
                        <Text style={styles.class}>{'Capacity - ' + item.cargo_capacity}</Text>
                      </View>
                      <Text style={styles.model}>{'Class - ' + item.vehicle_class}</Text>
                      <Text style={styles.model}>{'Model - ' + item.model}</Text>
                      <View style={styles.quantityRow}>
                        <Text style={styles.model}>{'Speed - ' + item.max_atmosphering_speed}</Text>
                      </View>
                      <View style={styles.bottom}>
                        <TouchableOpacity style={styles.exclusiveView}>
                          <Text style={styles.exclusive}>{Literals.OFFER}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                }
                }
                keyExtractor={(item, index) => index.toString()}
              />
              :
              <Text style={styles.waitText}>{Literals.WAIT}</Text>
          }
        </View>
      </SafeAreaView>
    );
  }
}
