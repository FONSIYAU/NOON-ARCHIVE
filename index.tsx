import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StudioPage } from './components/Studio'
import './index.css'

// 简单的路由判断
const pathname = window.location.pathname

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

if (pathname.startsWith('/studio')) {
  // 如果网址里带 /studio，就渲染后台管理界面
  root.render(
    <React.StrictMode>
      <StudioPage />
    </React.StrictMode>
  )
} else {
  // 否则渲染正常的商店前台
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
