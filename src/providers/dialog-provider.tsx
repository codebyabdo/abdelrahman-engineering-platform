"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ProjectDetailDialog } from "@/components/dialogs/project-detail-dialog";
import { ResumeDialog } from "@/components/dialogs/resume-dialog";
import { BlogDetailDialog } from "@/components/dialogs/blog-detail-dialog";

import { PROJECTS } from "@/lib/constants/featured-projects-data";

import type { Article } from "@/types/blog";
import { ARTICLES } from "@/lib/constants/blog-content";
import { ProjectCaseStudy } from "@/types/featured-projects-data";

interface DialogContextValue {
  openProject: (projectId: string) => void;
  closeProject: () => void;

  openArticle: (articleId: string) => void;
  closeArticle: () => void;

  openResume: () => void;
  closeResume: () => void;
}

interface DialogProviderProps {
  children: ReactNode;
}

const DialogContext = createContext<DialogContextValue | null>(null);

export function DialogProvider({ children }: DialogProviderProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    null,
  );

  const [resumeOpen, setResumeOpen] = useState(false);

  /*
   * ============================================================
   * Project
   * ============================================================
   */

  const selectedProject = useMemo(
    () => PROJECTS.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId],
  );

  const selectedProjectIndex = useMemo(
    () => PROJECTS.findIndex((project) => project.id === selectedProjectId),
    [selectedProjectId],
  );

  const previousProject = useMemo<ProjectCaseStudy | null>(() => {
    if (selectedProjectIndex <= 0) {
      return null;
    }

    return PROJECTS[selectedProjectIndex - 1] ?? null;
  }, [selectedProjectIndex]);

  const nextProject = useMemo<ProjectCaseStudy | null>(() => {
    if (
      selectedProjectIndex === -1 ||
      selectedProjectIndex >= PROJECTS.length - 1
    ) {
      return null;
    }

    return PROJECTS[selectedProjectIndex + 1] ?? null;
  }, [selectedProjectIndex]);

  const openProject = useCallback((projectId: string) => {
    setSelectedArticleId(null);
    setResumeOpen(false);
    setSelectedProjectId(projectId);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  const openPreviousProject = useCallback(() => {
    if (!previousProject) return;

    setSelectedProjectId(previousProject.id);
  }, [previousProject]);

  const openNextProject = useCallback(() => {
    if (!nextProject) return;

    setSelectedProjectId(nextProject.id);
  }, [nextProject]);

  /*
   * ============================================================
   * Blog
   * ============================================================
   */

  const selectedArticle = useMemo(
    () => ARTICLES.find((article) => article.id === selectedArticleId) ?? null,
    [selectedArticleId],
  );

  const selectedArticleIndex = useMemo(
    () => ARTICLES.findIndex((article) => article.id === selectedArticleId),
    [selectedArticleId],
  );

  const previousArticle = useMemo<Article | null>(() => {
    if (selectedArticleIndex <= 0) {
      return null;
    }

    return ARTICLES[selectedArticleIndex - 1] ?? null;
  }, [selectedArticleIndex]);

  const nextArticle = useMemo<Article | null>(() => {
    if (
      selectedArticleIndex === -1 ||
      selectedArticleIndex >= ARTICLES.length - 1
    ) {
      return null;
    }

    return ARTICLES[selectedArticleIndex + 1] ?? null;
  }, [selectedArticleIndex]);

  const openArticle = useCallback((articleId: string) => {
    setSelectedProjectId(null);
    setResumeOpen(false);
    setSelectedArticleId(articleId);
  }, []);

  const closeArticle = useCallback(() => {
    setSelectedArticleId(null);
  }, []);

  const openPreviousArticle = useCallback(() => {
    if (!previousArticle) return;

    setSelectedArticleId(previousArticle.id);
  }, [previousArticle]);

  const openNextArticle = useCallback(() => {
    if (!nextArticle) return;

    setSelectedArticleId(nextArticle.id);
  }, [nextArticle]);

  /*
   * ============================================================
   * Resume
   * ============================================================
   */

  const openResume = useCallback(() => {
    setSelectedProjectId(null);
    setSelectedArticleId(null);
    setResumeOpen(true);
  }, []);

  const closeResume = useCallback(() => {
    setResumeOpen(false);
  }, []);

  /*
   * ============================================================
   * Context
   * ============================================================
   */

  const value = useMemo(
    () => ({
      openProject,
      closeProject,
      openArticle,
      closeArticle,
      openResume,
      closeResume,
    }),
    [
      openProject,
      closeProject,
      openArticle,
      closeArticle,
      openResume,
      closeResume,
    ],
  );

  return (
    <DialogContext.Provider value={value}>
      {children}

      {/* ========================================================
          Project Dialog
      ========================================================= */}

      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) {
            closeProject();
          }
        }}
      >
        {selectedProject && (
          <DialogContent
          showCloseButton={false}
          className="max-h-[92vh] overflow-y-auto border-white/10 bg-black/95 p-0 backdrop-blur-xl sm:max-w-5xl">
            <DialogHeader className="sr-only">
              <DialogTitle>{selectedProject.title}</DialogTitle>

              <DialogDescription>{selectedProject.subtitle}</DialogDescription>
            </DialogHeader>

            <ProjectDetailDialog
              project={selectedProject}
              previousProject={previousProject ?? undefined}
              nextProject={nextProject ?? undefined}
              onPrevious={openPreviousProject}
              onNext={openNextProject}
              onClose={closeProject}
            />
          </DialogContent>
        )}
      </Dialog>

      {/* ========================================================
          Blog Dialog
      ========================================================= */}

      <Dialog
        open={selectedArticle !== null}
        onOpenChange={(open) => {
          if (!open) {
            closeArticle();
          }
        }}
      >
        {selectedArticle && (
          <DialogContent
            showCloseButton={false}
            className="max-h-[92vh] overflow-hidden border-white/10 bg-[#080808] p-0 shadow-[0_0_80px_rgba(0,0,0,0.7)] sm:max-w-5xl"
          >
            <DialogHeader className="sr-only">
              <DialogTitle>{selectedArticle.title}</DialogTitle>

              <DialogDescription>
                {selectedArticle.category} · {selectedArticle.readTime}
              </DialogDescription>
            </DialogHeader>

            <div className="max-h-[92vh] overflow-y-auto no-scrollbar">
              <BlogDetailDialog
                article={selectedArticle}
                previousArticle={previousArticle ?? undefined}
                nextArticle={nextArticle ?? undefined}
                onPrevious={openPreviousArticle}
                onNext={openNextArticle}
                onClose={closeArticle}
              />
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* ========================================================
          Resume Dialog
      ========================================================= */}

      <Dialog
        open={resumeOpen}
        onOpenChange={(open) => {
          if (!open) {
            closeResume();
          }
        }}
      >
        {resumeOpen && (
          <DialogContent className="max-h-[92vh] overflow-y-auto border-white/10 bg-black/95 backdrop-blur-xl sm:max-w-4xl">
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
    throw new Error("useDialogs must be used inside DialogProvider");
  }

  return context;
}
