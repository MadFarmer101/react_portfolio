import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <>
            <div class="ui card" id="cards">
                <div class="ui slide masked reveal image">
                    <img src={project.image} class="visible content" />
                    <div class="hidden content">
                        <h3 class="ui header" id="card-header"><a href={project.url}>{project.name}</a></h3>
                        <p class="description">{project.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;