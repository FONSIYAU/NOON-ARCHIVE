import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'umq17wb2'
const dataset = 'production'

export default defineConfig({
  name: 'default',
  title: 'NOON Content Studio', // 客户看到的后台名字

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
