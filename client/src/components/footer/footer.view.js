import { footerPresenter } from "./footer.presenter.js";

export function footerComponent() {
  const footerEl = document.createElement('div');
  footerEl.classList.add('footer');
  footerEl.innerHTML = 
  `
  <div class="user-menu"><span class="user-menu_profile-pic"></span>
  <button id="btn-add-channel">
    Add channel
  </button>
  <span class="user-menu_username"></span></div>
  <div class="input-box">
    <input id="chat-field" class="input-box_text" type="text"/>
  </div>
  `;

  footerPresenter(footerEl);
  return footerEl;
}