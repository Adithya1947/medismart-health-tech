import { motion } from "framer-motion";
import { FileText, Download, Heart, Droplets, Wind } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { weeklyHeartRate, weeklyBP, spo2Weekly } from "@/lib/healthData";

const Reports = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <FileText className="w-7 h-7 text-primary" /> Health Reports
      </h1>
      <p className="text-muted-foreground text-sm mt-1">View and export your health data summaries.</p>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Weekly Summary</h3>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
          <Download className="w-4 h-4" /> Export PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Heart Rate", icon: Heart, color: "text-health-heart", data: weeklyHeartRate, key: "value" },
          { title: "Systolic BP", icon: Droplets, color: "text-health-bp", data: weeklyBP, key: "systolic" },
          { title: "SpO₂", icon: Wind, color: "text-health-spo2", data: spo2Weekly, key: "value" },
        ].map((item, i) => (
          <div key={item.title} className="space-y-3">
            <div className="flex items-center gap-2">
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <p className="text-sm font-medium text-foreground">{item.title}</p>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={item.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis hide />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} />
                <Line type="monotone" dataKey={item.key} stroke="currentColor" className={item.color} strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Historical Records</h3>
      <div className="space-y-3">
        {["March 2026", "February 2026", "January 2026"].map((month) => (
          <div key={month} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{month} Report</p>
                <p className="text-xs text-muted-foreground">Monthly health summary</p>
              </div>
            </div>
            <Download className="w-4 h-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Reports;
