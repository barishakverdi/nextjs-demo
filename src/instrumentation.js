export async function register() {
  // Node 25 exposes a global localStorage without Web Storage methods
  // unless --localstorage-file points at a real file. Next.js 15 dev
  // tools only check `typeof localStorage !== "undefined"`, then call
  // getItem during SSR and crash the page with a 500.
  const storage = globalThis.localStorage
  if (storage != null && typeof storage.getItem !== "function") {
    delete globalThis.localStorage
  }
}
