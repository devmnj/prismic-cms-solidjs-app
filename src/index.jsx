/* @refresh reload */
import { render } from "solid-js/web";
// import { Router } from "solid-app-router";
import Layout from '@/layout'
import "./index.css";
import App from "./App";


render(
  () => (
 
      <Layout>
        <App />
      </Layout>
   
  ),
  document.getElementById("root")
);
