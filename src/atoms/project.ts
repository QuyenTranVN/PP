import { Project } from 'pages/project/project.type'
import { atom } from 'recoil'

export const projectAtom = atom<Project[]>({
  key: 'projectAtom',
  default: []
})
