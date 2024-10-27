import type { App } from 'vue'

// Define available format options
type TextFormat = 'uppercase' | 'lowercase' | 'titleCase' | 'capitalizeFirst'

interface TextFormatterOptions {
  defaultFormat?: TextFormat
}

declare module 'vue/types/vue' {
  interface Vue {
    $formatText: (text: string, format?: TextFormat) => string
  }
}

const TextFormatterPlugin = {
  install(app: App, options: TextFormatterOptions = {}) {
    const defaultFormat: TextFormat | undefined = options.defaultFormat

    // Utility functions for different formatting styles
    const formatters: Record<TextFormat, (text: string) => string> = {
      uppercase: (text: string) => text.toUpperCase(),
      lowercase: (text: string) => text.toLowerCase(),
      titleCase: (text: string) =>
        text.replace(
          /\w\S*/g,
          word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
        ),
      capitalizeFirst: (text: string) =>
        text.charAt(0).toUpperCase() + text.slice(1),
    }

    // Helper function to apply the default format if no format is provided
    app.config.globalProperties.$formatText = function (
      text: string,
      format: TextFormat = defaultFormat || 'uppercase',
    ): string {
      if (!text) return ''
      const formatter = formatters[format]
      return formatter ? formatter(text) : text
    }
  },
}

export default TextFormatterPlugin

export type { TextFormat }
