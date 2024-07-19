import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'your-api-key',
    dataset: 'production'
  }
})
