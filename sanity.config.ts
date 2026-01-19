import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'umq17wb2'
const dataset = 'production'

export default defineConfig({
  name: 'default',
  title: 'NOON Content Studio',

  projectId,
  dataset,

  plugins: [structureTool()],

  // 关键修复：告诉 Studio 它住在哪里
  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
