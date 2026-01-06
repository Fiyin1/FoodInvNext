// app/dashboard/page.tsx
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  // Helper component for Cards to keep code DRY
  const StatCard = ({ title, value }: { title: string; value: string }) => (
    <div className="bg-gray-200 rounded-2xl p-6 flex flex-col justify-center min-h-[7.5rem]">
      <span className="font-Source text-gray-600 text-lg">{title}</span>
      <p className="font-Source text-md md:text-2xl font-bold mt-1">{value}</p>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* 
         ml-0 on mobile, ml-64 on desktop to match sidebar width.
         pt-20 on mobile to clear the hamburger button.
      */}
      <main className="flex-1 p-6 pt-20 lg:pt-10">
        <h1 className="font-Source text-3xl font-bold mb-8 mt-10 md:mt-0">
          Dashboard
        </h1>

        {/* Top Section: 2 Columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatCard title="Total Users" value="2,000,000,000" />
          <StatCard title="Total items in inventory" value="2,000,000,000" />
        </div>

        {/* Bottom Section: Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Total Cereal" value="2,000,000,000" />
          <StatCard title="Total Drinks" value="2,000,000,000" />
          <StatCard title="Total Choco Bars" value="2,000,000,000" />
          <StatCard title="Total Biscuits" value="2,000,000,000" />
          <StatCard title="Total Spreads" value="2,000,000,000" />
          <StatCard title="Total Nuts" value="2,000,000,000" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
