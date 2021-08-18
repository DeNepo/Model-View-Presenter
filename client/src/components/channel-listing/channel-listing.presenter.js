import { fetchChannels } from "../../api-calls/calls.js";
import { state } from "../../state/state.js";
import { channelEntryComponent } from "./channel-entry.view.js";

export function channelListingPresenter(channelListingView) {
  channelListingView.addEventListener('click', (event) => {
    if (!event.target.dataset.channelId) {
      return;
    }
    state.currentChannelId = event.target.dataset.channelId;
    state.currentChannelName = event.target.dataset.channelName;
  });

  setInterval(async () => {
    const channels = await fetchChannels();
    const channelComponents = channels.map(c => channelEntryComponent(c, state.currentChannelId));
    const container = channelListingView.getElementsByClassName("channel_list")[0];
    container.innerHTML = '';
    channelComponents.forEach(c => container.appendChild(c));
  }, 300);
}
