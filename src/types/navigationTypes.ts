import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Auth: undefined;
  Login: undefined;
  SignUp: undefined;
  Chat: undefined;
};

export type BottomTabParamList = {
  Message: undefined;
  Calls: undefined;
  Contacts: undefined;
  Settings: undefined;
};

export type MessageTabProps = BottomTabScreenProps<
  BottomTabParamList,
  'Message'
>;