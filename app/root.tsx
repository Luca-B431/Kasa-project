import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Link,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import Header from "./components/header";
import Footer from "./components/footer";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="w-full" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "Oups! La page que vous demandez n'existe pas."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex flex-col items-center justify-center gap-32 w-full h-screen p-4 text-center bg-white">
      <h1 className="text-[#FF6060] text-8xl md:text-[288px] font-bold">
        {message}
      </h1>
      <p className="text-[#FF6060] text-xl md:text-4xl text-center">
        {details}
      </p>
      <Link to="/" className="text-sm md:text-xl underline">
        {" "}
        Retourner sur la page d'accueil{" "}
      </Link>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
