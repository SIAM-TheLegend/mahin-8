import { Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, ComposedChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "MacBook Pro 16'", price: 85, total: 90 },
  { name: "MacBook Pro 14'", price: 50, total: 60 },
  { name: "iPhone 15 Pro", price: 85, total: 75 },
  { name: "Samsung Galaxy S24", price: 65, total: 55 },
  { name: "Apple Watch Series 9", price: 35, total: 45 },
  { name: "AirPods Pro", price: 80, total: 70 },
  { name: "MacBook Air", price: 70, total: 65 },
  { name: "iPhone 13", price: 90, total: 85 },
  { name: "ThinkPad X1 Carbon", price: 85, total: 80 },
];

const StatisticsChart = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Statistics</h1>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="h-[500px] w-full">
            {" "}
            {/* Increased height for better label visibility */}
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{ top: 20, right: 20, bottom: 60, left: 20 }} // Added margin for labels
              >
                <defs>
                  <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#6b7280" }}
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  angle={-45} // Angle the text
                  textAnchor="end" // Align text end
                  height={90} // Increase axis height
                  dy={2} // Adjust label position
                />
                <YAxis tick={{ fill: "#6b7280" }} tickLine={false} axisLine={false} domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                  }}
                />
                <Bar dataKey="price" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={30} />
                <Area type="monotone" dataKey="total" stroke="#a855f7" fillOpacity={1} fill="url(#totalGradient)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticsChart;
