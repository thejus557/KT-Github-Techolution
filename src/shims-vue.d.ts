declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>

  export default component
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ComponentCustomProperties } from 'vue'
import { TextFormat } from './components/CustomPlugin/TextTransformerPlugin' // Adjust the path as needed

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formatText: (text: string, format?: TextFormat) => string
  }
}
