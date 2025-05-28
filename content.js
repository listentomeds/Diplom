const extractPageContent = () => {
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
  };
  
  chrome.runtime.sendMessage({ type: 'pageContent', content: extractPageContent() });