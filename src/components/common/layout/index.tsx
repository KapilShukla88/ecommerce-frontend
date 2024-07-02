"use client";
import { Provider } from "react-redux";

import Footer from "../footer";
import Navbar from "../navbar";
import store from "@store/configure-store";
import withAuth from "src/context/isAuth";
import AuthGuard from "src/context/auth-guard";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <AuthGuard>
          <Navbar />
          {children}
          <Footer />
        </AuthGuard>
      </Provider>
    </>
  );
}

export default AppLayout;
