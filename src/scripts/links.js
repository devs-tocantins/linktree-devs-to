async function loadLinks() {
  try {
    const response = await fetch('../data/links.json');
    const links = await response.json();

    const list = document.getElementById('links-list');
    list.innerHTML = '';

    links.forEach(link => {
      const li = document.createElement('li');
      li.className = 'link-item';
      li.innerHTML = `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer">
          ${link.title}
        </a>
      `;
      list.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao carregar links:', error);
  }
}

loadLinks();
