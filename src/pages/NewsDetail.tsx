import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, ExternalLink, Bookmark, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Demo data - in real app, fetch by id
  const article = {
    id,
    title: 'Advanced AI Models Transform Software Development',
    source: 'Tech Daily',
    timeAgo: '2 hours ago',
    category: 'AI & Tech',
    imageUrl: '/src/assets/tech-ai-image.jpg',
    content: `
      Artificial intelligence continues to revolutionize how developers build and ship software. Recent advances in 
      large language models have introduced new capabilities that were previously thought impossible.
      
      The integration of AI-powered tools into development workflows has increased productivity by up to 40% according 
      to recent industry studies. Developers are now able to focus more on creative problem-solving rather than 
      repetitive coding tasks.
      
      Major tech companies are investing heavily in AI research and development, with particular focus on making 
      these tools accessible to developers of all skill levels. The democratization of AI technology is enabling 
      smaller teams to compete with larger organizations.
      
      However, concerns about code quality, security, and the role of human developers remain topics of active 
      discussion in the tech community. Industry leaders emphasize that AI should augment, not replace, human 
      creativity and judgment.
      
      Looking ahead, the next generation of AI development tools promises even greater integration with existing 
      workflows, improved accuracy, and better understanding of complex software architectures.
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <article>
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="font-medium text-primary">{article.source}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.timeAgo}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}

          <div className="prose prose-invert max-w-none">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-foreground/90 leading-relaxed mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetail;
