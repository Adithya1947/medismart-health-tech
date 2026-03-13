import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AlertButton = () => {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    toast.error("Emergency Alert Activated!", {
      description: "Emergency contacts and local services have been notified.",
      duration: 5000,
    });
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0px 0px 0px 0px rgba(239, 68, 68, 0.6)",
                "0px 0px 0px 20px rgba(239, 68, 68, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-destructive text-destructive-foreground shadow-xl hover:bg-destructive/90 transition-colors focus:outline-none focus:ring-4 focus:ring-destructive/50"
            aria-label="Emergency Alert"
          >
            <AlertTriangle className="w-6 h-6 md:w-7 md:h-7" />
          </motion.button>
        </AlertDialogTrigger>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-destructive flex items-center gap-2 text-xl">
              <AlertTriangle className="w-6 h-6" />
              Trigger Emergency SOS?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-foreground/80 mt-2">
              This action will immediately notify your designated emergency contacts and share your current location and vital signs.
              <br/><br/>
              <strong>Are you sure you want to proceed?</strong>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel className="font-medium">Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-medium"
              onClick={handleConfirm}
            >
              Trigger SOS Alert
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertButton;
