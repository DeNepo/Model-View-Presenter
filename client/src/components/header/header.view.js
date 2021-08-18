import { headerPresenter } from "./header.presenter.js";

export function headerComponent() {
  const headerEl = document.createElement('div');
  headerEl.classList.add('header');
  headerEl.innerHTML = `
  <div class="team-menu">Team Awesome</div>
  <div class="channel-menu"><span class="channel-menu_name"><span class="channel-menu_prefix">#</span>                <span class="channelName"></span></span></div>
    `
  headerPresenter(headerEl);
  return headerEl;
}
