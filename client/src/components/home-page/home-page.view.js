import { footerComponent } from "../footer/footer.view.js";
import { headerComponent } from "../header/header.view.js";
import { mainComponent } from "../main/main.view.js";

export const homePage = () => {
  const el = document.createElement('div');
  el.style = 'height:100%;';

  const headerEl = headerComponent();
  el.appendChild(headerEl);

  const mainEl = mainComponent();
  el.appendChild(mainEl);

  const footerEl = footerComponent();
  el.appendChild(footerEl);

  return el;
}