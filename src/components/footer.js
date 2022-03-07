import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  tabBar: {
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#42bc3f",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: 70,
  },
  tabIcon: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "relative",
    height: 70,
    width: 70,
    zIndex: 1
  },
  indicator: {
    position: "absolute",
    height: 70,
    width: 70,
    backgroundColor: "#33FFA2",
    top: "-50%",
    borderRadius: 35,
    borderColor: "#FFF",
    borderWidth: 6,
    borderStyle: "solid",
  },
  indicatorBefore: {
    position: "absolute",
    left: -12,
    width: 15,
    height: 15,
    backgroundColor: "red",
    borderTopRightRadius: 20,

    shadowColor: "#FFF",
    shadowOffset: {width: -30, height: -30},
    shadowOpacity: 0,
    shadowRadius: 30,
    elevation: 1
    
  },
  indicatorAfter: {

  },
  icon: {
    color: "#222",
    fontSize: 28,
    marginTop: 20,
    marginBottom: -10,
  },
  text: {
    color: "#222",
    marginBottom: 10,
    fontWeight: "bold",
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
          <View key={`nav-btn-${index}`} style={{marginLeft: 20}}>
            {/* Quadradinho verde atrás do ícone */}
            <View style={isFocused && styles.indicator} />
            <View style={styles.container}>
              <View style={styles.indicatorBefore}/>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabIcon}
              >
                <FontAwesome
                  name={navIcons[route.name]}
                  style={{
                    ...styles.icon,
                    transform: [{ translateY: isFocused ? -35 : 0 }],
                  }}
                />
                <Text style={{ ...styles.text, opacity: isFocused ? 1 : 0 }}>
                  {label}
                </Text>
              </TouchableOpacity>
              <View style={styles.indicatorAfter}/>
            </View>
          </View>
        );
      })}
    </View>
  );
}