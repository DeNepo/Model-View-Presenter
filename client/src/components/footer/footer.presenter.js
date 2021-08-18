import { postChannel, postMessage } from "../../api-calls/calls.js";
import { state } from "../../state/state.js";

export function footerPresenter(footerView) {

  footerView.getElementsByClassName('user-menu_username')[0].innerHTML = state.username;

  footerView.addEventListener("keyup", async function(event) {
    if (event.keyCode === 13) {
        const chatBox = footerView.getElementsByClassName("input-box_text")[0]
        const message = chatBox.value;
        await postMessage(message);
        chatBox.value = "";
    }
  });

  footerView.addEventListener('click', async (event) => {
    if (event.target.type === 'submit') {
      const channelName = prompt("Please enter channel name:");
      await postChannel(channelName);
    }
  });
}