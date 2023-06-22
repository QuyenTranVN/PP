const ProjectCard = ({ project, onClick }: any) => {
  return <div onClick={() => onClick(project.id)}>{project.name}</div>
}

export default ProjectCard
