import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface HealthCardProps {
  title: string;
  value: string;
  subtitle?: string;
  status: string;
  statusColor: "normal" | "warning" | "danger";
  icon: LucideIcon;
  iconColor: string;
  path: string;
  children?: React.ReactNode;
  delay?: number;
}

const statusClasses = {
  normal: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
};

const HealthCard = ({ title, value, subtitle, status, statusColor, icon: Icon, iconColor, path, children, delay = 0 }: HealthCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => navigate(path)}
      className="glass-card rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusClasses[statusColor]}`}>
          {status}
        </span>
      </div>
      <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
      <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      {children}
    </motion.div>
  );
};

export default HealthCard;
