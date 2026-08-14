"use client";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Share2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import type { Article } from "@/types/blog";
import { Button } from "../ui/button";

interface BlogDetailDialogProps {
  article: Article;
  previousArticle?: Article;
  nextArticle?: Article;
  onPrevious?: () => void;
  onNext?: () => void;
  onClose: () => void;
}

export function BlogDetailDialog({
  article,
  previousArticle,
  nextArticle,
  onPrevious,
  onNext,
  onClose,
}: BlogDetailDialogProps) {
  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url,
        });

        return;
      }

      await navigator.clipboard?.writeText(url);
    } catch {
      // User cancelled share or clipboard is unavailable.
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={article.id}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -24 }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="min-h-full"
      >
        {/* =========================================================
            Header
        ========================================================= */}

        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex min-h-16 items-center justify-between gap-4 px-5 sm:px-8">
            <Button
              type="button"
              onClick={onClose}
              className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/45 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

              <span className="hidden sm:inline">Back to Articles</span>
            </Button>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                onClick={handleShare}
                aria-label="Share article"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white/50 transition-all hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400"
              >
                <Share2 className="h-4 w-4" />
              </Button>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        {/* =========================================================
            Article
        ========================================================= */}

        <article className="px-5 py-8 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-4xl">
            {/* Metadata */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <span className="rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-blue-400">
                {article.category}
              </span>

              <span className="text-[10px] font-mono text-white/30">
                {article.readTime}
              </span>

              <span className="text-white/15">•</span>

              <span className="text-[10px] font-mono text-white/30">
                Published {article.publishedAt}
              </span>
            </motion.div>

            {/* Title */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.45,
              }}
              className="space-y-5"
            >
              <h1 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {article.title}
              </h1>

              <p className="max-w-3xl text-sm leading-7 text-white/55 sm:text-base">
                {article.excerpt}
              </p>
            </motion.div>

            {/* Tags */}

            {article.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/5 bg-white/3 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-blue-300/70"
                  >
                    #{tag}
                  </span>
                ))}
              </motion.div>
            )}

            <div className="my-8 h-px bg-white/10" />

            {/* =====================================================
                Content
            ===================================================== */}

            <BlogArticleContent content={article.content} />

            {/* =====================================================
                Navigation
            ===================================================== */}

            <div className="mt-14 border-t border-white/10 pt-8">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5 text-blue-400" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Explore Articles
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {previousArticle ? (
                  <Button
                    type="button"
                    onClick={onPrevious}
                    className="group rounded-xl border border-white/10 bg-white/2 p-4 text-left transition-all hover:border-blue-500/40 hover:bg-blue-600/4"
                  >
                    <div className="mb-3 flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-white/30">
                      <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                      Previous Article
                    </div>

                    <div className="text-sm font-bold text-white transition-colors group-hover:text-blue-400">
                      {previousArticle.title}
                    </div>
                  </Button>
                ) : (
                  <div />
                )}

                {nextArticle && (
                  <Button
                    type="button"
                    onClick={onNext}
                    className="group rounded-xl border border-white/10 bg-white/2 p-4 text-right transition-all hover:border-blue-500/40 hover:bg-blue-600/4"
                  >
                    <div className="mb-3 flex items-center justify-end gap-2 text-[9px] font-mono uppercase tracking-widest text-white/30">
                      Next Article
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>

                    <div className="text-sm font-bold text-white transition-colors group-hover:text-blue-400">
                      {nextArticle.title}
                    </div>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </article>
      </motion.div>
    </AnimatePresence>
  );
}

/* ===============================================================
   Markdown-like Article Renderer
   No react-markdown dependency
================================================================ */

function BlogArticleContent({ content }: { content: string }) {
  const blocks = parseMarkdownBlocks(content);

  return (
    <div className="space-y-8">
      {blocks.map((block, index) => (
        <motion.div
          key={`${block.type}-${index}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15 + index * 0.025,
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {block.type === "heading" && (
            <h2
              className={`
                font-black tracking-tight text-white
                ${
                  block.level === 1
                    ? "text-3xl sm:text-4xl"
                    : block.level === 2
                      ? "text-xl sm:text-2xl"
                      : "text-lg sm:text-xl"
                }
              `}
            >
              {renderInlineMarkdown(block.content)}
            </h2>
          )}

          {block.type === "paragraph" && (
            <p className="text-sm leading-8 text-white/65 sm:text-base">
              {renderInlineMarkdown(block.content)}
            </p>
          )}

          {block.type === "list" && (
            <ul className="space-y-3 pl-5 text-sm leading-7 text-white/65 sm:text-base">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="relative pl-2 before:absolute before:-left-4 before:top-[0.75em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-500"
                >
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ul>
          )}

          {block.type === "code" && (
            <CodeBlock
              language={block.language}
              title={block.title}
              content={block.content}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ===============================================================
   Code Block
================================================================ */

function CodeBlock({
  language,
  title,
  content,
}: {
  language?: string;
  title?: string;
  content: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/2 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />

          {title && (
            <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-white/35">
              {title}
            </span>
          )}
        </div>

        {language && (
          <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400/70">
            {language}
          </span>
        )}
      </div>

      <pre className="overflow-x-auto p-5 text-[12px] leading-6 text-white/75 sm:text-[13px]">
        <code>{content.trim()}</code>
      </pre>
    </div>
  );
}

/* ===============================================================
   Markdown Parser
================================================================ */

type ContentBlock =
  | {
      type: "heading";
      level: number;
      content: string;
    }
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "code";
      language?: string;
      title?: string;
      content: string;
    };

function parseMarkdownBlocks(content: string): ContentBlock[] {
  const lines = content.replace(/\r\n/g, "\n").split("\n");

  const blocks: ContentBlock[] = [];

  let paragraph: string[] = [];
  let listItems: string[] = [];

  let insideCode = false;
  let codeLanguage: string | undefined;
  let codeTitle: string | undefined;
  let codeLines: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;

    const value = paragraph.join(" ").trim();

    if (value) {
      blocks.push({
        type: "paragraph",
        content: value,
      });
    }

    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;

    blocks.push({
      type: "list",
      items: [...listItems],
    });

    listItems = [];
  };

  const flushCode = () => {
    if (!codeLines.length) return;

    blocks.push({
      type: "code",
      language: codeLanguage,
      title: codeTitle,
      content: codeLines.join("\n"),
    });

    codeLanguage = undefined;
    codeTitle = undefined;
    codeLines = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    /* Code block */

    if (line.startsWith("```")) {
      if (insideCode) {
        flushCode();
        insideCode = false;
      } else {
        flushParagraph();
        flushList();

        insideCode = true;
        codeLanguage = line.slice(3).trim() || undefined;

        const nextLine = lines[i + 1]?.trim();

        if (
          nextLine &&
          !nextLine.startsWith("```") &&
          nextLine.length < 100 &&
          !nextLine.includes(" ")
        ) {
          codeTitle = undefined;
        }
      }

      continue;
    }

    if (insideCode) {
      codeLines.push(rawLine);
      continue;
    }

    /* Empty line */

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    /* Heading */

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);

    if (headingMatch) {
      flushParagraph();
      flushList();

      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        content: headingMatch[2],
      });

      continue;
    }

    /* Unordered list */

    const unorderedMatch = line.match(/^[-*]\s+(.+)$/);

    if (unorderedMatch) {
      flushParagraph();

      listItems.push(unorderedMatch[1]);

      continue;
    }

    /* Ordered list */

    const orderedMatch = line.match(/^\d+\.\s+(.+)$/);

    if (orderedMatch) {
      flushParagraph();

      listItems.push(orderedMatch[1]);

      continue;
    }

    /* Normal paragraph */

    flushList();

    paragraph.push(line);
  }

  if (insideCode) {
    flushCode();
  }

  flushParagraph();
  flushList();

  return blocks;
}

/* ===============================================================
   Inline Markdown
================================================================ */

function renderInlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded-md border border-white/10 bg-white/6 px-1.5 py-0.5 font-mono text-[0.85em] text-blue-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={index} className="italic text-white/80">
          {part.slice(1, -1)}
        </em>
      );
    }

    return <span key={index}>{part}</span>;
  });
}
