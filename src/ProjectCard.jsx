import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <>
            <div class="ui card" id="card">
                <a class="image" href={project.url}>
                    <img src={project.image} />
                </a>
                <div class="content">
                    <h3 class="ui header" id="card-header"><a href={project.url}>{project.name}</a>
                    </h3>

                    <div class="description">{project.description}</div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;