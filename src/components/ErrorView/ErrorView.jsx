import errorImage from './sign-1719892_1920.png';
import {Error, Img, Text} from './ErrorView.styled'


export const ErrorView = () => {
  return (
    <Error role="alert">
      <Img src={errorImage} width="250" alt="error" />
      <Text>Відбулося щось непередбачуване, ми не можемо надати вам картинки.</Text>
    </Error>
  );
};

