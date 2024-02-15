import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base:'/React-Portfolio/'
  //Comment the base above and uncomment the base below for 'npm run dev' on local browser
  //base:'/'
})
