// Set up fields for easy coding, store each as a const
const Site1_enable = document.getElementById('Site1-enable');
const Site1_url = document.getElementById('Site1-url');
const Site1_duration = document.getElementById('Site1-duration');
const Site2_enable = document.getElementById('Site2-enable');
const Site2_url = document.getElementById('Site2-url');
const Site2_duration = document.getElementById('Site2-duration');
const Site3_enable = document.getElementById('Site3-enable');
const Site3_url = document.getElementById('Site3-url');
const Site3_duration = document.getElementById('Site3-duration');
const Site4_enable = document.getElementById('Site4-enable');
const Site4_url = document.getElementById('Site4-url');
const Site4_duration = document.getElementById('Site4-duration');
const Site5_enable = document.getElementById('Site5-enable');
const Site5_url = document.getElementById('Site5-url');
const Site5_duration = document.getElementById('Site5-duration');

// Restore settings from storage
function updateUI(restoredSettings) {
  console.log("loading...");
  Site1_enable.checked = restoredSettings.Site1.enabled || "";
  Site1_url.value = restoredSettings.Site1.url || "";
  Site1_duration.value = restoredSettings.Site1.duration || "";
  Site2_enable.checked = restoredSettings.Site2.enabled || "";
  Site2_url.value = restoredSettings.Site2.url || "";
  Site2_duration.value = restoredSettings.Site2.duration || "";
  Site3_enable.checked = restoredSettings.Site3.enabled || "";
  Site3_url.value = restoredSettings.Site3.url || "";
  Site3_duration.value = restoredSettings.Site3.duration || "";
  Site4_enable.checked = restoredSettings.Site4.enabled || "";
  Site4_url.value = restoredSettings.Site4.url || "";
  Site4_duration.value = restoredSettings.Site4.duration || "";
  Site5_enable.checked = restoredSettings.Site5.enabled || "";
  Site5_url.value = restoredSettings.Site5.url || "";
  Site5_duration.value = restoredSettings.Site5.duration || "";
  cancelSettings = restoredSettings; // save what was restored in a new place, so we can use it for cancelChanges
};


// Save current settings
function storeSettings() {
  console.log("saving...");
  browser.storage.local.set({
    Site1: {
      enabled: Site1_enable.checked,
      url: Site1_url.value,
      duration: Site1_duration.value
    },
    Site2: {
      enabled: Site2_enable.checked,
      url: Site2_url.value,
      duration: Site2_duration.value
    },
    Site3: {
      enabled: Site3_enable.checked,
      url: Site3_url.value,
      duration: Site3_duration.value
    },
    Site4: {
      enabled: Site4_enable.checked,
      url: Site4_url.value,
      duration: Site4_duration.value
    },
    Site5: {
      enabled: Site5_enable.checked,
      url: Site5_url.value,
      duration: Site5_duration.value
    }
  });
};

function cancelChanges() {
  Site1_enable.checked = cancelSettings.Site1.enabled || "";
  Site1_url.value = cancelSettings.Site1.url || "";
  Site1_duration.value = cancelSettings.Site1.duration || "";
  Site2_enable.checked = cancelSettings.Site2.enabled || "";
  Site2_url.value = cancelSettings.Site2.url || "";
  Site2_duration.value = cancelSettings.Site2.duration || "";
  Site3_enable.checked = cancelSettings.Site3.enabled || "";
  Site3_url.value = cancelSettings.Site3.url || "";
  Site3_duration.value = cancelSettings.Site3.duration || "";
  Site4_enable.checked = cancelSettings.Site4.enabled || "";
  Site4_url.value = cancelSettings.Site4.url || "";
  Site4_duration.value = cancelSettings.Site4.duration || "";
  Site5_enable.checked = cancelSettings.Site5.enabled || "";
  Site5_url.value = cancelSettings.Site5.url || "";
  Site5_duration.value = cancelSettings.Site5.duration || "";
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
