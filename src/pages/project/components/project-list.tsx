import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { projectAtom } from 'atoms/project'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { getProjectDetail, getProjects } from 'services/project.service'
import { Project } from '../project.type'
import ProjectCard from './project-card'
import styles from '../project.module.scss'

const ProjectList = () => {
  const setProject = useSetRecoilState(projectAtom)
  const { data, isLoading, isError, error } = useQuery<Project[], Error>(['projects'], getProjects)

  const {
    data: detail,
    isLoading: detailLoading,
    refetch: getProjectDetailById
  } = useQuery<Project[], Error>(['projects-detail'], (id: any) => getProjectDetail(id), { enabled: false })

  useEffect(() => {
    data && setProject(data)
  }, [data])

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    console.error(error)
    return <div>Error: {error.message}</div>
  }

  return (
    <Box>
      <Box className={styles.project}>
        {data?.map(project => (
          <li key={project.id}>
            <ProjectCard project={project} onClick={getProjectDetailById} />
          </li>
        ))}
      </Box>
      <ProjectList />
    </Box>
  )
}

export default ProjectList
