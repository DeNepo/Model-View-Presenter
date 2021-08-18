import { channelListingPresenter } from "./channel-listing.presenter.js";

export function channelListingComponent() {
  const channelListingsEl = document.createElement('div');
  channelListingsEl.classList.add('listings');
  channelListingsEl.innerHTML = `
  <div class="listings_channels">
    <h2 class="listings_header">Channels</h2>
    <ul class="channel_list">
    </ul>
  </div>
  `;
  channelListingPresenter(channelListingsEl);
  return channelListingsEl;
}