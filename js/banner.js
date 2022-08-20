(function () {
  const imgData = [
    {
      imgpath: "./imgs/1.webp",
      id: 1,
      title: "我带着数十万大奖，在这个夏天等你~",
      color: "103, 137, 159",
    },
    {
      imgpath: "./imgs/2.webp",
      id: 2,
      title: "为喜欢的动画配音吧！",
      color: "107, 105, 113",
    },
    {
      imgpath: "./imgs/3.webp",
      id: 3,
      title: "谁能拒绝脆皮烤五花呢ε==(づ′▽`)づ",
      color: "177, 107, 58",
    },
    {
      imgpath: "./imgs/4.webp",
      id: 4,
      title: "不好意思，这次一定要帅到你",
      color: "73, 66, 64",
    },
    {
      imgpath: "./imgs/5.webp",
      id: 1,
      title: "打卡中国动画100年，赢千元动画礼盒！",
      color: "69, 89, 74",
    },
    {
      imgpath: "./imgs/6.webp",
      id: 6,
      title: "要来玩一场数学的生命游戏吗？",
      color: "23,15,11",
    },
    {
      imgpath: "./imgs/7.webp",
      id: 7,
      title: "身 法 教 学",
      color: "85, 52, 30",
    },
    {
      imgpath: "./imgs/8.webp",
      id: 8,
      title: "芬达搞新口味   猴？果？猴面包果？",
      color: "213, 69, 37",
    },
    {
      imgpath: "./imgs/9.webp",
      id: 9,
      title: "《Fate/Zero》名场面放映十周年",
      color: "58, 83, 112",
    },
    {
      imgpath: "./imgs/1.webp",
      id: 1,
      title: "我带着数十万大奖，在这个夏天等你~",
      color: "103, 137, 159",
    },
  ];
  const container = document.querySelector(".container");
  const imgBox = document.querySelector(".img-box");
  const houtui = document.querySelector(".houtui");
  const qianjin = document.querySelector(".qianjin");
  const title = document.querySelector(".title");
  const mengceng = document.querySelector(".mengceng");
  const li = document.querySelectorAll(".box-footer li");
  // 第几个
let step = 0;

  title.innerText = imgData[step].title;
  mengceng.style.background = `rgb(${imgData[step].color})`;

  imgData.forEach((item) => {
    const str1 = `<img src="${item.imgpath}" />`;
    imgBox.innerHTML += str1;
  });
  const next = () => {
    if (step == imgData.length - 1) {
      step = 0;
      imgBox.style.transitionDuration = "0s";
      imgBox.style.transform = "translateX(0px)";
      let temp = imgBox.offsetWidth;
    }
    step++;
    imgBox.style.transitionDuration = "0.3s";
    imgBox.style.transform = `translateX(${
      -step * imgBox.offsetWidth + 1.5
    }px)`;
    fenyeqi();
    changetitle();
    changecolor();
  };
  // 后退
  const pre = () => {
    if (step == 0) {
      step = imgData.length - 1;
      imgBox.style.transitionDuration = "0s";
      imgBox.style.transform = `translateX(${-step * imgBox.offsetWidth}px)`;
      let temp = imgBox.offsetWidth;
    }
    step--;
    imgBox.style.transitionDuration = "0.3s";
    imgBox.style.transform = `translateX(${
      -step * imgBox.offsetWidth - 1.5
    }px)`;
    fenyeqi();
    changetitle();
    changecolor();
  };
  // 自动播放
  let autoPlay = setInterval(next, 2000);

  // 绑定前进
  qianjin.addEventListener("click", () => {
    next();
  });
  // 绑定后退
  houtui.addEventListener("click", () => {
    pre();
  });
  // 鼠标移入暂停
  container.addEventListener("mouseenter", () => {
    clearInterval(autoPlay);
  });
  // 鼠标移出继续
  container.addEventListener("mouseleave", () => {
    autoPlay = setInterval(next, 2000);
  });
  // 改变分页器
  const fenyeqi = function () {
    let temp = step;
    if (step == imgData.length - 1) temp = 0;
    li.forEach((item, index) => {
      item.className = index === temp ? "active" : "";
    });
  };
  // 改变标题
  const changetitle = function () {
    title.innerText = imgData[step].title;
  };
  // 改变颜色
  const changecolor = function () {
    mengceng.style.background = `rgb(${imgData[step].color})`;
  };

  //点击分页器实现切换
  li.forEach((item,index)=>{
    item.onclick=function(){
      if(step===index)return
      step = index
      imgBox.style.transitionDuration = "0.3s";
      imgBox.style.transform = `translateX(${-step * imgBox.offsetWidth-1.5}px)`;
      fenyeqi()
    }
  })
})();
