import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <>
            <a class="ui card" id="projectcards" href={project.url}>
                <div class="ui slide masked reveal image">
                    <img src={project.image} class="visible content" />
                    <div id="cardtext" class="hidden content">
                        <h3 class="ui header" id="card-header">{project.name}</h3>
                        <p class="description">{project.description}</p>
                    </div>
                </div>
            </a>
        </>
    );
};

export default ProjectCard;