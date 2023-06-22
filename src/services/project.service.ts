import axios from './axios'
import type { Project } from 'pages/project/project.type'

const ENDPOINT = '/project'

export async function getProjects() {
  const { data } = await axios.get<Project[]>(ENDPOINT)
  return data
}

export async function getProjectDetail(id: number) {
  const { data } = await axios.get<Project[]>(`${ENDPOINT}/${id}`)
  return data
}
