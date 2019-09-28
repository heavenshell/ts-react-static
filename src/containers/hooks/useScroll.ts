import { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import scroll from 'react-scroll'

type UseScope = Pick<RouteComponentProps, 'history' | 'location'>

export const useScroll = ({ history, location }: UseScope) => {
  const hash = location.hash ? decodeURIComponent(location.hash) : ''
  useEffect(() => {
    if (hash && hash.match(/^#/)) {
      // Remove '#'
      const id = hash.slice(1)
      if (scroll.scroller.get(id)) {
        scroll.scroller.scrollTo(id, {
          smooth: false,
        })
      }
    }
  }, [hash, history])
}
