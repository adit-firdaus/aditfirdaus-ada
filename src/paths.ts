/** Official marks live in public/logo as 256px squares. */
export const logoUrl = (name: string) => `${import.meta.env.BASE_URL}logo/${name}.png`
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
