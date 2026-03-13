import { Heart, Droplets, Wind } from "lucide-react";
import HealthCard from "@/components/dashboard/HealthCard";
import HeartAnimation from "@/components/dashboard/HeartAnimation";
import HealthCharts from "@/components/dashboard/HealthCharts";
import ReadingsTable from "@/components/dashboard/ReadingsTable";
import HealthInsightsPanel from "@/components/dashboard/HealthInsightsPanel";
import AlertsSection from "@/components/dashboard/AlertsSection";
import CircularProgress from "@/components/dashboard/CircularProgress";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Health Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Monitor your vitals and health metrics in real time.</p>
      </div>

      {/* Health Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HealthCard
          title="Heart Rate"
          value="78 BPM"
          status="Normal"
          statusColor="normal"
          icon={Heart}
          iconColor="bg-health-heart/10 text-health-heart"
          path="/heart-rate"
          delay={0}
        >
          <HeartAnimation />
        </HealthCard>

        <HealthCard
          title="Blood Pressure"
          value="118 / 76"
          subtitle="Systolic: 118 · Diastolic: 76 mmHg"
          status="Normal"
          statusColor="normal"
          icon={Droplets}
          iconColor="bg-health-bp/10 text-health-bp"
          path="/blood-pressure"
          delay={0.1}
        >
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Systolic</span><span>118 mmHg</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full rounded-full bg-success" style={{ width: "65%" }} />
            </div>
          </div>
        </HealthCard>

        <HealthCard
          title="SpO₂ Level"
          value="98%"
          status="Good"
          statusColor="normal"
          icon={Wind}
          iconColor="bg-health-spo2/10 text-health-spo2"
          path="/spo2"
          delay={0.15}
        >
          <div className="mt-3 flex justify-center">
            <CircularProgress value={98} max={100} color="hsl(var(--health-spo2))" label="98%" size={56} />
          </div>
        </HealthCard>
      </div>

      {/* Charts */}
      <HealthCharts />

      {/* Readings Table */}
      <ReadingsTable />

      {/* Insights + Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HealthInsightsPanel />
        <AlertsSection />
      </div>
    </div>
  );
};

export default Dashboard;
