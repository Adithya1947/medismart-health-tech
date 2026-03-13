import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { weeklyBP } from "@/lib/healthData";

const ranges = [
  { label: "Normal", range: "< 120/80", color: "bg-success" },
  { label: "Elevated", range: "120-129/<80", color: "bg-warning" },
  { label: "High Stage 1", range: "130-139/80-89", color: "bg-danger/70" },
  { label: "High Stage 2", range: "≥ 140/≥ 90", color: "bg-danger" },
];

const BloodPressurePage = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Droplets className="w-7 h-7 text-health-bp" /> Blood Pressure Analysis
      </h1>
      <p className="text-muted-foreground text-sm mt-1">Track your systolic and diastolic pressure.</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: "Current", value: "118/76 mmHg", sub: "Normal" },
        { label: "Avg Systolic", value: "120 mmHg", sub: "7-day average" },
        { label: "Avg Diastolic", value: "78 mmHg", sub: "7-day average" },
      ].map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 text-center">
          <p className="text-sm text-muted-foreground">{s.label}</p>
          <p className="text-3xl font-bold text-foreground mt-1">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
        </motion.div>
      ))}
    </div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Systolic vs Diastolic</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weeklyBP}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
          <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} domain={[60, 140]} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
          <Line type="monotone" dataKey="systolic" stroke="hsl(var(--health-bp))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--health-bp))" }} name="Systolic" />
          <Line type="monotone" dataKey="diastolic" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} name="Diastolic" />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">BP Health Ranges</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ranges.map((r) => (
          <div key={r.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <div className={`w-3 h-3 rounded-full ${r.color}`} />
            <div>
              <p className="text-sm font-medium text-foreground">{r.label}</p>
              <p className="text-xs text-muted-foreground">{r.range}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default BloodPressurePage;
