function handleStartup() {
  tabid=browser.tabs.query();
}

function handleClick() {
  browser.runtime.openOptionsPage();
}

browser.runtime.onStartup.addListener(handleStartup);
browser.browserAction.onClicked.addListener(handleClick);
