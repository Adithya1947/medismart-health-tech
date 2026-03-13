import { motion } from "framer-motion";
import { CheckCircle2, Shield } from "lucide-react";

const AlertsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="glass-card rounded-xl p-6"
  >
    <h3 className="text-lg font-semibold text-foreground mb-4">Alerts</h3>
    <div className="flex items-center gap-3 p-4 rounded-lg bg-success/5 border border-success/20">
      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
      <div>
        <p className="text-sm font-medium text-foreground">No Alerts</p>
        <p className="text-xs text-muted-foreground">All readings are within normal range. Keep up the good work!</p>
      </div>
      <Shield className="w-5 h-5 text-success/50 ml-auto flex-shrink-0" />
    </div>
  </motion.div>
);

export default AlertsSection;
