'use client'

import { FadeUp } from '@/components/animations/motion'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    const lines = text.trim().split('\n')
    const elements: React.ReactNode[] = []
    let currentParagraph: string[] = []
    let inCodeBlock = false
    let codeContent: string[] = []

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim()
        if (text) {
          elements.push(
            <p key={elements.length} className="text-muted-foreground leading-relaxed">
              {text}
            </p>
          )
        }
        currentParagraph = []
      }
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      // Code block
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={elements.length} className="bg-secondary/50 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-foreground font-mono">
                {codeContent.join('\n')}
              </code>
            </pre>
          )
          codeContent = []
          inCodeBlock = false
        } else {
          flushParagraph()
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        codeContent.push(line)
        return
      }

      // Headers
      if (trimmedLine.startsWith('## ')) {
        flushParagraph()
        elements.push(
          <h2 key={elements.length} className="font-heading font-semibold text-xl lg:text-2xl mt-12 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        )
        return
      }

      if (trimmedLine.startsWith('# ')) {
        // Skip main title as it's in the header
        return
      }

      // List items
      if (trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\./)) {
        flushParagraph()
        elements.push(
          <li key={elements.length} className="text-muted-foreground ml-4 mb-2">
            {trimmedLine.replace(/^[-\d.]+\s*/, '')}
          </li>
        )
        return
      }

      // Empty line
      if (!trimmedLine) {
        flushParagraph()
        return
      }

      // Regular text
      currentParagraph.push(trimmedLine)
    })

    flushParagraph()

    return elements
  }

  return (
    <FadeUp>
      <div className="prose-custom space-y-4">
        {renderContent(content)}
      </div>
    </FadeUp>
  )
}
