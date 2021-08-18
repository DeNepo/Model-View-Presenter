export function channelEntryComponent(channel, currentlySelectedId) {
  const el = document.createElement('li');
  el.dataset.channelId = channel.id;
  el.dataset.channelName = channel.name;
  el.classList.add('channel');
  if (channel.id === currentlySelectedId) {
    el.classList.add('active');
  }
  el.innerHTML = `
  <a data-channel-id="${channel.id}" data-channel-name="${channel.name}" class="channel_name">
    <span data-channel-id="${channel.id}" data-channel-name="${channel.name}"><span data-channel-id="${channel.id}" data-channel-name="${channel.name}" class="prefix">#</span>${channel.name}</span></a>
  `
  return el;
}