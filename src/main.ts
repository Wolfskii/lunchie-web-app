import './app.scss'
import App from './App.svelte'

const appElement = document.getElementById('app');

let app = null;

if (appElement) {
  app = new App({
    target: appElement,
  });
} else {
  console.error("Element with ID 'app' not found.");
}

export default app;
