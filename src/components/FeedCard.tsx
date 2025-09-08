import { Clock, ExternalLink, Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FeedCardProps {
  title: string;
  description: string;
  source: string;
  timeAgo: string;
  imageUrl?: string;
  category: string;
  isBookmarked?: boolean;
}

const FeedCard = ({ 
  title, 
  description, 
  source, 
  timeAgo, 
  imageUrl, 
  category, 
  isBookmarked = false 
}: FeedCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:border-primary/20 bg-card">
      <CardContent className="p-0">
        {imageUrl && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                {category}
              </span>
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="font-medium text-primary">{source}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{timeAgo}</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 ${isBookmarked ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-primary">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-primary">
              <ExternalLink className="h-4 w-4" />
              <span className="ml-1 text-xs">Read</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedCard;