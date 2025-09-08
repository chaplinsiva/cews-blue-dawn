import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FeedGrid from "@/components/FeedGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <FeedGrid />
      </div>
    </div>
  );
};

export default Index;
