chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.runtime.sendMessage({ action: 'updateTabs' });
});

chrome.tabs.onRemoved.addListener(async (tabId) => {
  const cache = await chrome.storage.local.get('tabCache');
  const tabCache = cache.tabCache || {};
  
  // Удаляем все ключи, начинающиеся с tabId
  for (const key of Object.keys(tabCache)) {
    if (key.startsWith(`${tabId}:`)) {
      delete tabCache[key];
    }
  }
  
  await chrome.storage.local.set({ tabCache });
  chrome.runtime.sendMessage({ action: 'updateTabs' });
});

// Слушаем сообщения от popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'updateTabs') {
    chrome.runtime.sendMessage({ action: 'refreshPopup' });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'closeTab') {
    const tabId = message.tabId;
    chrome.tabs.remove(tabId, () => {
      if (chrome.runtime.lastError) {
        console.error('Ошибка при закрытии вкладки:', chrome.runtime.lastError);
        sendResponse({ success: false, error: chrome.runtime.lastError.message });
      } else {
        // Отправляем сообщение в popup для обновления списка вкладок
        chrome.runtime.sendMessage({ action: 'refreshPopup' });
        sendResponse({ success: true });
      }
    });
    return true; // Указываем, что ответ асинхронный
  }
});