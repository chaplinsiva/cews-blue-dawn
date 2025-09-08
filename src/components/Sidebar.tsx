import { Home, Bookmark, TrendingUp, Hash, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  const categories = [
    { name: "Technology", count: 24, color: "bg-blue-primary" },
    { name: "Design", count: 18, color: "bg-blue-secondary" },
    { name: "Startups", count: 12, color: "bg-blue-muted" },
    { name: "AI & ML", count: 31, color: "bg-accent" },
    { name: "Web Dev", count: 15, color: "bg-blue-primary" },
  ];

  return (
    <aside className="w-64 border-r border-border bg-surface-elevated/50">
      <div className="p-6">
        <nav className="space-y-2">
          <Button variant="secondary" className="w-full justify-start">
            <Home className="mr-3 h-4 w-4" />
            All Feeds
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bookmark className="mr-3 h-4 w-4" />
            Bookmarks
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <TrendingUp className="mr-3 h-4 w-4" />
            Trending
          </Button>
        </nav>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Categories
            </h3>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <ScrollArea className="h-64">
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-elevated transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`h-2 w-2 rounded-full ${category.color}`} />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {category.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;