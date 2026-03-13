import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Do not show the back button on the Home (Dashboard) or SignIn pages
  if (location.pathname === "/" || location.pathname === "/dashboard") {
    return null;
  }

  const handleBack = () => {
    // Rely on React Router's internal history state index to determine if there's history
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      // Navigate to the Dashboard (Home) if no history is present (opened in new tab)
      navigate("/dashboard");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-all duration-200 min-h-[44px] min-w-[44px] rounded-lg px-2 -ml-2 text-sm font-medium hover:bg-secondary/50 group"
      aria-label="Go back"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      Back
    </button>
  );
};

export default BackButton;
