// ArticleCard.tsx
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';

interface ArticleCardProps {
  article: {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  };
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const placeholderImage = 'defaultArticleImage.png';

  return (
    <Card>
      <CardMedia component="img" height="140" image={article.urlToImage || placeholderImage} alt={article.title} />
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body2">{article.description}</Typography>
        <Link href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
