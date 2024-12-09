### Project Title: Admin Dashboard with Dynamic Route Highlighting

#### Description:
This project is a feature-rich **Admin Dashboard**- web application built using **React.js** and **React Router**. It is designed to provide an intuitive interface for managing users, roles, and permissions, while also demonstrating how to highlight the currently active page dynamically in the sidebar for better user navigation. The dashboard consists of multiple pages (Dashboard, Users, Roles, Permissions) and a `NotFound` page for handling invalid routes.

The key highlight of this project is the **dynamic route highlighting**, implemented using React Router’s `useLocation` hook. The active page is visually distinguished in the sidebar with a strong color and bold styling, ensuring seamless navigation for users.

---

#### Flow of the Project:

1. Application Initialization:
   - The app starts with the `App` component, which defines the layout of the application.
   - A sidebar is always present on the left, while the content of the page changes dynamically based on the selected route.

2. Routing and Navigation:
   - The `App` component utilizes **React Router**'s `Routes` and `Route` components to map different URLs to corresponding pages.
   - The `useLocation` hook is used to track the current URL path, which is passed to the `Sidebar` component to dynamically highlight the active link.

3. Sidebar Functionality:
   - The `Sidebar` displays navigation links for the following pages:
     - **Dashboard**: Home screen displaying an overview of key metrics.
     - **Users**: Page for managing user information.
     - **Roles**: Page for defining and managing user roles.
     - **Permissions**: Page for managing user access permissions.
   - The active link is highlighted using conditional styling based on the current route, making it easy for users to identify the current page.

4. Page Components:
   - Each route corresponds to a unique page component:
     - `Dashboard`: Displays metrics or widgets relevant to the application.
     - `Users`: Includes user management functionality (e.g., list, add, edit users).
     - `Roles`: Manages role creation and editing.
     - `Permissions`: Allows administrators to assign or revoke permissions.
     - `NotFound`: Handles invalid or unmatched routes gracefully with an error message.

5. Styling and Responsiveness:
   - The sidebar is styled with a strong color scheme (dark background and white text).
   - Active links are styled with a **bold font**, a **highlighted background color**, and a **hover effect** for better UX.
   - The layout ensures responsiveness, adapting to different screen sizes.

---

#### Technology Stack:
1. Frontend: 
   - React.js
   - React Router (for routing)
   - CSS (for styling)

2. Other Tools/Packages:
   - Vite or Create React App (for project setup)
   - Tailwind CSS or plain CSS for styling (optional)

---

#### Features:
1. Dynamic Sidebar Highlighting:
   - Tracks the current route and dynamically updates the sidebar to highlight the active page.

2. Centralized Routing:
   - All routing logic is handled in the `App` component for consistency and reusability.

3. Seamless Navigation:
   - Links in the sidebar navigate to respective pages without reloading the application, enhancing performance and UX.

4. 404 Page Handling:
   - Displays a `NotFound` component for invalid URLs, ensuring user-friendly error handling.

5. Responsive Design:
   - Optimized for various screen sizes, ensuring usability on both desktop and mobile devices.

---

#### Flow Diagram:

1. User Interaction:
   - User clicks a link in the sidebar.
   - The corresponding route is matched in the `Routes` component.

2. Routing Process:
   - `App` component handles route matching and renders the correct page.
   - The `useLocation` hook identifies the current path and passes it to the `Sidebar`.

3. Sidebar Highlighting:
   - The `Sidebar` compares the current path with its links.
   - Highlights the active link with unique styling.

4. Content Display:
   - The selected page component (e.g., `Users`, `Roles`) is rendered in the main content area.

---

#### Possible Extensions:
1. Authentication:
   - Add login functionality with role-based access control (RBAC).

2. Dynamic Sidebar Items:
   - Fetch sidebar links dynamically from an API or configuration file.

3. State Management:
   - Use a state management library (e.g., Redux or Context API) to manage global states like user roles and permissions.

4. API Integration:
   - Connect the pages to a backend API to fetch real-time data (e.g., list of users, roles).

5. Theme Customization:
   - Add a light/dark theme toggle feature.

---

#### Conclusion:
This Admin Dashboard showcases the implementation of a simple yet effective navigation system with active route highlighting. It emphasizes clean UI/UX design principles and serves as a foundation for building more complex applications, such as admin panels, content management systems, or role-based dashboards.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#   R B A C - A s s i g n m e n t 
 
 
