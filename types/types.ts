// types.ts

export type RootStackParamList = {
    Home: undefined;  // Home screen does not expect any parameters
    Menu: undefined;  // Menu screen does not expect any parameters
    Contact: { userId?: string };  // Contact screen expects an optional userId parameter
  };
  