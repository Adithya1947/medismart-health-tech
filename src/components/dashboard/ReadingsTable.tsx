import { motion } from "framer-motion";
import { recentReadings } from "@/lib/healthData";

const statusBadge = (status: string) => {
  const cls = status === "Normal"
    ? "bg-success/10 text-success"
    : status === "Elevated"
    ? "bg-warning/10 text-warning"
    : "bg-danger/10 text-danger";
  return <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cls}`}>{status}</span>;
};

const ReadingsTable = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="glass-card rounded-xl p-6"
  >
    <h3 className="text-lg font-semibold text-foreground mb-4">Recent Readings</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-2 text-muted-foreground font-medium">Time</th>
            <th className="text-left py-3 px-2 text-muted-foreground font-medium">Heart Rate</th>
            <th className="text-left py-3 px-2 text-muted-foreground font-medium">Blood Pressure</th>
            <th className="text-left py-3 px-2 text-muted-foreground font-medium">SpO₂</th>
            <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentReadings.map((r, i) => (
            <tr key={i} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
              <td className="py-3 px-2 text-foreground">{r.time}</td>
              <td className="py-3 px-2 text-foreground">{r.hr} BPM</td>
              <td className="py-3 px-2 text-foreground">{r.bp} mmHg</td>
              <td className="py-3 px-2 text-foreground">{r.spo2}%</td>
              <td className="py-3 px-2">{statusBadge(r.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default ReadingsTable;
