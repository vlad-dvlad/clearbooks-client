import { defineConfig, loadEnv } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { nitro } from 'nitro/vite'


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        server: {
            port: parseInt(env.VITE_PORT)
        },
        plugins: [
            tsconfigPaths(),
            tanstackStart(),
            viteReact(),
            nitro()
        ],
    }
})