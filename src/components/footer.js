import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BorderShadow, BoxShadow } from "react-native-shadow" ;

const shadowLeft = {
	width:5,
	height:25,
	color:"#b4d6bc",
	border:10,
  inset: true,
	side:"top",
	opacity:1,
  style: {
    left: -5,
  }
}
const shadowRight = {
	width:5,
	height:5,
	color:"#b4d6bc",
	border:5,
	side:"top",
  inset: true,
	opacity:1,
  style: {
    right: -3,
    position: "absolute",
  }
}

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
    borderColor: "#b4d6bc",
    borderWidth: 6,
    borderStyle: "solid",
  },
  indicatorBefore: {
    position: "absolute",
    left: -5,
    width: 13,
    height: 15,
    backgroundColor: "#42bc3f",
    borderTopRightRadius: 25,
  },
  indicatorAfter: {
    position: "absolute",
    right: -7,
    width: 13,
    height: 15,
    backgroundColor: "#42bc3f",
    borderTopLeftRadius: 25,
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
      Details: "list-ul",
      Profile: "user",
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
          <View key={`nav-btn-${index}`} style={{ marginLeft: 20 }}>
            {/* Quadradinho verde atrás do ícone */}
            <View style={isFocused && styles.indicator} />
            <View style={styles.container}>
              {isFocused && (
                <BorderShadow setting={shadowLeft}>
                  {[
                    <View
                      key="indicatorBefore"
                      style={styles.indicatorBefore}
                    />,
                  ]}
                </BorderShadow>
              )}
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
              {isFocused && (
                <BoxShadow setting={shadowRight}>
                {[
                  <View
                    key="indicatorAfter"
                    style={styles.indicatorAfter}
                  />,
                ]}
              </BoxShadow>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}