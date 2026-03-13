import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from "recharts";
import { weeklyHeartRate, weeklyBP, healthDistribution } from "@/lib/healthData";

// Combined data for Health Overview chart
const weeklyOverview = weeklyBP.map((bp, i) => ({
  day: bp.day,
  heartRate: weeklyHeartRate[i]?.value ?? 0,
  bloodPressure: bp.systolic,
}));

const HealthCharts = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Health Overview - Combined Chart */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card rounded-xl p-6 lg:col-span-2"
    >
      <div className="flex items-center gap-3 mb-1">
        <h3 className="text-lg font-semibold text-foreground">Health Overview</h3>
        <span className="text-xs text-muted-foreground border border-border rounded-md px-2 py-0.5">this week</span>
      </div>
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-1.5 text-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-health-heart" />
          <span className="text-muted-foreground">Heart Rate</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-health-bp" />
          <span className="text-muted-foreground">Blood Pressure</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={weeklyOverview}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} domain={[60, 140]} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "12px",
              color: "hsl(var(--foreground))",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
            formatter={(value: number, name: string) => [
              name === "heartRate" ? `${value} BPM` : `${value} mmHg`,
              name === "heartRate" ? "Heart Rate" : "Blood Pressure",
            ]}
          />
          <Area
            type="monotone"
            dataKey="heartRate"
            stroke="hsl(var(--health-heart))"
            fill="hsl(var(--health-heart))"
            fillOpacity={0.12}
            strokeWidth={2.5}
            dot={{ fill: "hsl(var(--health-heart))", r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "hsl(var(--health-heart))" }}
          />
          <Area
            type="monotone"
            dataKey="bloodPressure"
            stroke="hsl(var(--health-bp))"
            fill="hsl(var(--health-bp))"
            fillOpacity={0.1}
            strokeWidth={2.5}
            dot={{ fill: "hsl(var(--health-bp))", r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "hsl(var(--health-bp))" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>

    {/* Health Distribution */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="glass-card rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">Health Distribution</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={healthDistribution}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
          >
            {healthDistribution.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 mt-2">
        {healthDistribution.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5 text-xs">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.fill }} />
            <span className="text-muted-foreground">{d.name} {d.value}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default HealthCharts;
