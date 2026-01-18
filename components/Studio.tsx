import React from 'react'
import { Studio } from 'sanity'
import config from '../sanity.config'

// 这个组件就是整个 CMS 后台的界面
export const StudioPage = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', zIndex: 9999, position: 'relative' }}>
      <Studio config={config} />
    </div>
  )
}
