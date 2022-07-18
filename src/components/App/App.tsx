import { AppContainer, AppDetail, AppBinderContainer, AppBinder, AppScreen } from "./App.styles";

export const App = () => {
  return (
    <AppContainer>
      <AppDetail />
      <AppBinderContainer>
        <AppBinder />
      </AppBinderContainer>
      <AppScreen />
    </AppContainer>
  );
};
