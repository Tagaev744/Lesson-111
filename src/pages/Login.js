import { PageContainer, Input, Button } from '../Components/UI';

function Login() {
  return (
    <PageContainer>
      <h1>Регистрация</h1>
      <Input type="text" placeholder="Введите имя" /> <br />
      <Input type="password" placeholder="Введите пароль" /> <br />
      <Button>Зарегистрироваться</Button>
    </PageContainer>
  );
}

export default Login;