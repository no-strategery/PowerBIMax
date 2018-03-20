function handleClick() {
  browser.runtime.openOptionsPage();
}

browser.browserAction.onClicked.addListener(handleClick);

function tabCreate(tab) {
  console.log('Tab id is ' & tab.id);
}

browser.tabs.onCreated.addListener((tab)=>{tabCreate(tab)});
