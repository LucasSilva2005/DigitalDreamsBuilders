// script.js

document.addEventListener('DOMContentLoaded', loadProjects);

document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();
    postProject();
});

function postProject() {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    const project = {
        title: document.getElementById('project-title').value,
        description: document.getElementById('project-description').value,
        category: document.getElementById('project-category').value,
        images: [],
        tags: document.getElementById('project-tags').value,
        price: document.getElementById('project-price').value,
        deadline: document.getElementById('project-deadline').value
    };

    const files = document.getElementById('project-images').files;
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
            project.images.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
    }

    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    loadProjects();
}

function loadProjects() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const postedProjectsDiv = document.getElementById('posted-projects');
    postedProjectsDiv.innerHTML = '';

    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const imagesHtml = project.images.map(img => `<img src="${img}" alt="Imagem do projeto">`).join('');

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p><strong>Categoria:</strong> ${project.category}</p>
            <p><strong>Descrição:</strong> ${project.description}</p>
            <p><strong>Tags:</strong> ${project.tags}</p>
            <p><strong>Preço:</strong> ${project.price}</p>
            <p><strong>Data de Entrega:</strong> ${project.deadline}</p>
            <div class="images">${imagesHtml}</div>
            <button onclick="editProject(${index})">Editar</button>
        `;

        postedProjectsDiv.appendChild(projectDiv);
    });
}

function editProject(index) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const project = projects[index];

    document.getElementById('project-title').value = project.title;
    document.getElementById('project-description').value = project.description;
    document.getElementById('project-category').value = project.category;
    document.getElementById('project-tags').value = project.tags;
    document.getElementById('project-price').value = project.price;
    document.getElementById('project-deadline').value = project.deadline;

    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    loadProjects();
}
