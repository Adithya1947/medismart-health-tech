import { motion } from "framer-motion";
import { Settings as SettingsIcon, Moon, Bell, Globe, Shield, Trash2 } from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <SettingsIcon className="w-7 h-7 text-primary" /> Settings
        </h1>
      </motion.div>

      <div className="space-y-4">
        {[
          {
            icon: Moon, label: "Dark Mode", desc: "Toggle dark theme",
            action: <button onClick={toggleDark} className={`w-12 h-6 rounded-full transition-colors ${darkMode ? "bg-primary" : "bg-border"} relative`}>
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow transition-transform ${darkMode ? "left-6" : "left-0.5"}`} />
            </button>,
          },
          {
            icon: Bell, label: "Notifications", desc: "Enable push notifications",
            action: <button onClick={() => setNotifications(!notifications)} className={`w-12 h-6 rounded-full transition-colors ${notifications ? "bg-primary" : "bg-border"} relative`}>
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow transition-transform ${notifications ? "left-6" : "left-0.5"}`} />
            </button>,
          },
          { icon: Globe, label: "Language", desc: "English (US)", action: <span className="text-sm text-muted-foreground">English</span> },
          { icon: Shield, label: "Security", desc: "Manage password and 2FA", action: <button className="text-sm text-primary font-medium">Manage</button> },
          { icon: Trash2, label: "Delete Account", desc: "Permanently delete your account", action: <button className="text-sm text-destructive font-medium">Delete</button> },
        ].map((item, i) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
            {item.action}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
