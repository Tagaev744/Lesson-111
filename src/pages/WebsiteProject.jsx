import { PageContainer, Button } from '../Components/UI';

function WebsiteProject() {
  return (
    <PageContainer>
      <h1>Сайт проекта</h1>
      <p>Выберите сайт для перехода:</p>

      <Button onClick={() => window.open('https://www.google.com', '_blank')}>
        Google
      </Button>

      <Button onClick={() => window.open('https://www.instagram.com', '_blank')}>
        Instagram
      </Button>

      <Button onClick={() => window.open('https://www.facebook.com', '_blank')}>
        Facebook
      </Button>
    </PageContainer>
  );
}

export default WebsiteProject;