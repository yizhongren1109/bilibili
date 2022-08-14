window.onload = function () {
  var myData = [
    {
      uname: '111',
      age: 111
    },
    {
      uname: '111',
      age: 111
    },
    {
      uname: '111',
      age: 111
    },
    {
      uname: '111',
      age: 111
    },
    {
      uname: '111',
      age: 111
    },
    {
      uname: '111',
      age: 111
    },
    {
      uname: '222',
      age: 222
    },
    {
      uname: '222',
      age: 222
    },
    {
      uname: '222',
      age: 222
    },
    {
      uname: '222',
      age: 222
    },
    {
      uname: '222',
      age: 222
    },
    {
      uname: '222',
      age: 222
    },
    {
      uname: '333',
      age: 333
    },
    {
      uname: '333',
      age: 333
    },
    {
      uname: '333',
      age: 333
    },
    {
      uname: '333',
      age: 333
    },
    {
      uname: '333',
      age: 333
    },
    {
      uname: '333',
      age: 333
    },
    {
      uname: '444',
      age: 444
    }
  ]
  // 获取盒子
  const container = document.querySelector('.container')
  // 获取换一换按钮
  const btn = document.querySelector('.btn')
  // 当前页数
  let page = 1,
    // 每页多少数据
    pageSize = 6
  // 获取相应页数的数据并渲染
  function huanyihuan() {
    let str = ''
    myData.forEach((item, index) => {
      // (page - 1) * pageSize <= index && index < page * pageSize
      // 第一页0-5
      // 第二页6-11
      if ((page - 1) * pageSize <= index && index < page * pageSize) {
        str += `<div class="item">name:${item.uname}<br>age:${item.age}</div>`
      }
    })
    container.innerHTML = str
  }
  // 打开页面时自动加载第一页
  huanyihuan()
  // 绑定换一换按钮
  btn.onclick = function () {
    // 页面加一
    page++
    // 如果时最后一页了 下次刷新获取第一页
    if (page > myData.length / pageSize + 1) {
      page = 1
    }
    // 渲染数据
    huanyihuan()
  }
}
