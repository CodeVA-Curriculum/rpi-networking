import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkParse from 'remark-parse'

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },
  layout: {
    _: './src/lib/components/MdLayout.svelte',
    //location: './src/lib/components/Standalone.svelte',
    //trail: './src/lib/components/Trail.svelte'
  },

  remarkPlugins: [remarkParse],
  rehypePlugins: [],
});

export default config;
