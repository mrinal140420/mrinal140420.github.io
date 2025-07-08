document.addEventListener('DOMContentLoaded', () => {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectList = document.getElementById('project-list');
            projectList.innerHTML = projects.map(project => {
                const isLottie = project.image && project.image.endsWith('.json');

                return `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="portfolio-card">
                        <div class="card-inner">
                            <div class="card-front text-center">

                                ${
                                    isLottie
                                        ? `<dotlottie-player
                                              src="${project.image}"
                                              background="transparent"
                                              speed="1"
                                              loop
                                              autoplay
                                              style="width: 200px; height: 200px; margin-bottom: 1rem;">
                                           </dotlottie-player>`
                                        : `<img src="${project.image || 'https://dummyimage.com/300x200/eeeeee/333333.png&text=No+Image'}" 
                                               alt="${project.title}" 
                                               onerror="this.src='https://dummyimage.com/300x200/cccccc/000000.png&text=Unavailable'" 
                                               class="img-fluid mb-3">`
                                }

                                <h3>${project.title}</h3>
                                <p>${project.description}</p>
                                <div class="tags">
                                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>${project.title}</h3>
                                <p>${project.details || 'More details about this project coming soon!'}</p>
                                <div class="buttons tags">
                                    <a href="${project.github}" class="resume-btn" target="_blank">GitHub</a>
                                    ${project.demo ? `<a href="${project.demo}" class="resume-btn" target="_blank">Demo</a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        })
        .catch(error => console.error('Error loading projects:', error));
});
