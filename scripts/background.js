// What to do when the button on toolbar is clicked
browser.browserAction.onClicked.addListener(handleClick);
function handleClick() {
  browser.runtime.openOptionsPage();
}

// Code to run once DOM is loaded
document.addEventListener('DOMContentLoaded',updateUI);
function updateUI() {
  console.log('Webpage Rotation Kiosk loaded.');
  // Load stored data for the extension
  let getting = browser.storage.local.get();
  getting.then(kioskPrep, onError);
}

function kioskPrep(data){
  console.log('WRK: Saved data loaded.')
  // do nothing if no kiosk pages have url set, no point
  if ((data.Site1.url!='') || (data.Site2.url!='')
   || (data.Site3.url!='') || (data.Site4.url!='')
   || (data.Site5.url!='')) {
    // get open windows so we can close them after making our kiosk
    let closing = browser.windows.getAll({});
    // open kiosk window for Site1
    let kioskPage = browser.windows.create(
      {
        url:data.Site1.url,
        type:'panel',
        state:'fullscreen'
      });
    kioskPage.then((createdata)=>setRefresh(data.Site1,createdata),onError);
    // close all windows opened before the kiosk window
    closing.then((wList)=>{
      for (w of wList) {
        let closing = browser.windows.remove(w.id);
        closing.then({},onError);
      }
    },onError);
  } else {
    console.log('WRK: No pages currently stored. ');
  }
}

// set refresh interval timer for current pages
function setRefresh(siteinfo,createdata) {
  if (siteinfo.autorefresh != null) {
    if (siteinfo.autorefesh<5) {
      let timerid=setInterval(()=>{console.log('interval trigger');},5000);
    } else {
      let timerid=setInterval(()=>{console.log('interval trigger');},createdata.autorefresh*1000);
    }
  }
}

// catch-all for unkept Promises
function onError(e) {
  console.error(e);
}
