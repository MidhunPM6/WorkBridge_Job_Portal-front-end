import { useState } from 'react'
import useProfile from '../candidate/useProfile'

const useFetchJson = () => {
  const [district, setDistrict] = useState([])
  const { getLocation, getDesignation } = useProfile()
  let formatted = []

  const fetchLocation = async () => {
    const { success, response } = await getLocation()
    if (!success) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    if (Array.isArray(data.states)) {
      const districts = data.states.flatMap(state => state.districts)
      setDistrict(districts)
      formatted = districts.map(d => ({ label: d, value: d }))
    }
    return { district, formatted }
  }

  const fetchDesignation = async () => {
    const { success, response } = await getDesignation()
    if (!success) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const mapped = data.map(d => ({
      label: d.title,
      value: d.title
    }))
    return mapped
  }

  return { fetchLocation, fetchDesignation }
}

export default useFetchJson
