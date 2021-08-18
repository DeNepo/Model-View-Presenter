import { channelListingComponent } from "../channel-listing/channel-listing.view.js";
import { messageHistoryComponent } from "../message-history/message-history.view.js";

export function mainComponent() {
  const mainEl = document.createElement('div');
  mainEl.classList.add('main');

  const channelListingsEl = channelListingComponent();
  mainEl.appendChild(channelListingsEl);

  const messageHistoryEl = messageHistoryComponent();
  mainEl.appendChild(messageHistoryEl);
  return mainEl;
}