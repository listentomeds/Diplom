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