/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SERVER_PATH: string;
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}