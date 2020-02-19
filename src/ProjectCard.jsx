import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <>
            <div class="ui card">
                <div class="image">
                    <img src={project.image} />
                </div>
                <div class="content">
                    <h3 class="ui header"><a href={project.url}>{project.name}</a>
                    </h3>

                    <div class="description">{project.description}</div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;