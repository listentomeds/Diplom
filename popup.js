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
      { word: 'наука', weight: 2.5 },
      { word: 'knowledge', weight: 3 },
      { word: 'training', weight: 3 },
      { word: 'lecture', weight: 3 },
      { word: 'seminar', weight: 3 },
      { word: 'workshop', weight: 3 },
      { word: 'academic', weight: 4 },
      { word: 'student', weight: 3 },
      { word: 'teacher', weight: 3 },
      { word: 'professor', weight: 3 },
      { word: 'classroom', weight: 3 },
      { word: 'homework', weight: 2.5 },
      { word: 'assignment', weight: 2.5 },
      { word: 'test', weight: 2.5 },
      { word: 'quiz', weight: 2.5 },
      { word: 'syllabus', weight: 3 },
      { word: 'curriculum', weight: 3 },
      { word: 'module', weight: 3 },
      { word: 'degree', weight: 4 },
      { word: 'scholar', weight: 3 },
      { word: 'library', weight: 3 },
      { word: 'journal', weight: 3 },
      { word: 'article', weight: 2.5 },
      { word: 'thesis', weight: 3 },
      { word: 'dissertation', weight: 3 },
      { word: 'studygroup', weight: 3 },
      { word: 'webinar', weight: 4 },
      { word: 'elearning', weight: 4 },
      { word: 'platform', weight: 2.5 },
      { word: 'certification', weight: 4 },
      { word: 'diploma', weight: 4 },
      { word: 'math', weight: 3 },
      { word: 'physics', weight: 3 },
      { word: 'biology', weight: 3 },
      { word: 'chemistry', weight: 3 },
      { word: 'history', weight: 3 },
      { word: 'literature', weight: 3 },
      { word: 'language', weight: 3 },
      { word: 'grammar', weight: 2.5 },
      { word: 'vocabulary', weight: 2.5 },
      { word: 'examprep', weight: 3 },
      { word: 'skill', weight: 3 },
      { word: 'development', weight: 3 },
      { word: 'onlinecourse', weight: 4 },
      { word: 'edx', weight: 5 },
      { word: 'mit', weight: 5 },
      { word: 'stanford', weight: 5 },
      { word: 'harvard', weight: 5 },
      { word: 'openlearn', weight: 4 },
      { word: 'academyonline', weight: 4 },
      { word: 'учитель', weight: 3 },
      { word: 'студент', weight: 3 },
      { word: 'семинар', weight: 3 },
      { word: 'вебинар', weight: 4 },
      { word: 'диплом', weight: 4 },
      { word: 'сертификат', weight: 4 },
      { word: 'математика', weight: 3 },
      { word: 'физика', weight: 3 },
      { word: 'биология', weight: 3 },
      { word: 'химия', weight: 3 },
      { word: 'история', weight: 3 },
      { word: 'литература', weight: 3 },
      { word: 'язык', weight: 3 },
      { word: 'грамматика', weight: 2.5 },
      { word: 'словарь', weight: 2.5 },
      { word: 'подготовка', weight: 3 },
      { word: 'навык', weight: 3 },
      { word: 'развитие', weight: 3 },
      { word: 'библиотека', weight: 3 },
      { word: 'журнал', weight: 3 },
      { word: 'статья', weight: 2.5 },
      { word: 'диссертация', weight: 3 },
      { word: 'lecturehall', weight: 3 },
      { word: 'textbook', weight: 3 },
      { word: 'notebook', weight: 2.5 },
      { word: 'revision', weight: 2.5 },
      { word: 'tutor', weight: 3 },
      { word: 'mentor', weight: 3 },
      { word: 'scholarship', weight: 4 },
      { word: 'conference', weight: 3 },
      { word: 'symposium', weight: 3 },
      { word: 'publication', weight: 3 },
      { word: 'paper', weight: 3 },
      { word: 'experiment', weight: 3 },
      { word: 'lab', weight: 3 },
      { word: 'geography', weight: 3 },
      { word: 'astronomy', weight: 3 },
      { word: 'engineering', weight: 3 },
      { word: 'technology', weight: 3 },
      { word: 'programming', weight: 3 },
      { word: 'algorithm', weight: 3 },
      { word: 'code', weight: 3 },
      { word: 'software', weight: 3 },
      { word: 'design', weight: 3 },
      { word: 'architecture', weight: 3 },
      { word: 'art', weight: 3 },
      { word: 'philosophy', weight: 3 },
      { word: 'psychology', weight: 3 },
      { word: 'sociology', weight: 3 },
      { word: 'economics', weight: 3 },
      { word: 'law', weight: 3 },
      { word: 'medicine', weight: 3 },
      { word: 'health', weight: 3 },
      { word: 'nursing', weight: 3 },
      { word: 'therapy', weight: 3 },
      { word: 'diagnosis', weight: 3 },
      { word: 'treatment', weight: 3 },
      { word: 'реферат', weight: 2.5 },
      { word: 'презентация', weight: 3 },
      { word: 'лекторий', weight: 3 },
      { word: 'учебка', weight: 2.5 },
      { word: 'конференция', weight: 3 },
      { word: 'симпозиум', weight: 3 },
      { word: 'публикация', weight: 3 },
      { word: 'лаборатория', weight: 3 },
      { word: 'география', weight: 3 },
      { word: 'астрономия', weight: 3 },
      { word: 'инженерия', weight: 3 },
      { word: 'технология', weight: 3 },
      { word: 'программирование', weight: 3 },
      { word: 'алгоритм', weight: 3 },
      { word: 'код', weight: 3 },
      { word: 'софт', weight: 3 },
      { word: 'дизайн', weight: 3 },
      { word: 'архитектура', weight: 3 },
      { word: 'искусство', weight: 3 },
      { word: 'философия', weight: 3 },
      { word: 'психология', weight: 3 },
      { word: 'социология', weight: 3 },
      { word: 'экономика', weight: 3 },
      { word: 'право', weight: 3 },
      { word: 'медицина', weight: 3 },
      { word: 'здоровье', weight: 3 },
      { word: 'медсестра', weight: 3 },
      { word: 'терапия', weight: 3 },
      { word: 'диагноз', weight: 3 },
      { word: 'лечение', weight: 3 }
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
      'universitet.ru',
      'lms.mos.ru',
      'studfile.net',
      'studopedia.ru',
      'educont.ru',
      'znanija.com',
      'ege.sdamgia.ru'
    ],
    negativeKeywords: ['game', 'play', 'watch', 'игра', 'смотреть', 'объявление', 'товары', 'avito'],
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
      { word: 'работа', weight: 5 },
      { word: 'офис', weight: 3 },
      { word: 'собрание', weight: 3 },
      { word: 'проект', weight: 3 },
      { word: 'задача', weight: 3 },
      { word: 'расписание', weight: 2.5 },
      { word: 'бизнес', weight: 3 },
      { word: 'management', weight: 3 },
      { word: 'manager', weight: 3 },
      { word: 'admin', weight: 3 },
      { word: 'dashboard', weight: 3 },
      { word: 'control', weight: 3 },
      { word: 'settings', weight: 2.5 },
      { word: 'config', weight: 2.5 },
      { word: 'collaboration', weight: 3 },
      { word: 'workflow', weight: 3 },
      { word: 'productivity', weight: 3 },
      { word: 'organization', weight: 3 },
      { word: 'plan', weight: 3 },
      { word: 'deadline', weight: 2.5 },
      { word: 'report', weight: 3 },
      { word: 'analytics', weight: 3 },
      { word: 'data', weight: 2.5 },
      { word: 'spreadsheet', weight: 3 },
      { word: 'excel', weight: 3 },
      { word: 'presentation', weight: 3 },
      { word: 'slides', weight: 3 },
      { word: 'conference', weight: 3 },
      { word: 'zoom', weight: 4 },
      { word: 'teams', weight: 4 },
      { word: 'notion', weight: 4 },
      { word: 'monday', weight: 4 },
      { word: 'clickup', weight: 4 },
      { word: 'pipeline', weight: 3 },
      { word: 'strategy', weight: 3 },
      { word: 'operations', weight: 3 },
      { word: 'logistics', weight: 3 },
      { word: 'finance', weight: 3 },
      { word: 'accounting', weight: 3 },
      { word: 'invoice', weight: 2.5 },
      { word: 'contract', weight: 3 },
      { word: 'legal', weight: 3 },
      { word: 'hr', weight: 3 },
      { word: 'recruitment', weight: 3 },
      { word: 'employee', weight: 3 },
      { word: 'payroll', weight: 3 },
      { word: 'marketing', weight: 3 },
      { word: 'sales', weight: 3 },
      { word: 'client', weight: 3 },
      { word: 'customer', weight: 3 },
      { word: 'support', weight: 2.5 },
      { word: 'training', weight: 2.5 },
      { word: 'development', weight: 3 },
      { word: 'review', weight: 2.5 },
      { word: 'feedback', weight: 2.5 },
      { word: 'resources', weight: 3 },
      { word: 'inventory', weight: 3 },
      { word: 'supply', weight: 3 },
      { word: 'production', weight: 3 },
      { word: 'industry', weight: 3 },
      { word: 'управление', weight: 3 },
      { word: 'менеджер', weight: 3 },
      { word: 'админ', weight: 3 },
      { word: 'панель', weight: 3 },
      { word: 'настройки', weight: 2.5 },
      { word: 'коллаборация', weight: 3 },
      { word: 'продуктивность', weight: 3 },
      { word: 'организация', weight: 3 },
      { word: 'план', weight: 3 },
      { word: 'дедлайн', weight: 2.5 },
      { word: 'отчет', weight: 3 },
      { word: 'аналитика', weight: 3 },
      { word: 'данные', weight: 2.5 },
      { word: 'таблица', weight: 3 },
      { word: 'презентация', weight: 3 },
      { word: 'конференция', weight: 3 },
      { word: 'финансы', weight: 3 },
      { word: 'маркетинг', weight: 3 },
      { word: 'продажи', weight: 3 },
      { word: 'leadership', weight: 3 },
      { word: 'supervisor', weight: 3 },
      { word: 'director', weight: 3 },
      { word: 'executive', weight: 3 },
      { word: 'budget', weight: 3 },
      { word: 'forecast', weight: 3 },
      { word: 'audit', weight: 3 },
      { word: 'compliance', weight: 3 },
      { word: 'policy', weight: 3 },
      { word: 'procedure', weight: 3 },
      { word: 'regulation', weight: 3 },
      { word: 'safety', weight: 3 },
      { word: 'security', weight: 3 },
      { word: 'network', weight: 3 },
      { word: 'server', weight: 3 },
      { word: 'it', weight: 3 },
      { word: 'tech', weight: 3 },
      { word: 'software', weight: 3 },
      { word: 'hardware', weight: 3 },
      { word: 'upgrade', weight: 3 },
      { word: 'maintenance', weight: 3 },
      { word: 'repair', weight: 3 },
      { word: 'service', weight: 3 },
      { word: 'consulting', weight: 3 },
      { word: 'advisory', weight: 3 },
      { word: 'partnership', weight: 3 },
      { word: 'alliance', weight: 3 },
      { word: 'deal', weight: 3 },
      { word: 'negotiation', weight: 3 },
      { word: 'agreement', weight: 3 },
      { word: 'proposal', weight: 3 },
      { word: 'quotation', weight: 2.5 },
      { word: 'billing', weight: 2.5 },
      { word: 'payment', weight: 2.5 },
      { word: 'transaction', weight: 2.5 },
      { word: 'commerce', weight: 3 },
      { word: 'trade', weight: 3 },
      { word: 'export', weight: 3 },
      { word: 'import', weight: 3 },
      { word: 'supplychain', weight: 3 },
      { word: 'warehouse', weight: 3 },
      { word: 'distribution', weight: 3 },
      { word: 'transport', weight: 3 },
      { word: 'delivery', weight: 3 },
      { word: 'freight', weight: 3 },
      { word: 'leadership', weight: 3 },
      { word: 'руководитель', weight: 3 },
      { word: 'директор', weight: 3 },
      { word: 'бюджет', weight: 3 },
      { word: 'прогноз', weight: 3 },
      { word: 'аудит', weight: 3 },
      { word: 'соответствие', weight: 3 },
      { word: 'политика', weight: 3 },
      { word: 'процедура', weight: 3 },
      { word: 'регуляция', weight: 3 },
      { word: 'безопасность', weight: 3 },
      { word: 'сеть', weight: 3 },
      { word: 'сервер', weight: 3 },
      { word: 'айти', weight: 3 },
      { word: 'технологии', weight: 3 },
      { word: 'программное', weight: 3 },
      { word: 'аппаратное', weight: 3 },
      { word: 'обновление', weight: 3 },
      { word: 'обслуживание', weight: 3 },
      { word: 'ремонт', weight: 3 },
      { word: 'консультация', weight: 3 },
      { word: 'сделка', weight: 3 },
      { word: 'договор', word: 3 },
      { word: 'предложение', weight: 3 },
      { word: 'коммерция', weight: 3 },
      { word: 'торговля', weight: 3 },
      { word: 'экспорт', weight: 3 },
      { word: 'импорт', weight: 3 },
      { word: 'склад', weight: 3 },
      { word: 'доставка', weight: 3 },
      { word: 'job', weight: 5 },
      { word: 'vacancy', weight: 5 },
      { word: 'career', weight: 4 },
      { word: 'resume', weight: 4 },
      { word: 'cv', weight: 4 },
      { word: 'application', weight: 4 },
      { word: 'interview', weight: 4 },
      { word: 'hiring', weight: 4 },
      { word: 'position', weight: 4 },
      { word: 'role', weight: 4 },
      { word: 'employment', weight: 4 },
      { word: 'freelance', weight: 4 },
      { word: 'internship', weight: 4 },
      { word: 'remote', weight: 4 },
      { word: 'parttime', weight: 3 },
      { word: 'fulltime', weight: 3 },
      { word: 'salary', weight: 4 },
      { word: 'wage', weight: 4 },
      { word: 'benefit', weight: 3 },
      { word: 'promotion', weight: 4 },
      { word: 'recruiter', weight: 4 },
      { word: 'candidate', weight: 4 },
      { word: 'portfolio', weight: 4 },
      { word: 'experience', weight: 4 },
      { word: 'qualification', weight: 4 },
      { word: 'skillset', weight: 4 },
      { word: 'jobboard', weight: 5 },
      { word: 'linkedin', weight: 5 },
      { word: 'glassdoor', weight: 5 },
      { word: 'indeed', weight: 5 },
      { word: 'вакансия', weight: 5 },
      { word: 'работа', weight: 5 },
      { word: 'резюме', weight: 4 },
      { word: 'собеседование', weight: 4 },
      { word: 'наем', weight: 4 },
      { word: 'должность', weight: 4 },
      { word: 'роль', weight: 4 },
      { word: 'занятость', weight: 4 },
      { word: 'фриланс', weight: 4 },
      { word: 'стажировка', weight: 4 },
      { word: 'удаленно', weight: 4 },
      { word: 'неполный', weight: 3 },
      { word: 'полный', weight: 3 },
      { word: 'зарплата', weight: 4 },
      { word: 'доход', weight: 4 },
      { word: 'льготы', weight: 3 },
      { word: 'повышение', weight: 4 },
      { word: 'рекрутер', weight: 4 },
      { word: 'кандидат', weight: 4 },
      { word: 'портфолио', weight: 4 },
      { word: 'опыт', weight: 4 },
      { word: 'квалификация', weight: 4 },
      { word: 'навыки', weight: 4 }
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
      'yandex.ru',
      'tinkoff.ru',
      'sberbank.ru',
      'gazprom.ru',
      'rosneft.ru',
      'lkfl.ru',
      'moex.com',
      'avito.ru',
      'hh.ru',
      'superjob.ru'
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
      { word: 'развлечение', weight: 3 },
      { word: 'vlog', weight: 3 },
      { word: 'blog', weight: 2.5 },
      { word: 'gamer', weight: 4 },
      { word: 'esports', weight: 4 },
      { word: 'controller', weight: 3 },
      { word: 'multiplayer', weight: 3 },
      { word: 'arcade', weight: 3 },
      { word: 'rpg', weight: 3 },
      { word: 'strategy', weight: 3 },
      { word: 'simulation', weight: 3 },
      { word: 'casual', weight: 3 },
      { word: 'action', weight: 3 },
      { word: 'adventure', weight: 3 },
      { word: 'puzzle', weight: 2.5 },
      { word: 'platformer', weight: 3 },
      { word: 'festival', weight: 3 },
      { word: 'event', weight: 2.5 },
      { word: 'party', weight: 2.5 },
      { word: 'dance', weight: 3 },
      { word: 'comedy', weight: 3 },
      { word: 'drama', weight: 3 },
      { word: 'horror', weight: 3 },
      { word: 'romance', weight: 3 },
      { word: 'thriller', weight: 3 },
      { word: 'animation', weight: 3 },
      { word: 'cartoon', weight: 3 },
      { word: 'anime', weight: 4 },
      { word: 'manga', weight: 3 },
      { word: 'radio', weight: 3 },
      { word: 'dj', weight: 3 },
      { word: 'beats', weight: 3 },
      { word: 'remix', weight: 3 },
      { word: 'playlist', weight: 3 },
      { word: 'artist', weight: 3 },
      { word: 'band', weight: 3 },
      { word: 'record', weight: 3 },
      { word: 'tour', weight: 3 },
      { word: 'ticket', weight: 2.5 },
      { word: 'premiere', weight: 3 },
      { word: 'season', weight: 3 },
      { word: 'binge', weight: 3 },
      { word: 'marathon', weight: 3 },
      { word: 'popcorn', weight: 2.5 },
      { word: 'chill', weight: 2.5 },
      { word: 'relax', weight: 2.5 },
      { word: 'hobby', weight: 2.5 },
      { word: 'leisure', weight: 2.5 },
      { word: 'hulu', weight: 5 },
      { word: 'primevideo', weight: 5 },
      { word: 'soundcloud', weight: 5 },
      { word: 'vimeo', weight: 5 },
      { word: 'kinopoisk', weight: 5 },
      { word: 'ivi', weight: 5 },
      { word: 'vkvideo', weight: 4 },
      { word: 'игрок', weight: 4 },
      { word: 'стриминг', weight: 3 },
      { word: 'аниме', weight: 4 },
      { word: 'манга', weight: 3 },
      { word: 'радио', weight: 3 },
      { word: 'плейлист', weight: 3 },
      { word: 'артист', weight: 3 },
      { word: 'группа', weight: 3 },
      { word: 'тур', weight: 3 },
      { word: 'билет', weight: 2.5 },
      { word: 'cinematography', weight: 3 },
      { word: 'documentary', weight: 3 },
      { word: 'shortfilm', weight: 3 },
      { word: 'teaser', weight: 3 },
      { word: 'preview', weight: 3 },
      { word: 'behindthescenes', weight: 3 },
      { word: 'interview', weight: 3 },
      { word: 'panel', weight: 3 },
      { word: 'qanda', weight: 3 },
      { word: 'livestream', weight: 3 },
      { word: 'webcast', weight: 3 },
      { word: 'broadcast', weight: 3 },
      { word: 'channel', weight: 3 },
      { word: 'subscription', weight: 3 },
      { word: 'premium', weight: 3 },
      { word: 'trending', weight: 3 },
      { word: 'viral', weight: 3 },
      { word: 'meme', weight: 2.5 },
      { word: 'joke', weight: 2.5 },
      { word: 'prank', weight: 2.5 },
      { word: 'challenge', weight: 3 },
      { word: 'contest', weight: 3 },
      { word: 'competition', weight: 3 },
      { word: 'tournament', weight: 3 },
      { word: 'league', weight: 3 },
      { word: 'match', weight: 3 },
      { word: 'score', weight: 3 },
      { word: 'highlight', weight: 3 },
      { word: 'replay', weight: 3 },
      { word: 'clip', weight: 3 },
      { word: 'trailerpark', weight: 3 },
      { word: 'soundtrack', weight: 3 },
      { word: 'lyric', weight: 3 },
      { word: 'cover', weight: 3 },
      { word: 'acoustic', weight: 3 },
      { word: 'liveband', weight: 3 },
      { word: 'orchestra', weight: 3 },
      { word: 'jazz', weight: 3 },
      { word: 'rock', weight: 3 },
      { word: 'pop', weight: 3 },
      { word: 'hiphop', weight: 3 },
      { word: 'rap', weight: 3 },
      { word: 'reggae', weight: 3 },
      { word: 'blues', weight: 3 },
      { word: 'classical', weight: 3 },
      { word: 'opera', weight: 3 },
      { word: 'ballet', weight: 3 },
      { word: 'theater', weight: 3 },
      { word: 'playhouse', weight: 3 },
      { word: 'stage', weight: 3 },
      { word: 'performance', weight: 3 },
      { word: 'audience', weight: 3 },
      { word: 'fan', weight: 2.5 },
      { word: 'fanbase', weight: 2.5 },
      { word: 'fanart', weight: 2.5 },
      { word: 'cosplay', weight: 3 },
      { word: 'merch', weight: 2.5 },
      { word: 'poster', weight: 2.5 },
      { word: 'artwork', weight: 3 },
      { word: 'sketch', weight: 2.5 },
      { word: 'drawing', weight: 2.5 },
      { word: 'painting', weight: 2.5 },
      { word: 'sculpture', weight: 2.5 },
      { word: 'exhibition', weight: 3 },
      { word: 'gallery', weight: 3 },
      { word: 'museum', weight: 3 },
      { word: 'кинематография', weight: 3 },
      { word: 'документальный', weight: 3 },
      { word: 'короткометражка', weight: 3 },
      { word: 'предпоказ', weight: 3 },
      { word: 'интервью', weight: 3 },
      { word: 'опрос', weight: 3 },
      { word: 'вебкаст', weight: 3 },
      { word: 'канал', weight: 3 },
      { word: 'подписка', weight: 3 },
      { word: 'тренд', weight: 3 },
      { word: 'вирусный', weight: 3 },
      { word: 'шутка', weight: 2.5 },
      { word: 'розыгрыш', weight: 2.5 },
      { word: 'челлендж', weight: 3 },
      { word: 'турнир', weight: 3 },
      { word: 'лига', weight: 3 },
      { word: 'матч', weight: 3 },
      { word: 'счет', weight: 3 },
      { word: 'подборка', weight: 3 },
      { word: 'повтор', weight: 3 },
      { word: 'клип', weight: 3 },
      { word: 'саундтрек', weight: 3 },
      { word: 'текст', weight: 3 },
      { word: 'кавера', weight: 3 },
      { word: 'акустика', weight: 3 },
      { word: 'живой', weight: 3 },
      { word: 'джаз', weight: 3 },
      { word: 'рок', weight: 3 },
      { word: 'поп', weight: 3 },
      { word: 'хипхоп', weight: 3 },
      { word: 'регги', weight: 3 },
      { word: 'блюз', weight: 3 },
      { word: 'классика', weight: 3 },
      { word: 'опера', weight: 3 },
      { word: 'балет', weight: 3 },
      { word: 'театр', weight: 3 },
      { word: 'сцена', weight: 3 },
      { word: 'спектакль', weight: 3 },
      { word: 'зритель', weight: 3 },
      { word: 'фанат', weight: 2.5 },
      { word: 'косплей', weight: 3 },
      { word: 'мерч', weight: 2.5 },
      { word: 'постер', weight: 2.5 },
      { word: 'рисунок', weight: 2.5 },
      { word: 'картина', weight: 2.5 },
      { word: 'выставка', weight: 3 },
      { word: 'галерея', weight: 3 },
      { word: 'музей', weight: 3 }
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
      'rutube.ru',
      'mail.ru',
      'rambler.ru',
      'afisha.ru',
      'kassir.ru',
      'ticketland.ru',
      'tut.by'
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
  'настройки',
  'job',
  'vacancy',
  'career',
  'resume',
  'вакансия',
  'работа',
  'резюме'
];

// Простая TF-IDF токенизация
function tokenize(text) {
  return text.toLowerCase().split(/\W+/).filter(word => word.length > 2);
}

// Извлечение домена и базового пути из URL
function extractDomainAndPath(url) {
  try {
    const { hostname, pathname } = new URL(url);
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
        other: 1
      };

      // Новые веса: домен (50%), заголовки (30%), содержимое (20%)
      const DOMAIN_WEIGHT = 0.5;
      const TITLE_WEIGHT = 0.3;
      const CONTENT_WEIGHT = 0.2;

      console.log('Начальные значения scores:', scores);

      // Учет домена (30%)
      for (const [category, data] of Object.entries(categories)) {
        if (data.domains && data.domains.some(d => url.includes(d))) {
          scores[category] += 6 * DOMAIN_WEIGHT;
          console.log(`Домен ${url} соответствует ${category}, добавлено ${6 * DOMAIN_WEIGHT} к score (домен, 30%)`);
        }
      }
      console.log('Scores после учета доменов:', scores);

      // Учет заголовков (50%)
      const titleTokens = tokenize(text); // Предполагаем, что text содержит заголовок
      for (const [category, data] of Object.entries(categories)) {
        if (category === 'other') continue;
        data.keywords.forEach(({ word, weight }) => {
          if (titleTokens.includes(word)) {
            scores[category] += weight * TITLE_WEIGHT;
            console.log(`Найдено ключевое слово "${word}" в заголовке ${category}, добавлено ${weight * TITLE_WEIGHT} к score (заголовок, 50%)`);
          }
        });
        if (data.negativeKeywords) {
          data.negativeKeywords.forEach(word => {
            if (titleTokens.includes(word)) {
              scores[category] -= 2 * TITLE_WEIGHT;
              console.log(`Найдено негативное слово "${word}" в заголовке ${category}, вычтено ${2 * TITLE_WEIGHT} из score (заголовок, 50%)`);
            }
          });
        }
      }

      // Учет содержимого (20%)
      const contentTokens = tokenize(contentText);
      for (const [category, data] of Object.entries(categories)) {
        if (category === 'other') continue;
        data.keywords.forEach(({ word, weight }) => {
          if (contentTokens.includes(word)) {
            scores[category] += weight * CONTENT_WEIGHT;
            console.log(`Найдено ключевое слово "${word}" в содержимом ${category}, добавлено ${weight * CONTENT_WEIGHT} к score (содержимое, 20%)`);
          }
        });
        if (data.negativeKeywords) {
          data.negativeKeywords.forEach(word => {
            if (contentTokens.includes(word)) {
              scores[category] -= 2 * CONTENT_WEIGHT;
              console.log(`Найдено негативное слово "${word}" в содержимом ${category}, вычтено ${2 * CONTENT_WEIGHT} из score (содержимое, 20%)`);
            }
          });
        }
      }

      // Дополнительные правила с учетом новых весов
      if (categories.study.keywords.some(({ word }) => titleTokens.includes(word) || contentTokens.includes(word)) &&
          (titleTokens.includes('online') || titleTokens.includes('course') || titleTokens.includes('learn') || contentTokens.includes('онлайн') || contentTokens.includes('обучение'))) {
        scores.study += 4 * (titleTokens.includes('online') || titleTokens.includes('course') || titleTokens.includes('learn') ? TITLE_WEIGHT : CONTENT_WEIGHT);
        console.log('Обнаружен контекст обучения (online/course/learn), добавлено 4 с весом', titleTokens.includes('online') || titleTokens.includes('course') || titleTokens.includes('learn') ? TITLE_WEIGHT : CONTENT_WEIGHT, 'к study score');
      }
      if (categories.work.keywords.some(({ word }) => titleTokens.includes(word) || contentTokens.includes(word)) &&
          (titleTokens.includes('team') || titleTokens.includes('meeting') || titleTokens.includes('project') || contentTokens.includes('команда') || contentTokens.includes('проект'))) {
        scores.work += 4 * (titleTokens.includes('team') || titleTokens.includes('meeting') || titleTokens.includes('project') ? TITLE_WEIGHT : CONTENT_WEIGHT);
        console.log('Обнаружен контекст работы (team/meeting/project), добавлено 4 с весом', titleTokens.includes('team') || titleTokens.includes('meeting') || titleTokens.includes('project') ? TITLE_WEIGHT : CONTENT_WEIGHT, 'к work score');
      }
      if (categories.entertainment.keywords.some(({ word }) => titleTokens.includes(word) || contentTokens.includes(word)) &&
          (titleTokens.includes('watch') || titleTokens.includes('play') || titleTokens.includes('stream') || contentTokens.includes('смотреть') || contentTokens.includes('игра'))) {
        scores.entertainment += 4 * (titleTokens.includes('watch') || titleTokens.includes('play') || titleTokens.includes('stream') ? TITLE_WEIGHT : CONTENT_WEIGHT);
        console.log('Обнаружен контекст развлечений (watch/play/stream), добавлено 4 с весом', titleTokens.includes('watch') || titleTokens.includes('play') || titleTokens.includes('stream') ? TITLE_WEIGHT : CONTENT_WEIGHT, 'к entertainment score');
      }

      if (url.includes('watch?v=') || url.includes('play/') || url.includes('stream/')) {
        scores.entertainment += 3 * DOMAIN_WEIGHT;
        console.log('URL содержит параметры видео (watch?v/play/stream), добавлено 3 * 0.3 к entertainment score (домен)');
      }
      if (url.includes('blog/') || url.includes('article/') || url.includes('статья/')) {
        scores.study += 2 * DOMAIN_WEIGHT;
        console.log('URL содержит блог/статью, добавлено 2 * 0.3 к study score (домен)');
      }
      if (url.includes('dashboard/') || url.includes('admin/') || url.includes('панель/')) {
        scores.work += 3 * DOMAIN_WEIGHT;
        console.log('URL содержит панель/админ, добавлено 3 * 0.3 к work score (домен)');
      }

      const domainAndPath = extractDomainAndPath(url);
      for (const [correctedKey, correctedCategory] of Object.entries(userCorrections)) {
        if (correctedKey === domainAndPath || correctedKey === domain) {
          const count = correctionCounts[correctedKey] || 0;
          if (count < 3) {
            console.log(`Применена пользовательская корректировка для ${correctedKey} в категорию ${correctedCategory}`);
            return correctedCategory;
          }
        }
      }

      const maxScore = Math.max(...Object.values(scores));
      console.log('Финальные scores:', scores);
      console.log(`Максимальный score: ${maxScore}, выбранная категория: ${Object.keys(scores).find(key => scores[key] === maxScore) || 'other'}`);
      return Object.keys(scores).find(key => scores[key] === maxScore) || 'other';
    }
  };
}

// Классификация вкладки
async function classifyTab(tab, model, domainCache) {
  const text = (tab.title + ' ' + tab.url).toLowerCase();
  let pageContent = {};
  console.log('Начало классификации вкладки:', { id: tab.id, title: tab.title, url: tab.url });
  if (tab.url.startsWith('http')) { // Убираем условие tab.active, чтобы считывать содержимое всех вкладок
    try {
      const [tabInfo] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: extractPageContent
      }).catch(err => {
        console.error('Ошибка выполнения скрипта:', err);
        return [];
      });
      pageContent = tabInfo || {};
      console.log('Содержимое страницы:', pageContent);
    } catch (e) {
      console.log('Не удалось получить содержимое страницы:', e);
    }
  }

  const domain = extractDomain(tab.url);
  const domainAndPath = extractDomainAndPath(tab.url);

  if (domainCache[domain]) {
    console.log(`Кэш: домен ${domain} уже классифицирован как ${domainCache[domain]}`);
    return domainCache[domain];
  }
  if (domainCache[domainAndPath]) {
    console.log(`Кэш: путь ${domainAndPath} уже классифицирован как ${domainCache[domainAndPath]}`);
    return domainCache[domainAndPath];
  }

  if (workRelatedWords.some(word => tab.url.toLowerCase().includes(word))) {
    domainCache[domain] = 'work';
    console.log(`Обнаружено слово работы "${word}" в URL, категория установлена как work`);
    return 'work';
  }

  let category = await model.predict(text, tab.url.toLowerCase(), pageContent);
  
  for (const [cat, data] of Object.entries(categories)) {
    if (cat === 'other') continue;
    if (data.keywords.some(({ word }) => new RegExp(`\\b${word}\\b`).test(text))) {
      category = cat;
      console.log(`Переопределение категории на ${cat} из-за точного соответствия ключевого слова`);
      break;
    }
  }

  domainCache[domainAndPath] = category;
  domainCache[domain] = category;
  console.log('Финальная категория:', category, 'для URL:', tab.url);
  return category;
}

// Функция для извлечения содержимого 
function extractPageContent() {
  const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
  const metaKeywords = document.querySelector('meta[name="keywords"]')?.content || '';
  const title = document.title || '';
  const headings = Array.from(document.querySelectorAll('h1, h2')).map(h => h.textContent).join(' ') || '';
  // Извлекаем весь текст страницы, очищаем от лишних пробелов и переносов строк
  const bodyText = document.body.textContent.replace(/\s+/g, ' ').trim() || '';

  return {
    metaDescription,
    metaKeywords,
    title,
    headings,
    bodyText
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
let sortType = 'time';

// Функция сортировки вкладок
function sortTabs(tabs, sortType) {
  const sortedTabs = [...tabs];
  if (sortType === 'time') {
    sortedTabs.sort((a, b) => b.id - a.id);
  } else if (sortType === 'alpha') {
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
  console.log('Начало отображения вкладок, количество вкладок:', tabs.length);
  const cache = await chrome.storage.local.get('tabCache').catch(err => {
    console.error('Ошибка при загрузке tabCache:', err);
    return { tabCache: {} };
  });
  const domainCache = (await chrome.storage.local.get('domainCache')).domainCache || {};
  const userCorrections = (await chrome.storage.local.get('userCorrections')).userCorrections || {};
  const correctionCounts = (await chrome.storage.local.get('correctionCounts')).correctionCounts || {};
  const tabCache = cache.tabCache || {};

  Object.values(categories).forEach(cat => {
    cat.element.innerHTML = '';
    const countElement = cat.element.parentElement.querySelector('.tab-count');
    if (countElement) countElement.textContent = '';
  });

  const tabsByCategory = {
    study: [],
    work: [],
    entertainment: [],
    other: []
  };

  try {
    for (const tab of tabs) {
      const cacheKey = `${tab.id}:${tab.url}:${tab.title}`;
      let category = tabCache[cacheKey];

      if (!category) {
        category = await classifyTab(tab, model, domainCache).catch(err => {
          console.error(`Ошибка классификации вкладки ${tab.id}:`, err);
          return 'other'; // Установка по умолчанию в случае ошибки
        });
      } else {
        const domain = extractDomain(tab.url);
        if (domainCache[domain] && domainCache[domain] !== category) {
          category = domainCache[domain];
          console.log(`Переопределение категории из кэша для домена ${domain} на ${category}`);
        }
      }

      tabCache[cacheKey] = category;
      tabsByCategory[category].push({ tab, cacheKey });
    }

    for (const [category, tabList] of Object.entries(tabsByCategory)) {
      const count = tabList.length;
      const countElement = categories[category].element.parentElement?.querySelector('.tab-count');
      if (countElement) countElement.textContent = count > 0 ? count : '';

      const sortedTabList = sortTabs(tabList.map(item => item.tab), sortType);
      
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
        
        li.querySelector('span').addEventListener('click', () => {
          chrome.tabs.update(tab.id, { active: true });
          chrome.windows.update(tab.windowId, { focused: true });
        });
        
        li.querySelector('.category-select').addEventListener('change', async (e) => {
          const newCategory = e.target.value;
          const domain = extractDomain(tab.url);
          const domainAndPath = extractDomainAndPath(tab.url);
          
          tabCache[cacheKey] = newCategory;
          userCorrections[domainAndPath] = newCategory;
          userCorrections[domain] = newCategory;
          domainCache[domainAndPath] = newCategory;
          domainCache[domain] = newCategory;
          
          correctionCounts[domainAndPath] = (correctionCounts[domainAndPath] || 0) + 1;
          correctionCounts[domain] = (correctionCounts[domain] || 0) + 1;
          
          await setStorage({ tabCache, userCorrections, correctionCounts, domainCache });
          displayTabs(tabs, model);
        });

        li.querySelector('.close-tab-button').addEventListener('click', async () => {
          chrome.runtime.sendMessage({ action: 'closeTab', tabId: tab.id }, (response) => {
            if (response && response.success) {
            } else {
              console.error('Ошибка при закрытии вкладки:', response?.error);
              displayTabs(tabs.filter(t => t.id !== tab.id), model);
            }
          });
        });

        categories[category].element.appendChild(li);
      }
    }

    updateSortButtonStyles();
    await setStorage({ tabCache, domainCache }).catch(err => console.error('Ошибка сохранения в хранилище:', err));
  } catch (err) {
    console.error('Критическая ошибка в displayTabs:', err);
  }
  console.log('Конец отображения вкладок');
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
  const domainCache = (await chrome.storage.local.get('domainCache')).domainCache || {};
  await setStorage({ tabCache: {} });
  
  const model = await loadModel();
  allTabs = await chrome.tabs.query({});
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
      chrome.runtime.sendMessage({ action: 'refreshPopup' });
      sendResponse(response);
    });
    return true;
  }
});
