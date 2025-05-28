const categories = {
  study: {
    keywords: [
      { word: 'курс', weight: 3 },
      { word: 'лекция', weight: 3 },
      { word: 'учебник', weight: 3 },
      { word: 'pdf', weight: 2 },
      { word: 'edu', weight: 5 },
      { word: 'study', weight: 3 },
      { word: 'learn', weight: 3 },
      { word: 'university', weight: 4 },
      { word: 'course', weight: 4 },
      { word: 'tutorial', weight: 3 },
      { word: 'education', weight: 4 },
      { word: 'school', weight: 3 },
      { word: 'academy', weight: 3 },
      { word: 'exam', weight: 2.5 },
      { word: 'lesson', weight: 3 },
      { word: 'research', weight: 3 },
      { word: 'science', weight: 2.5 },
      { word: 'coursera', weight: 5 },
      { word: 'udemy', weight: 5 },
      { word: 'khanacademy', weight: 5 },
      { word: 'обучение', weight: 3 },
      { word: 'университет', weight: 4 },
      { word: 'школа', weight: 3 },
      { word: 'учебный', weight: 3 },
      { word: 'экзамен', weight: 2.5 },
      { word: 'наука', weight: 2.5 }
    ],
    domains: [
      '.edu',
      '.org',
      'coursera.org',
      'udemy.com',
      'khanacademy.org',
      'edx.org',
      'openclassrooms.com',
      'mit.edu',
      'stanford.edu',
      '.ru',
      '.рф',
      'edu.ru',
      'school.ru',
      'universitet.ru'
    ],
    negativeKeywords: ['game', 'play', 'watch', 'игра', 'смотреть'],
    element: document.querySelector('#study ul'),
    color: 'blue'
  },
  work: {
    keywords: [
      { word: 'crm', weight: 4 },
      { word: 'email', weight: 2 },
      { word: 'jira', weight: 4 },
      { word: 'docs', weight: 2.5 },
      { word: 'work', weight: 3 },
      { word: 'office', weight: 3 },
      { word: 'meeting', weight: 3 },
      { word: 'project', weight: 3 },
      { word: 'team', weight: 2.5 },
      { word: 'task', weight: 3 },
      { word: 'schedule', weight: 2.5 },
      { word: 'calendar', weight: 2.5 },
      { word: 'slack', weight: 4 },
      { word: 'trello', weight: 4 },
      { word: 'asana', weight: 4 },
      { word: 'microsoft', weight: 3 },
      { word: 'google', weight: 2 },
      { word: 'business', weight: 3 },
      { word: 'enterprise', weight: 3 },
      { word: 'corporate', weight: 3 },
      { word: 'работа', weight: 3 },
      { word: 'офис', weight: 3 },
      { word: 'собрание', weight: 3 },
      { word: 'проект', weight: 3 },
      { word: 'задача', weight: 3 },
      { word: 'расписание', weight: 2.5 },
      { word: 'бизнес', weight: 3 }
    ],
    domains: [
      'slack.com',
      'trello.com',
      'asana.com',
      'microsoft.com',
      'google.com',
      'atlassian.com',
      'zoom.us',
      'notion.so',
      '.gov',
      '.ru',
      '.рф',
      '1c.ru',
      'myoffice.ru',
      'yandex.ru'
    ],
    negativeKeywords: ['play', 'watch', 'stream', 'игра', 'смотреть', 'поток'],
    element: document.querySelector('#work ul'),
    color: 'green'
  },
  entertainment: {
    keywords: [
      { word: 'youtube', weight: 5 },
      { word: 'netflix', weight: 5 },
      { word: 'twitch', weight: 5 },
      { word: 'disneyplus', weight: 5 },
      { word: 'spotify', weight: 5 },
      { word: 'steam', weight: 5 },
      { word: 'game', weight: 4 },
      { word: 'gaming', weight: 4 },
      { word: 'play', weight: 3 },
      { word: 'movie', weight: 4 },
      { word: 'film', weight: 4 },
      { word: 'cinema', weight: 4 },
      { word: 'music', weight: 4 },
      { word: 'song', weight: 3 },
      { word: 'album', weight: 3 },
      { word: 'stream', weight: 3 },
      { word: 'video', weight: 2.5 },
      { word: 'watch', weight: 3 },
      { word: 'series', weight: 4 },
      { word: 'episode', weight: 3 },
      { word: 'trailer', weight: 3 },
      { word: 'tv', weight: 3 },
      { word: 'show', weight: 3 },
      { word: 'concert', weight: 3 },
      { word: 'podcast', weight: 3 },
      { word: 'live', weight: 2.5 },
      { word: 'fun', weight: 2 },
      { word: 'entertain', weight: 3 },
      { word: 'игра', weight: 4 },
      { word: 'фильм', weight: 4 },
      { word: 'кино', weight: 4 },
      { word: 'музыка', weight: 4 },
      { word: 'песня', weight: 3 },
      { word: 'сериал', weight: 4 },
      { word: 'трейлер', weight: 3 },
      { word: 'шоу', weight: 3 },
      { word: 'концерт', weight: 3 },
      { word: 'развлечение', weight: 3 }
    ],
    domains: [
      'youtube.com',
      'netflix.com',
      'twitch.tv',
      'disneyplus.com',
      'spotify.com',
      'steampowered.com',
      'hulu.com',
      'primevideo.com',
      'apple.com',
      'soundcloud.com',
      'deezer.com',
      'vimeo.com',
      'dailymotion.com',
      'epicgames.com',
      'playstation.com',
      'xbox.com',
      '.ru',
      '.рф',
      'vk.com',
      'ok.ru',
      'kinopoisk.ru',
      'ivi.ru',
      'zaycev.net',
      'rutube.ru'
    ],
    negativeKeywords: ['course', 'learn', 'work', 'курс', 'обучение', 'работа'],
    element: document.querySelector('#entertainment ul'),
    color: 'purple'
  },
  other: {
    keywords: [],
    element: document.querySelector('#other ul'),
    color: 'gray'
  }
};

// Слова, связанные с "Работой" (управление, администрирование)
const workRelatedWords = [
  'manager',
  'admin',
  'administrator',
  'management',
  'manage',
  'dashboard',
  'control',
  'panel',
  'settings',
  'config',
  'менеджер',
  'админ',
  'управление',
  'панель',
  'настройки'
];

// Простая TF-IDF токенизация
function tokenize(text) {
  return text.toLowerCase().split(/\W+/).filter(word => word.length > 2);
}

// Извлечение домена и базового пути из URL
function extractDomainAndPath(url) {
  try {
    const { hostname, pathname } = new URL(url);
    // Удаляем параметры запроса и фрагменты
    const path = pathname.split('?')[0].split('#')[0];
    return `${hostname}${path}`.toLowerCase();
  } catch (e) {
    return '';
  }
}

// Извлечение домена из URL
function extractDomain(url) {
  try {
    const hostname = new URL(url).hostname;
    return hostname.toLowerCase();
  } catch (e) {
    return '';
  }
}

// Загрузка модели (имитация с весами и пользовательскими корректировками)
async function loadModel() {
  const userCorrections = (await chrome.storage.local.get('userCorrections')).userCorrections || {};
  const correctionCounts = (await chrome.storage.local.get('correctionCounts')).correctionCounts || {};
  
  return {
    predict: async (text, url, pageContent = {}) => {
      const tokens = tokenize(text);
      const domain = extractDomain(url);
      const contentText = Object.values(pageContent).join(' ');
      const scores = {
        study: 0,
        work: 0,
        entertainment: 0,
        other: 1 // Базовый вес для "Разное"
      };

      // Учёт доменов
      for (const [category, data] of Object.entries(categories)) {
        if (data.domains && data.domains.some(d => url.includes(d))) {
          scores[category] += 6; // Высокий вес для доменов
        }
      }

      // Учёт ключевых слов с весами из URL и содержимого
      for (const [category, data] of Object.entries(categories)) {
        if (category === 'other') continue;
        data.keywords.forEach(({ word, weight }) => {
          if (tokens.includes(word) || tokenize(contentText).includes(word)) {
            scores[category] += weight;
          }
        });

        // Штраф за отрицательные ключевые слова
        if (data.negativeKeywords) {
          data.negativeKeywords.forEach(word => {
            if (text.includes(word) || tokenize(contentText).includes(word)) {
              scores[category] -= 2;
            }
          });
        }
      }

      // Дополнительные правила для комбинаций слов
      if (categories.study.keywords.some(({ word }) => text.includes(word) || tokenize(contentText).includes(word)) &&
          (text.includes('online') || text.includes('course') || text.includes('learn') || text.includes('онлайн') || tokenize(contentText).includes('обучение'))) {
        scores.study += 4;
      }
      if (categories.work.keywords.some(({ word }) => text.includes(word) || tokenize(contentText).includes(word)) &&
          (text.includes('team') || text.includes('meeting') || text.includes('project') || text.includes('команда') || tokenize(contentText).includes('проект'))) {
        scores.work += 4;
      }
      if (categories.entertainment.keywords.some(({ word }) => text.includes(word) || tokenize(contentText).includes(word)) &&
          (text.includes('watch') || text.includes('play') || text.includes('stream') || text.includes('смотреть') || tokenize(contentText).includes('игра'))) {
        scores.entertainment += 4;
      }

      // Дополнительные проверки структуры URL
      if (url.includes('watch?v=') || url.includes('play/') || url.includes('stream/')) {
        scores.entertainment += 3;
      }
      if (url.includes('blog/') || url.includes('article/') || url.includes('статья/')) {
        scores.study += 2;
      }
      if (url.includes('dashboard/') || url.includes('admin/') || url.includes('панель/')) {
        scores.work += 3;
      }

      // Учёт пользовательских корректировок (по домену и пути, затем по домену)
      const domainAndPath = extractDomainAndPath(url);
      for (const [correctedKey, correctedCategory] of Object.entries(userCorrections)) {
        if (correctedKey === domainAndPath || correctedKey === domain) {
          const count = correctionCounts[correctedKey] || 0;
          if (count < 3) { // Если корректировка менялась меньше 3 раз, применяем её
            return correctedCategory;
          }
        }
      }

      const maxScore = Math.max(...Object.values(scores));
      return Object.keys(scores).find(key => scores[key] === maxScore) || 'other';
    }
  };
}

// Классификация вкладки
async function classifyTab(tab, model, domainCache) {
  const text = (tab.title + ' ' + tab.url).toLowerCase();
  let pageContent = {};

  // Получаем содержимое страницы через content script
  if (tab.active && tab.url.startsWith('http')) {
    try {
      const [tabInfo] = await chrome.tabs.executeScript(tab.id, {
        code: `(${extractPageContent.toString()})()`
      });
      pageContent = tabInfo || {};
    } catch (e) {
      console.log('Не удалось получить содержимое страницы:', e);
    }
  }

  const domain = extractDomain(tab.url);
  const domainAndPath = extractDomainAndPath(tab.url);

  // Проверяем, есть ли кэш для домена или домена с путём
  if (domainCache[domain]) {
    return domainCache[domain];
  }
  if (domainCache[domainAndPath]) {
    return domainCache[domainAndPath];
  }

  // Правило: если в URL есть слова, связанные с управлением/администрированием, это "Работа"
  if (workRelatedWords.some(word => tab.url.toLowerCase().includes(word))) {
    domainCache[domain] = 'work'; // Сохраняем категорию для домена
    return 'work';
  }

  // Предсказание модели с учётом содержимого страницы
  let category = await model.predict(text, tab.url.toLowerCase(), pageContent);
  
  // Fallback на правила с регулярными выражениями
  for (const [cat, data] of Object.entries(categories)) {
    if (cat === 'other') continue;
    if (data.keywords.some(({ word }) => new RegExp(`\\b${word}\\b`).test(text))) {
      category = cat;
      break;
    }
  }

  // Сохраняем категорию для домена и домена с путём
  domainCache[domainAndPath] = category;
  domainCache[domain] = category;

  return category;
}

// Функция для извлечения содержимого (должна быть доступна в content script)
function extractPageContent() {
  const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
  const metaKeywords = document.querySelector('meta[name="keywords"]')?.content || '';
  const title = document.title;
  const headings = Array.from(document.querySelectorAll('h1, h2')).map(h => h.textContent).join(' ');
  const firstParagraph = document.body.textContent.split('\n')[0] || '';

  return {
    metaDescription,
    metaKeywords,
    title,
    headings,
    firstParagraph
  };
}

// Обёртка для chrome.storage.local.set, чтобы использовать с await
function setStorage(data) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(data, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
}

// Глобальные переменные
let allTabs = [];
let sortType = 'time'; // Единый тип сортировки для всех категорий

// Функция сортировки вкладок
function sortTabs(tabs, sortType) {
  const sortedTabs = [...tabs];
  if (sortType === 'time') {
    // Сортировка по времени открытия (по id, большие id — более новые вкладки)
    sortedTabs.sort((a, b) => b.id - a.id);
  } else if (sortType === 'alpha') {
    // Сортировка по алфавиту (по title)
    sortedTabs.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
  }
  return sortedTabs;
}

// Обновление визуального состояния кнопок сортировки
function updateSortButtonStyles() {
  const sortButtons = document.querySelector('.sort-buttons');
  const timeButton = sortButtons.querySelector('.sort-time-button');
  const alphaButton = sortButtons.querySelector('.sort-alpha-button');

  if (sortType === 'time') {
    timeButton.classList.add('active');
    alphaButton.classList.remove('active');
  } else if (sortType === 'alpha') {
    alphaButton.classList.add('active');
    timeButton.classList.remove('active');
  }
}

// Отображение вкладок
async function displayTabs(tabs, model) {
  const cache = await chrome.storage.local.get('tabCache');
  const domainCache = (await chrome.storage.local.get('domainCache')).domainCache || {}; // Кэш категорий по доменам
  const userCorrections = (await chrome.storage.local.get('userCorrections')).userCorrections || {};
  const correctionCounts = (await chrome.storage.local.get('correctionCounts')).correctionCounts || {};
  const tabCache = cache.tabCache || {};

  // Очищаем списки
  Object.values(categories).forEach(cat => {
    cat.element.innerHTML = '';
    const countElement = cat.element.parentElement.querySelector('.tab-count');
    countElement.textContent = ''; // Сбрасываем счётчик
  });

  // Создаём объект для хранения вкладок по категориям
  const tabsByCategory = {
    study: [],
    work: [],
    entertainment: [],
    other: []
  };

  // Распределяем вкладки по категориям
  for (const tab of tabs) {
    const cacheKey = `${tab.id}:${tab.url}:${tab.title}`;
    let category = tabCache[cacheKey];

    // Если категории нет в кэше, классифицируем вкладку с учётом доменного кэша
    if (!category) {
      category = await classifyTab(tab, model, domainCache);
    } else {
      // Проверяем, совпадает ли домен с уже классифицированным
      const domain = extractDomain(tab.url);
      if (domainCache[domain] && domainCache[domain] !== category) {
        category = domainCache[domain]; // Используем категорию домена, если она определена
      }
    }

    // Сохраняем в кэш
    tabCache[cacheKey] = category;
    tabsByCategory[category].push({ tab, cacheKey });
  }

  // Сортируем и отображаем вкладки в каждой категории
  for (const [category, tabList] of Object.entries(tabsByCategory)) {
    const count = tabList.length;
    const countElement = categories[category].element.parentElement.querySelector('.tab-count');
    countElement.textContent = count > 0 ? count : ''; // Отображаем количество вкладок без скобок, если 0 — ничего не показываем

    // Сортируем вкладки с использованием единого типа сортировки
    const sortedTabList = sortTabs(tabList.map(item => item.tab), sortType);
    
    // Отображаем отсортированные вкладки
    for (const tab of sortedTabList) {
      const cacheKey = `${tab.id}:${tab.url}:${tab.title}`;
      const li = document.createElement('li');
      li.className = `flex items-center p-3 bg-white rounded-lg shadow-sm hover:bg-${categories[category].color}-100 transition-all duration-200 mb-2`;
      li.innerHTML = `
        <img src="${tab.favIconUrl || 'default.png'}" alt="icon" class="w-5 h-5 mr-3 rounded-sm">
        <span class="flex-1 truncate text-sm font-medium text-gray-800" title="${tab.title}">${tab.title}</span>
        <select class="category-select text-xs border-${categories[category].color}-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-${categories[category].color}-400">
          ${Object.keys(categories).map(cat => `<option value="${cat}" ${cat === category ? 'selected' : ''}>${categories[cat].element.parentElement.querySelector('h3 span').textContent}</option>`).join('')}
        </select>
        <button class="close-tab-button" title="Закрыть вкладку">✖</button>
      `;
      
      // Переключение вкладки
      li.querySelector('span').addEventListener('click', () => {
        chrome.tabs.update(tab.id, { active: true });
        chrome.windows.update(tab.windowId, { focused: true });
      });
      
      // Смена категории и сохранение корректировки
      li.querySelector('.category-select').addEventListener('change', async (e) => {
        const newCategory = e.target.value;
        const domain = extractDomain(tab.url);
        const domainAndPath = extractDomainAndPath(tab.url);
        
        tabCache[cacheKey] = newCategory;
        
        // Сохраняем корректировку для домена и пути
        userCorrections[domainAndPath] = newCategory;
        userCorrections[domain] = newCategory;
        domainCache[domainAndPath] = newCategory;
        domainCache[domain] = newCategory;
        
        // Увеличиваем счётчик корректировок
        correctionCounts[domainAndPath] = (correctionCounts[domainAndPath] || 0) + 1;
        correctionCounts[domain] = (correctionCounts[domain] || 0) + 1;
        
        await setStorage({ tabCache, userCorrections, correctionCounts, domainCache });
        displayTabs(tabs, model);
      });

      // Закрытие вкладки через background script
      li.querySelector('.close-tab-button').addEventListener('click', async () => {
        // Отправляем сообщение в background script для закрытия вкладки
        chrome.runtime.sendMessage({ action: 'closeTab', tabId: tab.id }, (response) => {
          if (response && response.success) {
            // Обновление списка вкладок уже инициируется через background script (refreshPopup)
          } else {
            console.error('Ошибка при закрытии вкладки:', response?.error);
            // Если произошла ошибка, всё равно обновим список вручную
            displayTabs(tabs.filter(t => t.id !== tab.id), model);
          }
        });
      });

      categories[category].element.appendChild(li);
    }
  }

  // Обновляем стили кнопок сортировки
  updateSortButtonStyles();

  await setStorage({ tabCache, domainCache });
}

// Сворачивание/разворачивание категорий
document.querySelectorAll('.category-header').forEach(header => {
  header.addEventListener('click', () => {
    const ul = header.nextElementSibling;
    ul.classList.toggle('hidden');
  });
});

// Обработчики для кнопок сортировки
document.querySelector('.sort-time-button').addEventListener('click', async () => {
  sortType = 'time';
  const model = await loadModel();
  await displayTabs(allTabs, model);
});

document.querySelector('.sort-alpha-button').addEventListener('click', async () => {
  sortType = 'alpha';
  const model = await loadModel();
  await displayTabs(allTabs, model);
});

// Обработчик для кнопки "Обновить"
document.querySelector('.refresh-button').addEventListener('click', async () => {
  // Очищаем кэш вкладок, но сохраняем domainCache
  const domainCache = (await chrome.storage.local.get('domainCache')).domainCache || {};
  await setStorage({ tabCache: {} });
  
  // Загружаем модель и новые вкладки
  const model = await loadModel();
  allTabs = await chrome.tabs.query({});
  
  // Перерисовываем список вкладок
  await displayTabs(allTabs, model);
});

// Обработчик для кнопки "Как использовать?" и модального окна
const guideButton = document.querySelector('.guide-button');
const guideModal = document.querySelector('#guide-modal');
const closeModal = document.querySelector('#close-modal');

guideButton.addEventListener('click', () => {
  guideModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  guideModal.classList.add('hidden');
});

// Закрытие модального окна при клике вне его
guideModal.addEventListener('click', (e) => {
  if (e.target === guideModal) {
    guideModal.classList.add('hidden');
  }
});

// Обработчик для переключения темы
const themeToggle = document.querySelector('#theme-toggle');
async function toggleTheme() {
  const isDark = themeToggle.checked;
  document.body.classList.toggle('dark-theme', isDark);
  await setStorage({ darkTheme: isDark });
  // Обновляем стили кнопок сортировки при смене темы
  updateSortButtonStyles();
}

themeToggle.addEventListener('change', toggleTheme);

// Загрузка сохранённого состояния темы и начальное отображение вкладок
(async () => {
  const { darkTheme = false } = await chrome.storage.local.get('darkTheme');
  themeToggle.checked = darkTheme;
  document.body.classList.toggle('dark-theme', darkTheme);

  const model = await loadModel();
  allTabs = await chrome.tabs.query({});
  await displayTabs(allTabs, model);
})();

// Обработчик сообщений от background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'closeTab') {
    const tabId = message.tabId;
    chrome.tabs.remove(tabId, () => {
      const response = { success: true };
      if (chrome.runtime.lastError) {
        console.error('Ошибка при закрытии вкладки:', chrome.runtime.lastError);
        response.success = false;
        response.error = chrome.runtime.lastError.message;
      }
      // Отправляем сообщение в popup для обновления списка вкладок
      chrome.runtime.sendMessage({ action: 'refreshPopup' });
      sendResponse(response); // Всегда отправляем ответ
    });
    return true; // Указываем, что ответ асинхронный
  }
});