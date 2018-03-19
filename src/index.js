import React from 'react'
import { render } from 'react-dom'
import { remote } from 'electron'
import path from 'path'
class App extends React.Component {
  componentDidMount() {
    console.log(1112)
    setTimeout(() => {
      // this.handleBtnClick()
    }, 3000)
  }

  handleBtnClick() {
    // 新窗口对应的页面的 URI 地址
    const modalPath = path.join('file://', remote.app.getAppPath(), 'dist/index.html');
    // 新窗口的大小
    let win = new remote.BrowserWindow({ width: 400, height: 320, backgroundColor: '#2e2c29' })
    win.on('close', function () {
      // 窗口被关闭时清空资源
      win = null
    })
    // 加载网页
    win.loadURL(modalPath)
    // 显示窗口
    win.show()
  }

  render() {
    return (
      <h1>this is React desktop app </h1>
    )
  }
}

render(<App />, document.getElementById('root'))
