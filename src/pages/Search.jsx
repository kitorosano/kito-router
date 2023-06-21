import { useEffect } from 'react'
import { useQueryParams } from '..'

export default function SearchPage ({ routeParams }) {
  const {limit} = useQueryParams()
  console.log('limit', limit)

  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <h1>Has buscado {routeParams.query}</h1>
  )
}
