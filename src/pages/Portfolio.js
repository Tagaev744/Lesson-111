import { PageContainer, Button } from '../Components/UI';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <PageContainer>
      <h1>Портфолио</h1>
      <p>Нажмите, чтобы посмотреть подробнее:</p>

      <Link to="/portfolio/store">
        <Button>Проект: Магазин</Button>
      </Link>

      <Link to="/portfolio/website">
        <Button>Проект: Сайт</Button>
      </Link>

      <Link to="/portfolio/blog">
        <Button>Проект: Блог</Button>
      </Link>
    </PageContainer>
  );
}

export default Portfolio;