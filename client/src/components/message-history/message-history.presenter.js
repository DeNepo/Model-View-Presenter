import { fetchMessagesForChannel } from "../../api-calls/calls.js";
import { state } from "../../state/state.js";
import { messageComponent } from "./message.view.js";

export function messageHistoryPresenter(messageHistoryView) {
  setInterval(async () => {
    const messages = await fetchMessagesForChannel(state.currentChannelId);
    const messageComponents = messages.map(m => messageComponent(m));
    messageHistoryView.innerHTML = '';
    messageComponents.forEach(c => messageHistoryView.appendChild(c));
  }, 300);
}
