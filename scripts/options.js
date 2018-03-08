const Site1en = document.getElementById("Site1-enable");
const Site1url = document.querySelector("#Site1-url");
const Site1dur = document.querySelector("#Site1-duration");

function updateUI(restoredSettings) {
  Site1en.value = restoredSettings.Site1.enable || "";
  Site1url.value = restoredSettings.Site1.url || "";
  Site1dur.value = restoredSettings.Site1.duration || "";
};

function onError(e) {
  console.error(e);
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("Save").addEventListener('click',function storeSettings() {
      console.log("test");
      const Site1en = document.querySelector("#Site1enable");
      const Site1url = document.querySelector("#Site1-url");
      const Site1dur = document.querySelector("#Site1-duration");

      browser.storage.local.set({
        Site1: {
          enable: Site1en.value,
          url: Site1url.value,
          duration: Site1dur.value
        }
      });
    });
});


const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);
