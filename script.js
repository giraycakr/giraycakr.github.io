document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            if (!projectsContainer) return;

            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                const technologies = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <p class="description">${project.description}</p>
                    <div class="technologies">${technologies}</div>
                    <div class="project-links">
                        <a href="${project.links.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                        <a href="${project.links.demo}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});