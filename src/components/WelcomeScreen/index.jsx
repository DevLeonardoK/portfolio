import { MainScreen, MessageHello, MessageWelcome } from "./styles";

const WelcomeScreen = () => {
  return (
    <>
      <MainScreen>
        <MessageHello>|HELLO|</MessageHello>
        <MessageWelcome>WELCOME TO MY PORTFOLIO</MessageWelcome>
      </MainScreen>
    </>
  );
};

export { WelcomeScreen };
