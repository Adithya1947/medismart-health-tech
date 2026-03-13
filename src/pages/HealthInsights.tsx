import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, ArrowLeft, ChevronRight, Activity, Heart, Moon, Droplets } from "lucide-react";
import HealthInsightsPanel from "@/components/dashboard/HealthInsightsPanel";

const tips = [
  { 
    id: "hydration",
    title: "Stay Hydrated", 
    desc: "Drink at least 8 glasses of water daily to maintain optimal blood pressure and oxygen levels.",
    icon: Droplets,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    fullContent: "Water makes up about 60% of your body weight and is crucial for survival. Every cell, tissue, and organ in your body needs water to work properly. Lack of water can lead to dehydration, which can drain your energy and make you tired.",
    relatedAdvice: ["Carry a reusable water bottle", "Drink water before every meal", "Flavor your water with fruit"],
    data: "Aim for 3.7 liters for men, 2.7 liters for women daily."
  },
  { 
    id: "exercise",
    title: "Regular Exercise", 
    desc: "30 minutes of moderate activity 5 days a week keeps your heart rate healthy.",
    icon: Activity,
    color: "text-green-500",
    bg: "bg-green-500/10",
    fullContent: "Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.",
    relatedAdvice: ["Start with small 10-minute walks", "Find an activity you enjoy", "Mix cardio with strength training"],
    data: "75-150 minutes of vigorous aerobic activity per week is recommended."
  },
  { 
    id: "sleep",
    title: "Quality Sleep", 
    desc: "Aim for 7-9 hours of sleep. Poor sleep affects heart rate variability and stress.",
    icon: Moon,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    fullContent: "Quality sleep – and getting enough of it at the right times – is as essential to survival as food and water. Without sleep you can't form or maintain the pathways in your brain that let you learn and create new memories, and it's harder to concentrate and respond quickly.",
    relatedAdvice: ["Maintain a consistent sleep schedule", "Create a restful environment", "Limit screen time before bed"],
    data: "Adults typically need 7-9 hours of sleep per night."
  },
  { 
    id: "stress",
    title: "Manage Stress", 
    desc: "Practice mindfulness or deep breathing. Chronic stress raises blood pressure.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/10",
    fullContent: "Stress is a natural physical and mental reaction to life experiences. While short-term stress can be beneficial, chronic stress can have serious impacts on your health, contributing to problems like high blood pressure, heart disease, obesity, and diabetes.",
    relatedAdvice: ["Try meditation or yoga", "Take regular breaks during work", "Connect with supportive friends and family"],
    data: "43% of all adults suffer adverse health effects from stress."
  },
];

const HealthInsightsPage = () => {
  const [selectedTipId, setSelectedTipId] = useState<string | null>(null);

  const selectedTip = tips.find(tip => tip.id === selectedTipId);

  return (
    <div className="space-y-6 relative min-h-[600px]">
      <AnimatePresence mode="wait">
        {!selectedTip ? (
          <motion.div
            key="list-view"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Lightbulb className="w-7 h-7 text-warning" /> Health Insights
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Personalized health metrics and recommendations.</p>
            </motion.div>

            <HealthInsightsPanel />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Health Tips for You</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tips.map((tip) => (
                  <button
                    key={tip.id}
                    onClick={() => setSelectedTipId(tip.id)}
                    className="flex items-start text-left gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all group cursor-pointer hover:shadow-md hover:-translate-y-0.5 w-full"
                  >
                    <div className={`p-3 rounded-lg ${tip.bg} shrink-0`}>
                      <tip.icon className={`w-6 h-6 ${tip.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                        {tip.title}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1 line-clamp-2">{tip.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="detail-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-xl overflow-hidden flex flex-col h-full min-h-[500px]"
          >
            <div className="p-4 border-b border-border/50 bg-secondary/30 flex items-center">
              <button 
                onClick={() => setSelectedTipId(null)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-secondary/80"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </button>
            </div>
            
            <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className={`p-4 rounded-2xl ${selectedTip.bg} shrink-0`}>
                  <selectedTip.icon className={`w-10 h-10 ${selectedTip.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedTip.title}</h2>
                  <p className="text-muted-foreground mt-1 text-sm md:text-base leading-relaxed">{selectedTip.desc}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 border-b border-border/50 pb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-warning" /> Overview
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{selectedTip.fullContent}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary/30 p-5 rounded-xl border border-border/50">
                    <h3 className="text-md font-semibold text-foreground mb-4">
                      Actionable Advice
                    </h3>
                    <ul className="space-y-3">
                      {selectedTip.relatedAdvice.map((advice, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                          <div className="mt-1.5 shrink-0 bg-primary/20 p-1 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </div>
                          <span className="leading-relaxed">{advice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/30 p-5 rounded-xl border border-border/50">
                    <h3 className="text-md font-semibold text-foreground mb-4">
                      Key Data & Metrics
                    </h3>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 shrink-0 bg-primary/20 p-2 rounded-lg text-primary">
                        <Activity className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed mt-1">
                        {selectedTip.data}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HealthInsightsPage;
