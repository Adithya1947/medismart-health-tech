import { motion } from "framer-motion";
import { User, Phone, Mail, Calendar, Ruler, Weight } from "lucide-react";

const Profile = () => (
  <div className="space-y-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <User className="w-7 h-7 text-primary" /> Patient Profile
      </h1>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <User className="w-10 h-10 text-primary" />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: User, label: "Full Name", value: "Sarah Johnson" },
            { icon: Calendar, label: "Age", value: "32 years" },
            { icon: Ruler, label: "Height", value: "168 cm" },
            { icon: Weight, label: "Weight", value: "62 kg" },
            { icon: Mail, label: "Email", value: "sarah.johnson@email.com" },
            { icon: Phone, label: "Emergency Contact", value: "+1 (555) 123-4567" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Medical History</h3>
      <div className="space-y-3">
        {[
          { condition: "Mild Hypertension", date: "Diagnosed 2024", status: "Managed" },
          { condition: "Seasonal Allergies", date: "Ongoing", status: "Active" },
        ].map((item) => (
          <div key={item.condition} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div>
              <p className="text-sm font-medium text-foreground">{item.condition}</p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">{item.status}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Profile;
