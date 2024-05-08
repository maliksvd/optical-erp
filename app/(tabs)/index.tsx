import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScrollView alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
          <View style={styles.cardItems}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>16</Text>
              <Text style={styles.cardText}>Orders</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>16</Text>
              <Text style={styles.cardText}>Manufacturing</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>16</Text>
              <Text style={styles.cardText}>Shipping</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>16</Text>
              <Text style={styles.cardText}>Delivered</Text>
            </View>

          </View>
        </ScrollView>

        <View style={styles.ordersCard}>
          <Text>Orders</Text>
          <View>
            <Text>Order 1</Text>
            <Text>Order 2</Text>
            <Text>Order 3</Text>
            <Text>Order 4</Text>
            <Text>Order 5</Text>
            <Text>Order 6</Text>
            <Text>Order 7</Text>
            <Text>Order 8</Text>
            <Text>Order 9</Text>
            <Text>Order 10</Text>
            <Text>Order 11</Text>
            <Text>Order 12</Text>
            <Text>Order 13</Text>
            <Text>Order 14</Text>
            <Text>Order 15</Text>
            <Text>Order 16</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    justifyContent: 'flex-start',
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 36,
    paddingHorizontal: 18,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 12,
    width: 200,
    height: 120,
    marginRight: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05
  },
  ordersCard: {
    backgroundColor: '#fff',
    paddingVertical: 36,
    paddingHorizontal: 18,
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  cardText: {
    fontSize: 12,
  },
  cardItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 12,
    marginHorizontal: 12,
  },
});
