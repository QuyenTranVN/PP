import { useMemo, useState } from 'react'

export const useFilter = (data: any) => {
  const [filterData, setFilterData] = useState(data)
  const onClickFilter = (value: any) => {
    const filter = filterData.map((x: any) => (value.eng === x.eng ? { ...x, isActive: !x.isActive } : x))
    setFilterData(filter)
  }

  const resetFilter = () => {
    setFilterData(data)
  }

  const filterActive = useMemo(() => {
    return filterData.filter((x: any) => x.isActive)
  }, [filterData])

  return [filterData, resetFilter, onClickFilter, filterActive]
}
