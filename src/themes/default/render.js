export const renderTheme = (data, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const appDiv = document.createElement('div');
    appDiv.className = 'theme-container';

    const header = document.createElement('header');
    const profileImage = document.createElement('img');
    const profileData = {
        avatar: 'https://avatars.githubusercontent.com/u/108502844?s=200&v=4',
        name: 'Devs Tocantins',
        bio: 'Comunidade de desenvolvedores do estado do Tocantins'
    };

    profileImage.src = profileData.avatar;
    profileImage.alt = `Avatar de ${profileData.name}`;
    profileImage.className = 'avatar';

    const profileName = document.createElement('h1');
    profileName.textContent = profileData.name;

    const profileBio = document.createElement('p');
    profileBio.textContent = profileData.bio;
    profileBio.className = 'bio';

    header.appendChild(profileImage);
    header.appendChild(profileName);
    header.appendChild(profileBio);
    appDiv.appendChild(header);

    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Links principais');

    const linksList = document.createElement('ul');
    linksList.className = 'links-list';

    const linksArray = Array.isArray(data) ? data : data.links || [];

    linksArray.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'link-card';

        const textSpan = document.createElement('span');
        textSpan.textContent = link.title;

        a.appendChild(textSpan);
        li.appendChild(a);
        linksList.appendChild(li);
    });

    nav.appendChild(linksList);
    appDiv.appendChild(nav);
    container.appendChild(appDiv);
};
