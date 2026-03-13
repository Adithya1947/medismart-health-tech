import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";
import { Activity, Thermometer, Wind, Zap } from "lucide-react";

const insights = [
  { label: "Stress Level", value: 42, max: 100, unit: "Moderate", color: "hsl(var(--health-stress))", icon: Zap },
  { label: "Body Temp", value: 36.7, max: 42, unit: "36.7°C", color: "hsl(var(--health-temp))", icon: Thermometer },
  { label: "Breathing Rate", value: 16, max: 30, unit: "16 bpm", color: "hsl(var(--health-spo2))", icon: Wind },
  { label: "Activity Level", value: 68, max: 100, unit: "Active", color: "hsl(var(--primary))", icon: Activity },
];

const HealthInsightsPanel = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="glass-card rounded-xl p-6"
  >
    <h3 className="text-lg font-semibold text-foreground mb-4">Health Insights</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {insights.map((item) => (
        <div key={item.label} className="flex flex-col items-center text-center gap-2">
          <CircularProgress value={item.value} max={item.max} color={item.color} label={item.unit.length < 6 ? item.unit : ""} size={70} />
          <div>
            <p className="text-sm font-medium text-foreground">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.unit}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default HealthInsightsPanel;
