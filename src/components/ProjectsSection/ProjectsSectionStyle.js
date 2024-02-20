import styled from 'styled-components';

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
`;

export const ProjectCard = styled.div`
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const ProjectTitle = styled.h3`
    margin: 0.5rem;
`;

export const ProjectDescription = styled.p`
    padding: 0 0.5rem 1rem;
`;
