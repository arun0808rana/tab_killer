chrome.runtime.onInstalled.addListener(() => {
    console.log("Tab Manager Extension Installed");
  });
  
  chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.tabs.query({ currentWindow: true }, (allTabs) => {
        const currentIndex = currentTab.index;
  
        if (command === 'closeTabsRight') {
          for (let i = currentIndex + 1; i < allTabs.length; i++) {
            chrome.tabs.remove(allTabs[i].id);
          }
        } else if (command === 'closeTabsLeft') {
          for (let i = currentIndex - 1; i >= 0; i--) {
            chrome.tabs.remove(allTabs[i].id);
          }
        }
      });
    });
  });
  