export { Router } from './components/Router'
export { Link } from './components/Link'
export { Route } from './components/Route'

export function useQueryParams({req} = {}) {
  const isServer = typeof window === 'undefined'
  if(isServer) return req.query

  const search = window.location.search
  const params = new URLSearchParams(search)
  return Object.fromEntries(params)
}