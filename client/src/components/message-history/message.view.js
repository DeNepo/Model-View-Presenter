export function messageComponent(message) {
  const el = document.createElement('div');
  el.classList.add('message');
  el.innerHTML = `
    <a class="message_profile-pic" href=""></a>
    <a class="message_username" href="">${message.user}</a>
    <span class="message_timestamp">${message.date.toString()}</span>
    <span class="message_star"></span>
    <span class="message_content">
    ${message.text}
    </span>
  `;
  return el;
}