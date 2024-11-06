import StatisticsChart from "./StatisticsChart";

const Statistics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-purple-600 text-white py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8">
        <StatisticsChart />
      </main>
    </div>
  );
};

export default Statistics;
