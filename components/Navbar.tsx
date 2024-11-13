import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter, useSegments, Href } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import HomeIcon from "@/assets/icons/HomeIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import ChatIcon from "@/assets/icons/ChatIcon";

const Navbar: React.FC = () => {
  const { currentRoute, setCurrentRoute } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    setCurrentRoute(segments.join('/'));
  }, [segments, setCurrentRoute]);

  const handleNavigation = (path: Href) => {
    if (currentRoute === path) return;
    router.push(path);
  };

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableOpacity
        style={[styles.navContent, currentRoute === "" && styles.activeNav]}
        onPress={() => handleNavigation("/")}
      >
        <View style={styles.navItemContainer}>
          <HomeIcon color={currentRoute === "" ? "#fff" : "#d9534f"} />
          <Text style={[styles.navItem, currentRoute === "" && styles.activeText]}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navContent, (currentRoute === "menu" || currentRoute === "menu/[recipeId]") && styles.activeNav]}
        onPress={() => handleNavigation("/menu")}
      >
        <View style={styles.navItemContainer}>
          <MenuIcon color={(currentRoute === "menu" || currentRoute === "menu/[recipeId]") ? "#fff" : "#d9534f"} />
          <Text style={[styles.navItem, (currentRoute === "menu" || currentRoute === "menu/[recipeId]") && styles.activeText]}>Menu</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navContent, currentRoute === "contact" && styles.activeNav]}
        onPress={() => handleNavigation("/contact")}
      >
        <View style={styles.navItemContainer}>
          <ChatIcon color={currentRoute === "contact" ? "#fff" : "#d9534f"} />
          <Text style={[styles.navItem, currentRoute === "contact" && styles.activeText]}>Contact</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: 45,
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    height: 70,
    backgroundColor: "rgb(0 , 0 , 0 )",
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  navContent: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(18, 19, 19, 0.8)",
    paddingVertical: 10,
    width: "30%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  navItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItem: {
    fontSize: 18,
    fontFamily: "outfit-medium",
    color: "#d9534f",
    marginLeft: 6, // For spacing between icon and text
    paddingVertical: 2,
  },
  activeNav: {
    backgroundColor: "#d9534f",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  activeText: {
    color: "#fff",
  },
});

export default Navbar;
