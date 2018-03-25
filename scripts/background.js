// What to do when the button on toolbar is clicked
browser.browserAction.onClicked.addListener(handleClick);
function handleClick() {
  browser.runtime.openOptionsPage();
}

// Code to run once DOM is loaded
document.addEventListener('DOMContentLoaded',updateUI);
function updateUI() {
  console.log('Webpage Rotation Kiosk loaded');
  // Load stored data for the extension
  let getting = browser.storage.local.get();
  getting.then(kioskPrep, onError);
}

function kioskPrep(data){
  // get open windows so we can close them after making our kiosk
  let closing = browser.windows.getAll({});
  // open kiosk window for Site1
  let kioskPage = browser.windows.create(
    {
      url:data.Site1.url,
      type:'panel',
      state:'fullscreen'
    });
  kioskPage.then({},onError);
  // close all windows opened before the kiosk window
  closing.then((wList)=>{
    for (w of wList) {
      let closing = browser.windows.remove(w.id);
      closing.then({},onError);
    }
  },onError);
}

// catch-all for unkept Promises
function onError(e) {
  console.error(e);
}
