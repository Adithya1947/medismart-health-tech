import { motion } from "framer-motion";
import { Wind, AlertTriangle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { spo2Weekly } from "@/lib/healthData";
import CircularProgress from "@/components/dashboard/CircularProgress";

const hourly = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  value: 95 + Math.round(Math.random() * 4),
}));

const SpO2Page = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Wind className="w-7 h-7 text-health-spo2" /> Oxygen Saturation Insights
      </h1>
      <p className="text-muted-foreground text-sm mt-1">Monitor your blood oxygen levels and respiratory health.</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6 flex flex-col items-center">
        <p className="text-sm text-muted-foreground mb-3">Current SpO₂</p>
        <CircularProgress value={98} max={100} color="hsl(var(--health-spo2))" label="98%" size={100} strokeWidth={8} />
        <p className="text-xs text-success font-medium mt-3">Good</p>
      </motion.div>
      {[
        { label: "Weekly Avg", value: "97.7%", sub: "Within normal range" },
        { label: "Lowest", value: "96%", sub: "Friday 3:00 AM" },
      ].map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (i + 1) }} className="glass-card rounded-xl p-6 text-center flex flex-col justify-center">
          <p className="text-sm text-muted-foreground">{s.label}</p>
          <p className="text-3xl font-bold text-foreground mt-1">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
        </motion.div>
      ))}
    </div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Weekly SpO₂ Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={spo2Weekly}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
          <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} domain={[90, 100]} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
          <Line type="monotone" dataKey="value" stroke="hsl(var(--health-spo2))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--health-spo2))" }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">24-Hour Monitoring</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={hourly}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="hour" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} interval={3} />
          <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} domain={[90, 100]} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
          <Area type="monotone" dataKey="value" stroke="hsl(var(--health-spo2))" fill="hsl(var(--health-spo2))" fillOpacity={0.15} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-3">Oxygen Level Ranges</h3>
      <div className="space-y-2">
        {[
          { range: "95–100%", label: "Normal", color: "bg-success" },
          { range: "90–94%", label: "Low – Seek attention", color: "bg-warning" },
          { range: "Below 90%", label: "Critical – Emergency", color: "bg-danger" },
        ].map((r) => (
          <div key={r.range} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <div className={`w-3 h-3 rounded-full ${r.color}`} />
            <p className="text-sm text-foreground font-medium">{r.range}</p>
            <p className="text-xs text-muted-foreground">– {r.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default SpO2Page;
