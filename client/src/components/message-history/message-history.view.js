import { messageHistoryPresenter } from "./message-history.presenter.js";

export function messageHistoryComponent() {
  const messageHistoryEl = document.createElement('div');
  messageHistoryEl.classList.add('message-history');
  messageHistoryPresenter(messageHistoryEl);
  return messageHistoryEl;
}