import FeedCard from "./FeedCard";
import techAiImage from "@/assets/tech-ai-image.jpg";
import designMinimalImage from "@/assets/design-minimal-image.jpg";
import startupImage from "@/assets/startup-image.jpg";

const FeedGrid = () => {
  const feedData = [
    {
      title: "The Future of AI in Web Development: What Developers Need to Know",
      description: "Artificial intelligence is revolutionizing web development with automated code generation, intelligent testing, and enhanced user experiences. Learn how to prepare for this transformation.",
      source: "TechCrunch",
      timeAgo: "2h ago",
      imageUrl: techAiImage,
      category: "Technology",
      isBookmarked: true,
    },
    {
      title: "Minimalist Design Principles That Actually Work in 2024",
      description: "Explore the latest trends in minimalist design and how to implement them effectively in modern web applications without sacrificing functionality.",
      source: "Design Weekly",
      timeAgo: "4h ago",
      imageUrl: designMinimalImage,
      category: "Design",
    },
    {
      title: "Startup Funding Reaches Record High Despite Economic Uncertainty",
      description: "Despite global economic challenges, venture capital funding for startups has reached unprecedented levels this quarter, with AI and fintech leading the charge.",
      source: "Startup News",
      timeAgo: "6h ago",
      imageUrl: startupImage,
      category: "Startups",
    },
    {
      title: "React 19: New Features and Breaking Changes You Should Know",
      description: "A comprehensive guide to React 19's new features, including improved server components, enhanced concurrent rendering, and important breaking changes.",
      source: "React Blog",
      timeAgo: "8h ago",
      imageUrl: techAiImage,
      category: "Web Dev",
      isBookmarked: true,
    },
    {
      title: "Machine Learning Models Now 90% More Efficient Than Last Year",
      description: "New optimization techniques and hardware improvements have dramatically reduced the computational requirements for training and running ML models.",
      source: "AI Research",
      timeAgo: "12h ago",
      imageUrl: techAiImage,
      category: "AI & ML",
    },
    {
      title: "The Rise of WebAssembly: Performance Benefits and Use Cases",
      description: "WebAssembly is gaining traction for high-performance web applications. Discover its benefits, limitations, and practical implementation strategies.",
      source: "Mozilla Hacks",
      timeAgo: "1d ago",
      imageUrl: designMinimalImage,
      category: "Web Dev",
    },
  ];

  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Latest Feeds</h2>
        <p className="text-muted-foreground">Stay updated with the latest content from your favorite sources</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedData.map((item, index) => (
          <FeedCard
            key={index}
            title={item.title}
            description={item.description}
            source={item.source}
            timeAgo={item.timeAgo}
            imageUrl={item.imageUrl}
            category={item.category}
            isBookmarked={item.isBookmarked}
          />
        ))}
      </div>
    </main>
  );
};

export default FeedGrid;