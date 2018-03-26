// Set up fields for easy coding, store each as a const
const Site1_url = document.getElementById('Site1-url');
const Site1_duration = document.getElementById('Site1-duration');
const Site1_autorefresh = document.getElementById('Site1-autorefresh');
const Site2_url = document.getElementById('Site2-url');
const Site2_duration = document.getElementById('Site2-duration');
const Site2_autorefresh = document.getElementById('Site2-autorefresh');
const Site3_url = document.getElementById('Site3-url');
const Site3_duration = document.getElementById('Site3-duration');
const Site3_autorefresh = document.getElementById('Site3-autorefresh');
const Site4_url = document.getElementById('Site4-url');
const Site4_duration = document.getElementById('Site4-duration');
const Site4_autorefresh = document.getElementById('Site4-autorefresh');
const Site5_url = document.getElementById('Site5-url');
const Site5_duration = document.getElementById('Site5-duration');
const Site5_autorefresh = document.getElementById('Site5-autorefresh');

// Restore settings from storage
function updateUI(restoredSettings) {
  console.log("loading...");
  Site1_url.value = restoredSettings.Site1.url || "";
  Site1_duration.value = restoredSettings.Site1.duration || "";
  Site1_autorefresh.value = restoredSettings.Site1.autorefresh || "";
  Site2_url.value = restoredSettings.Site2.url || "";
  Site2_duration.value = restoredSettings.Site2.duration || "";
  Site2_autorefresh.value = restoredSettings.Site2.autorefresh || "";
  Site3_url.value = restoredSettings.Site3.url || "";
  Site3_duration.value = restoredSettings.Site3.duration || "";
  Site3_autorefresh.value = restoredSettings.Site3.autorefresh || "";
  Site4_url.value = restoredSettings.Site4.url || "";
  Site4_duration.value = restoredSettings.Site4.duration || "";
  Site4_autorefresh.value = restoredSettings.Site4.autorefresh || "";
  Site5_url.value = restoredSettings.Site5.url || "";
  Site5_duration.value = restoredSettings.Site5.duration || "";
  Site5_autorefresh.value = restoredSettings.Site5.autorefresh || "";

  cancelSettings = restoredSettings; // save what was restored in a new place, so we can use it for cancelChanges
};


// Save current settings
function storeSettings() {
  console.log("saving...");
  browser.storage.local.set({
    Site1: {
      url: Site1_url.value,
      duration: Site1_duration.value,
      autorefresh: Site1_autorefresh.value
    },
    Site2: {
      url: Site2_url.value,
      duration: Site2_duration.value,
      autorefresh: Site2_autorefresh.value
    },
    Site3: {
      url: Site3_url.value,
      duration: Site3_duration.value,
      autorefresh: Site3_autorefresh.value
    },
    Site4: {
      url: Site4_url.value,
      duration: Site4_duration.value,
      autorefresh: Site4_autorefresh.value
    },
    Site5: {
      url: Site5_url.value,
      duration: Site5_duration.value,
      autorefresh: Site5_autorefresh.value
    }
  });
};

function cancelChanges() {
  Site1_url.value = restoredSettings.Site1.url || "";
  Site1_duration.value = restoredSettings.Site1.duration || "";
  Site1_autorefresh.value = restoredSettings.Site1.autorefresh || "";
  Site2_url.value = restoredSettings.Site2.url || "";
  Site2_duration.value = restoredSettings.Site2.duration || "";
  Site2_autorefresh.value = restoredSettings.Site2.autorefresh || "";
  Site3_url.value = restoredSettings.Site3.url || "";
  Site3_duration.value = restoredSettings.Site3.duration || "";
  Site3_autorefresh.value = restoredSettings.Site3.autorefresh || "";
  Site4_url.value = restoredSettings.Site4.url || "";
  Site4_duration.value = restoredSettings.Site4.duration || "";
  Site4_autorefresh.value = restoredSettings.Site4.autorefresh || "";
  Site5_url.value = restoredSettings.Site5.url || "";
  Site5_duration.value = restoredSettings.Site5.duration || "";
  Site5_autorefresh.value = restoredSettings.Site5.autorefresh || "";
};

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
