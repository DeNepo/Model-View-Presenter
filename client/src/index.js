import { homePage } from "./components/home-page/home-page.view.js";
import { state } from "./state/state.js";

async function startApplication() {
  const root = document.getElementById('root');
  root.innerHTML = '';
  state.username = prompt("Please enter your username");
  const res = await homePage();
  root.append(res);
}
startApplication();