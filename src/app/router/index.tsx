import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routes'

export function createAppRouter() {
	return createRouter({ routeTree })
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createAppRouter>
	}
}