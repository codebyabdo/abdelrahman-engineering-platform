"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { PROJECTS } from "@/lib/constants/featured-projects-data";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ProjectDetailDialog } from "@/components/dialogs/project-detail-dialog";
import { ResumeDialog } from "@/components/dialogs/resume-dialog";

interface ProjectDialogContextValue {
  openProject: (projectId: string) => void;
  closeProject: () => void;
  openResume: () => void;
  closeResume: () => void;
}

interface DialogProviderProps {
  children: ReactNode;
}

const DialogContext = createContext<ProjectDialogContextValue | null>(null);

export function DialogProvider({ children }: DialogProviderProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const selectedProject = useMemo(
    () => PROJECTS.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId]
  );

  const openProject = useCallback((projectId: string) => {
    setSelectedProjectId(projectId);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  const openResume = useCallback(() => {
    setResumeOpen(true);
  }, []);

  const closeResume = useCallback(() => {
    setResumeOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openProject, closeProject, openResume, closeResume }),
    [openProject, closeProject, openResume, closeResume]
  );

  return (
    <DialogContext.Provider value={value}>
      {children}

      {/* Project Dialog */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => !open && closeProject()}
      >
        {selectedProject && (
          <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-black/95 backdrop-blur-sm sm:max-w-4xl">
            <DialogHeader className="border-b border-white/10 pb-4">
              <DialogTitle className="text-2xl font-semibold text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-white/55">
                {selectedProject.subtitle}
              </DialogDescription>
            </DialogHeader>
            <ProjectDetailDialog project={selectedProject} />
          </DialogContent>
        )}
      </Dialog>

      {/* Resume Dialog */}
      <Dialog
        open={resumeOpen}
        onOpenChange={(open) => !open && closeResume()}
      >
        {resumeOpen && (
          <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-black/95 backdrop-blur-sm sm:max-w-4xl">
            <DialogHeader className="border-b border-white/10 pb-4">
              <DialogTitle className="text-2xl font-semibold text-white">
                Resume
              </DialogTitle>
              <DialogDescription className="text-sm text-white/55">
                Abd El-Rahman Adel — Frontend Engineer
              </DialogDescription>
            </DialogHeader>
            <ResumeDialog />
          </DialogContent>
        )}
      </Dialog>
    </DialogContext.Provider>
  );
}

export function useDialogs() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useProjectDialogs must be used inside ProjectDialogProvider");
  }
  return context;
}