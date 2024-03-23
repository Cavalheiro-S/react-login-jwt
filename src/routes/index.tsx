import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { useAuth } from "../hooks/use-auth";
import Login from "../pages/login";

const Routes = () => {
  const { token } = useAuth();

  // Define as rotas publicas
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define rotas para usuários autenticados
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Encapsula as rotas protegidas
      children: [
        {
          path: "/",
          element: <div>User Home Page</div>,
        },
        {
          path: "/profile",
          element: <div>User Profile</div>,
        },
        {
          path: "/logout",
          element: <div>Logout</div>,
        },
      ],
    },
  ];

  // Define rotas para usuários não autenticados
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <div>Home Page</div>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ];

  //Combina e condicionalmente inclui rotas baseadas em no status autenticação
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Retorna a configuração do router utilizando o RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;