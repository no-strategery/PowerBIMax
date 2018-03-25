browser.browserAction.onClicked.addListener(handleClick);
function handleClick() {
  browser.runtime.openOptionsPage();
}
