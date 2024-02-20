import React from 'react';
import { ProjectGrid, ProjectCard, ProjectImage, ProjectTitle, ProjectDescription } from './ProjectsSectionStyle';

const ProjectsSection = () => {
    // Aqui você pode substituir com dados reais ou dados de exemplo
    const projects = [
        {
            title: "Projeto 1",
            description: "Descrição do Projeto 1",
            imageUrl: "/caminho/para/imagem/do/projeto1.jpg",
        },
        // ... mais projetos
    ];

    return (
        <ProjectGrid>
            {projects.map(project => (
                <ProjectCard key={project.title}>
                    <ProjectImage src={project.imageUrl} alt={project.title} />
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectCard>
            ))}
        </ProjectGrid>
    );
};

export default ProjectsSection;
