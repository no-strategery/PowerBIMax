function handleStartup() {
  browser.tabs.create({
    url:"http://chilloutandwatchsomecatgifs.com/"
  });
}

function handleClick() {
  browser.runtime.openOptionsPage();
}

browser.runtime.onStartup.addListener(handleStartup);
browser.browserAction.onClicked.addListener(handleClick);
