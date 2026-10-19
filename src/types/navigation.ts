export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Details: {
    serviceId: string;
    title: string;
  };
  NewsDetails: {
    announcementId: number;
  };
};

export type MainTabParamList = {
  Home: undefined;
  Services: undefined;
  News: undefined; // <-- Новый экран новостей с API
  Profile: undefined;
  Settings: undefined;
};