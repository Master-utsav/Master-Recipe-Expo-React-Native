import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter, Href } from "expo-router";

const Navbar: React.FC = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [activePath, setActivePath] = useState<string | null>("/");
  const router = useRouter();
 
  const handleNavigation = (path: Href) => {
    if(activePath === path){
      return;
    }
    if (!isNavigating) {
      setIsNavigating(true);
      setActivePath(path as string);
      router.push(path);
      setTimeout(() => setIsNavigating(false), 500); // Prevent multiple taps within 500ms
    }
  };

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableOpacity
        style={[styles.navContent, activePath === "/" && styles.activeNav]}
        onPress={() => handleNavigation("/")}
      >
        <View>
          <Text style={styles.navItem}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navContent, activePath === "/menu" && styles.activeNav]}
        onPress={() => handleNavigation("/menu")}
      >
        <View>
          <Text style={styles.navItem}>Menu</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navContent, activePath === "/contact" && styles.activeNav]}
        onPress={() => handleNavigation("/contact")}
      >
        <View>
          <Text style={styles.navItem}>Contact</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopEndRadius: 4,
    borderTopStartRadius: 4,
    alignItems: "center",
    height: 70,
    backgroundColor: "rgba(0 , 0 , 0 , 0.9)", // Dark theme background
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 45,
    elevation: 8,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  navContent: {
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 10,
    width: "30%",
    borderRadius: 10,
  },
  navItem: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "outfit-medium",
  },
  activeNav: {
    backgroundColor: "#d9534f", // Accent color for active item
    borderRadius: 10,
  },
});

export default Navbar;
