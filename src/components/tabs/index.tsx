import { useState } from 'react'
import styles from './tabs.module.scss'

const Tabs = ({ data }: any) => {
  const [tab, setTab] = useState(data[0])
  const onClickTab = (tab: string) => {
    setTab(tab)
  }
  return (
    <ul className={styles['tab-list']}>
      {data.map((x: any) => (
        <li
          onClick={() => onClickTab(x.title)}
          className={x.title === tab ? styles['active-item'] : styles['tab-item']}
        >
          {x.title}
        </li>
      ))}
    </ul>
  )
}

export default Tabs
