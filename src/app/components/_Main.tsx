import { createRootRoute, createRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export default function _Main() {
	return (
		<>
			<header>Main Layout Header</header>
			<div className="p-2 flex gap-2">
				<Link to="/app" className="[&.active]:font-bold">
					Home
				</Link>{' '}
				<Link to="/app/about" className="[&.active]:font-bold">
					About
				</Link>{' '}
			</div>
			<hr />
			<Outlet />
			<footer>Main Layout Footer</footer>
			<TanStackRouterDevtools />
		</>
	)
}