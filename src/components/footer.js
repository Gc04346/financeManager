import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#42bc3f",
    borderRadius: 12,
    maxHeight: 70,
  },
  tabIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 70,
    width: 70,
    backgroundColor: "#33FFA2",
    zIndex: 1
  },
  icon: {
    color: "#222",
    fontSize: 28,
    marginTop: 20,
    marginBottom: -20,
  },
  text: {
    color: "#222",
    marginBottom: 20,
  }
});

export default function NavBar({ state, descriptors, navigation }) {
    const navIcons = {
      Home: "home",
      New: "plus",
    };
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <View style={styles.container}>
          <TouchableOpacity
          key={`nav-btn-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabIcon}
          >
            <FontAwesome name={navIcons[route.name]} style={{...styles.icon, transform:[{translateY:isFocused ? -35 : 0}]}} />
            <Text style={{ ...styles.text, opacity: isFocused ? 1 : 0}}>
              {label}
            </Text>
          </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}