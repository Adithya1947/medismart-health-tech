import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import HeartAnimation from "@/components/dashboard/HeartAnimation";

const daily = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  value: 65 + Math.round(Math.sin(i * 0.5) * 12 + Math.random() * 5),
}));

const weekly = [
  { day: "Mon", avg: 74, min: 62, max: 88 },
  { day: "Tue", avg: 78, min: 65, max: 92 },
  { day: "Wed", avg: 72, min: 60, max: 85 },
  { day: "Thu", avg: 80, min: 68, max: 95 },
  { day: "Fri", avg: 76, min: 63, max: 90 },
  { day: "Sat", avg: 82, min: 70, max: 96 },
  { day: "Sun", avg: 78, min: 66, max: 88 },
];

const HeartRatePage = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Heart className="w-7 h-7 text-health-heart animate-heartbeat" /> Heart Rate Analysis
      </h1>
      <p className="text-muted-foreground text-sm mt-1">Detailed heart rate monitoring and trends.</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: "Current", value: "78 BPM", sub: "Normal" },
        { label: "Resting Avg", value: "68 BPM", sub: "Last 7 days" },
        { label: "Peak Today", value: "95 BPM", sub: "During exercise" },
      ].map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 text-center">
          <p className="text-sm text-muted-foreground">{s.label}</p>
          <p className="text-3xl font-bold text-foreground mt-1">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
          {i === 0 && <div className="flex justify-center"><HeartAnimation /></div>}
        </motion.div>
      ))}
    </div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">24-Hour Heart Rate</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={daily}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="hour" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} interval={3} />
          <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} domain={[50, 110]} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
          <Area type="monotone" dataKey="value" stroke="hsl(var(--health-heart))" fill="hsl(var(--health-heart))" fillOpacity={0.15} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Average</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={weekly}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
          <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} domain={[50, 100]} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
          <Line type="monotone" dataKey="avg" stroke="hsl(var(--health-heart))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--health-heart))" }} />
          <Line type="monotone" dataKey="max" stroke="hsl(var(--danger))" strokeWidth={1} strokeDasharray="4 4" dot={false} />
          <Line type="monotone" dataKey="min" stroke="hsl(var(--primary))" strokeWidth={1} strokeDasharray="4 4" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  </div>
);

export default HeartRatePage;
