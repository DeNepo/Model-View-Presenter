import { state } from "../../state/state.js";

export function headerPresenter(headerView) {
  headerView.getElementsByClassName('channelName')[0].innerHTML = state.currentChannelName;

  setInterval(() => {
    headerView.getElementsByClassName('channelName')[0].innerHTML = state.currentChannelName;
  }, 300);
}

