// Original setup examples left at top for layout and reference
/*// Set up fields for easy coding, store each as a const
const Site1_enable = document.getElementById('Site1-enable');
const Site1_url = document.getElementById('Site1-url');
const Site1_duration = document.getElementById('Site1-duration');
const Site1_autorefresh = document.getElementById('Site1-autorefresh');


// Restore settings from storage
function updateUI(restoredSettings) {
  console.log("loading...");
  Site1_enable.checked = restoredSettings.Site1.enabled || "";
  Site1_url.value = restoredSettings.Site1.url || "";
  Site1_duration.value = restoredSettings.Site1.duration || "";
  Site1_autorefresh.value = restoredSettings.Site1.autorefresh || "";

  cancelSettings = restoredSettings; // save what was restored in a new place, so we can use it for cancelChanges
};


// Save current settings
function storeSettings() {
  console.log("saving...");
  browser.storage.local.set({
    Site1: {
      enabled: Site1_enable.checked,
      url: Site1_url.value,
      duration: Site1_duration.value,
      autorefresh: Site1_autorefresh.value
    }
  });
};

function cancelChanges() {
  Site1_enable.checked = restoredSettings.Site1.enabled || "";
  Site1_url.value = restoredSettings.Site1.url || "";
  Site1_duration.value = restoredSettings.Site1.duration || "";
  Site1_autorefresh.value = restoredSettings.Site1.autorefresh || "";
};
*/

function onError(e) {
  console.error(e);
};

// When loading page load any stored settings to show them
var cancelSettings; // var for storing the results of the .get below, used to restore on cancelChanges
const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

// Set up an event listener to know when save button is pressed
document.getElementById('btn-Save').addEventListener('click',storeSettings);

// Set up an event listener to know when cancel button is pressed
document.getElementById('btn-Cancel').addEventListener('click',cancelChanges);
