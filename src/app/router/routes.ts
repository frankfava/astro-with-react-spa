import { createRootRoute, createRoute } from '@tanstack/react-router'
import About from '@/app/components/About'
import Home from '@/app/components/Index'
import NotFound from '@/app/components/NotFound'
import _Main from '@/app/components/_Main'

// Root route
export const rootRoute = createRootRoute({})

// Home route
export const appRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/app',
	component: _Main
})

export const appIndexRoute = createRoute({
	getParentRoute: () => appRoute,
	path: '/',
	component: Home,
})

// About route
export const aboutRoute = createRoute({
	getParentRoute: () => appRoute,
	path: '/about',
	component: About,
})


// Not Found route
export const notFoundRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '*',
	component: NotFound,
})

// Create and export the route tree
export const routeTree = rootRoute.addChildren([
	appRoute.addChildren([
		appIndexRoute,
		aboutRoute,
		notFoundRoute,
	]),
])