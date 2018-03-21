function handleClick() {
  browser.runtime.openOptionsPage();
}

browser.browserAction.onClicked.addListener(handleClick);

function tabCreate(tab) {
  console.log('Tab id is: ' + tab.id);
}

//browser.tabs.onCreated.addListener((tab)=>tabCreate(tab));

function logTabsForWindows(windowInfoArray) {
  for (windowInfo of windowInfoArray) {
    console.log(`Window: ${windowInfo.id}`);
    console.log(windowInfo.tabs.map((tab) => {return tab.url}));
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*browser.windows.onCreated.addListener((tab) => {
  var getting = browser.windows.getAll({
    populate: true,
    windowTypes: ["normal"]
  });
  getting.then(logTabsForWindows, onError);
});
*/
