import { RouterProvider } from '@tanstack/react-router'
import { createAppRouter } from '@/app/router/index'

// Create a new router instance
const router = createAppRouter()

export default () => {
	return (
		<>
			<div id='app-container'>
				<RouterProvider router={router} />
			</div>
		</>
	);
};