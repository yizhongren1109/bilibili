//顶部动画

(function () {
  let topCon = document.querySelector(".topCon"),
    banner = topCon.querySelector(".banner"),
    navigation = topCon.querySelector(".navigation"),
    img = banner.querySelector("a"),
    div = topCon.querySelector(".shut");
  banner.addEventListener("click", function () {
    topCon.style.height = "310px";
    navigation.style.display = "none";
    img.style.display = "none";
    div.style.display = "block";
  });
  /*   figure.addEventListener("click", function () {
        topCon.style.height = "310px";
        navigation.style.display = "none";
        img.style.display = "none";
        div.style.display = "block";
      });
      Game.addEventListener("click", function () {
        topCon.style.height = "310px";
        navigation.style.display = "none";
        img.style.display = "none";
        div.style.display = "block";
      }); */

  div.addEventListener("click", function () {
    topCon.style.height = "155px";
    navigation.style.display = "flex";
    img.style.display = "block";
    div.style.display = "none";
  });

  //视频数据
  const videoData = [
    {
      src: "https://www.bilibili.com/video/BV1cG411W7hE?spm_id_from=333.851.b_7265636f6d6d656e64.3",
      imgsrc: "../imgs/书单分享  想要提升文笔 来看看这30本书！.jpg",
      videosrc:
        "../imgs/书单分享  想要提升文笔 来看看这30本书！ - 1.书单分享  想要提升文笔 来看看这30本书！(Av259044845,P1).mp4",
      num: "2.3万",
      vnum: 9,
      time: "00:17",
      title: "书单分享 想要提升文笔 来看看这30本书！",
      namesrc: "https://space.bilibili.com/493318926?spm_id_from=333.337.0.0",
      name: "他整天在徘徊",
      data: "· 8-1",
    },
    {
      src: "https://www.bilibili.com/video/BV1xN4y1L7K7?spm_id_from=333.851.b_7265636f6d6d656e64.5",
      imgsrc: "../imgs/【笑笑】小城夏天♥心动像风来得不知不觉~.jpg",
      videosrc:
        "../imgs/【笑笑】小城夏天♥心动像风来得不知不觉~ - 1.【笑笑】小城夏天♥心动像风来得不知不觉~(Av898988578,P1).mp4",
      num: "17.5万",
      vnum: 180,
      time: "01：30",
      title: "【笑笑】小城夏天♥心动像风来得不知不觉~",
      namesrc:
        "https://i0.hdslb.com/bfs/archive/196216ca4e1958c66c8c58de9acb68581cd78de8.jpg@672w_378h_1c.webp",
      name: "笑笑呀w",
      data: "· 7-31",
    },
    {
      src: "https://www.bilibili.com/video/BV1cG411W7hE?spm_id_from=333.851.b_7265636f6d6d656e64.3",
      imgsrc: "../imgs/HTML+CSS 逼真的云彩视差Banner.jpg",
      videosrc:
        "../imgs/HTML+CSS 逼真的云彩视差Banner - 1.1658113062450.mp4(Av428576641,P1).mp4",
      num: "3522",
      vnum: 0,
      time: "05：02",
      title: "HTML+CSS 逼真的云彩视差Banner",
      namesrc:
        "https://space.bilibili.com/435041694?spm_id_from=333.851.b_7265636f6d6d656e64.3",
      name: "时克的前端",
      data: "· 07-18",
    },
    {
      src: "https://www.bilibili.com/video/BV1VF411P7cd?spm_id_from=333.851.b_7265636f6d6d656e64.1",
      imgsrc:
        "../imgs/【单依纯 空耳】《空耳》里的远方是比相隔银河还远的距离。.jpg",
      videosrc:
        "../imgs/【单依纯 空耳】《空耳》里的远方是比相隔银河还远的距离。 - 1.【单依纯 空耳】《空耳》里的远方是比相隔银河还远的距离。(Av301719615,P1).mp4",
      num: "5.5万",
      vnum: 406,
      time: "04：18",
      title: "【单依纯 空耳】《空耳》里的远方是比相隔银河还远的距离。",
      namesrc:
        "https://space.bilibili.com/20713882?spm_id_from=333.851.b_7265636f6d6d656e64.1",
      name: "单依纯",
      data: "· 8-5",
    },
    {
      src: "https://www.bilibili.com/video/BV1j3411F7np?spm_id_from=333.851.b_7265636f6d6d656e64.4",
      imgsrc:
        "../imgs/我们相遇在夏天～♥夏日晴海♥相伴在未来的每一天！【楚鸢】.jpg",
      videosrc:
        "../imgs/我们相遇在夏天～♥夏日晴海♥相伴在未来的每一天！【楚鸢】 - 1.我们相遇在夏天～♥夏日晴海♥相伴在未来的每一天！【楚鸢】(Av513479509,P1).mp4",
      num: "33.3万",
      vnum: 9,
      time: "01：23",
      title: "我们相遇在夏天～♥夏日晴海♥相伴在未来的每一天！【楚鸢",
      namesrc: "https://space.bilibili.com/97094885",
      name: "楚鸢鸢吖",
      data: "· 07-15",
    },
    {
      src: "https://www.bilibili.com/video/BV1Da411n7Sq?spm_id_from=333.851.b_7265636f6d6d656e64.6",
      imgsrc: "../imgs/你好，我想应聘你的夏日女友.jpg",
      videosrc:
        "../imgs/你好，我想应聘你的夏日女友 - 1.你好，我想应聘你的夏日女友(Av215903011,P1).mp4",
      num: "21.3万",
      vnum: 318,
      time: "01:34",
      title: "你好，我想应聘你的夏日女友",
      namesrc:
        "https://space.bilibili.com/837470?spm_id_from=333.851.b_7265636f6d6d656e64.6",
      name: "桃核叫我桃道长",
      data: "· 7-15",
    },
    {
      src: "https://www.bilibili.com/video/BV1P94y1Q75L?spm_id_from=333.851.b_7265636f6d6d656e64.2",
      imgsrc: "../imgs/这个夏天❤不 能 没 有 水 着❤.jpg",
      videosrc:
        "../imgs/这个夏天❤不 能 没 有 水 着❤ - 1.这个夏天❤不 能 没 有 水 着❤(Av343429856,P1).mp4",
      num: "22.3万",
      vnum: 369,
      time: "01:22",
      title: "小城夏天的元气少女",
      namesrc:
        "https://space.bilibili.com/837470?spm_id_from=333.851.b_7265636f6d6d656e64.6",
      name: "一只大王哀",
      data: "· 7-15",
    },
    {
      src: "https://www.bilibili.com/video/BV1G94y1X7xr?spm_id_from=333.851.b_7265636f6d6d656e64.2&vd_source=a73fe1f4087fa6cbe06a214f5765292f",
      imgsrc:
        "../imgs/如水般柔软灵动的江南姑娘～在水乡跳一曲《小城夏天》！.jpg",
      videosrc:
        "../imgs/如水般柔软灵动的江南姑娘～在水乡跳一曲《小城夏天》！ - 1.如水般柔软灵动的江南姑娘～在水乡跳一曲《小城夏天》！(Av343656641,P1).mp4",
      num: "24.1万",
      vnum: 254,
      time: "01:27",
      title: "如水般柔软灵动的江南姑娘～在水乡跳一曲《小城夏天》！",
      namesrc:
        "https://space.bilibili.com/848008?spm_id_from=333.851.b_7265636f6d6d656e64.2",
      name: "-MyMy麦麦-",
      data: "· 7-15",
    },
    {
      src: "https://www.bilibili.com/video/BV16r4y1j7n4?spm_id_from=333.851.b_7265636f6d6d656e64.2&vd_source=a73fe1f4087fa6cbe06a214f5765292f",
      imgsrc: "../imgs/放假了！宿舍跳一下小城夏天.jpg",
      videosrc:
        "../imgs/放假了！宿舍跳一下小城夏天 - 1.放假了！宿舍跳一下小城夏天(Av771021221,P1).mp4",
      num: "24.1万",
      vnum: 254,
      time: "01:27",
      title: "放假了！宿舍跳一下小城夏天",
      namesrc:
        "https://space.bilibili.com/8366990?spm_id_from=333.851.b_7265636f6d6d656e64.2",
      name: "--欣小萌--",
      data: "· 7-17",
    },
    {
      src: "https://www.bilibili.com/video/BV1jg411Z73E?spm_id_from=333.851.b_7265636f6d6d656e64.1&vd_source=a73fe1f4087fa6cbe06a214f5765292f",
      imgsrc: "../imgs/暑假作业：我的邻家妹妹~超元气翻跳【小城夏天】.jpg",
      videosrc:
        "../imgs/暑假作业：我的邻家妹妹~超元气翻跳【小城夏天】 - 1.小城夏天(Av513615339,P1).mp4",
      num: "43.1万",
      vnum: 386,
      time: "01:20",
      title: "暑假作业：我的邻家妹妹~超元气翻跳【小城夏天】",
      namesrc:
        "https://space.bilibili.com/21648772?spm_id_from=333.851.b_7265636f6d6d656e64.1",
      name: "晓丹小仙女儿",
      data: "· 7-17",
    },
    {
      src: "https://www.bilibili.com/video/BV1jU4y1q7hT?spm_id_from=333.851.b_7265636f6d6d656e64.3",
      imgsrc:
        "../imgs/武汉的 小城夏天🔥 ，让你清凉一下！心动两下！【夜喵】.jpg",
      videosrc:
        "../imgs/武汉的 小城夏天🔥 ，让你清凉一下！心动两下！【夜喵】 - 1.武汉的 小城夏天🔥 ，让你清凉一下！心动两下！【夜喵】(Av686292184,P1).mp4",
      num: "48.9万",
      vnum: 386,
      time: "01:20",
      title: "武汉的 小城夏天🔥 ，让你清凉一下！心动两下！【夜喵】",
      namesrc:
        "https://space.bilibili.com/21648772?spm_id_from=333.851.b_7265636f6d6d656e64.1",
      name: "夜喵w",
      data: "· 7-16",
    },
    {
      src: "https://www.bilibili.com/video/BV1jU4y1q7hT?spm_id_from=333.851.b_7265636f6d6d656e64.3",
      imgsrc: "../imgs/有初恋的夏天【小城夏天】.jpg",
      videosrc:
        "../imgs/有初恋的夏天【小城夏天】 - 1.有初恋的夏天【小城夏天】(Av471310247,P1).mp4",
      num: "12.7万",
      vnum: 354,
      time: "01:20",
      title: "有初恋的夏天【小城夏天】",
      namesrc:
        "https://space.bilibili.com/5142241?spm_id_from=333.851.b_7265636f6d6d656e64.1",
      name: "绫濑双双",
      data: "· 7-25",
    },
  ];
  //弹幕数据
  const barrage = [
    "地板都变形了",
    "王晓佳：对对对",
    "今日无事，勾栏听曲",
    "光看这个人，这个景就甜",
    "好像“叶青”",
    "这 背景在动 是认真的吗.",
    "我全都要!!!",
    "大哥，哪个工地",
    "动作挺有力量",
    "有一个瞬间眉眼像极了13年前的田中千绘",
    "土木是认真的吗？",
    "我也看到桥弯曲了哈哈哈",
    "死去的回忆突然攻击我！",
    "下次安全帽带起，反光背心穿起",
    "我要当项目经理",
    "101设计院等你",
    "诡计多端的土木hr",
    "美女无论什么发都好看哈哈哈哈哈",
    "我相信大哥会越跳越好的",
    "地面也跟着跳？？？",
    "又想骗我去工地搬砖",
    "我姚思洋直接闷了",
    "好好一个女孩叫大哥",
    "啊啊啊～美丽可爱的up，求同款裙子链接",
    "这是看过跳的最像的",
    "还是练过舞蹈在来比较好",
    "严禁穿拖鞋、高跟鞋进入施工现场",
    "我魏家文行不更名坐不改姓",
    "讲真的，我在工地那么多年，没见过这么好看的",
    "青涩的可爱！喜欢",
    "卧槽，无情，我都连看三遍了",
    "三分钟之内，我要这个甜妹的全部资料，谢谢",
    "专业不决定事业",
    "你们的老婆都好漂亮啊",
    "姐姐贴贴",
    "这明明不是大哥啊",
    "转身动作是错的。。。",
    "后面的背景真好看",
    "新老婆+1",
    "这里是哪里",
    "哎呦不错哦",
    "有几个角度好像宣美啊",
    "今日无事，勾栏听曲",
    "我金博涵行不更名坐不改姓",
    "搬个砖我看看",
    "还是王心凌跳得好",
    "啊啊，求同款裙子呀",
    "人好看卷直都一样",
    "卧槽，这个up主好漂亮",
    "工地防晒做的不错",
    "爱了 爱了 呜呜呜呜",
    "真的好白啊啊啊啊啊啊啊啊",
  ];

  //绑定移入移出事件===========================================
  const addMouseEnter = function addMouseEnter() {
    let imgh = document.querySelectorAll(".first>a");
    console.log(imgh);
    imgh.forEach((item) => {
      let video = item.querySelector("video"),
        imgo = item.querySelector("img"),
        transit = item.parentNode.querySelector(".transit");
      item.onmouseenter = function () {
        video.play();
        video.style.opacity = 1;
        imgo.style.opacity = 0;
        transit.style.opacity = 0;
      };
      item.onmouseleave = function () {
        video.pause();
        imgo.style.opacity = 1;
        video.style.opacity = 0.2;
        transit.style.opacity = 1;
      };
    });
  };
  let VIDEO_MENU = document.querySelector(".VIDEO_MENU"),
    btn = document.querySelector(".btn button"),
    svg = btn.querySelector("svg");
  // 当前页数
  let page = 1,
    // 每页多少数据
    pageSize = 6;
  const render = function render() {
    let str = "";
    videoData.forEach((item, index) => {
      // (page - 1) * pageSize <= index && index < page * pageSize
      // 第一页0-5
      // 第二页6-11
      let {
        src,
        imgsrc,
        videosrc,
        num,
        vnum,
        time,
        title,
        namesrc,
        name,
        data,
      } = item;
      if ((page - 1) * pageSize <= index && index < page * pageSize) {
        str += `<div class="first">
        <a
          href="${src}"
          target="_blank"
        >
          <div id="img">
            <img
              src="${imgsrc}"
              alt=""
            />
          </div>
          <ul class="danmu"></ul>
          <ul class="danmu"></ul>
          <ul class="danmu"></ul>
          <video
            src="${videosrc}"
            muted
          ></video>
        </a>
   
        <div class="transit">
          <div>
            <span>
              <svg class="bili-video-card__stats--icon">
                <use xlink:href="#widget-video-play-count"></use>
              </svg>
              <span>${num}</span>
            </span>
            <span>
              <svg class="bili-video-card__stats--icon">
                <use xlink:href="#widget-video-danmaku"></use>
              </svg>
              <span>${vnum}</span>
            </span>
          </div>
          <span>${time}</span>
        </div>
        <div class="introduce">
          <h3>
            <a href="${src}">${title}</a
            >
          </h3>
          <div>
            <a
              href="${namesrc}"
            >
              <svg class="bili-video-card__info--owner__up">
                <use xlink:href="#widget-up"></use>
              </svg>
              <span>${name}</span>
              <span>${data}</span>
            </a>
          </div>
        </div>
      </div>`;
      }
    });
    VIDEO_MENU.innerHTML = str;
  };

  render();
  addMouseEnter();
  renderBarrage();
  //绑定换一换按钮
  btn.onclick = function () {
    svg.style.transform == "rotate(360deg)"
      ? (svg.style.transform = "rotate(0deg)")
      : (svg.style.transform = "rotate(360deg)");
    // 页面加一
    page++;
    // 如果时最后一页了 下次刷新获取第一页
    if (page > videoData.length / pageSize) {
      page = 1;
    }
    // 渲染数据
    render();
    addMouseEnter();
    renderBarrage();
  };
  //弹幕js=========================================================

  function renderBarrage() {
    let danmubox = document.querySelectorAll(".first>a");
    //弹幕
    // 随机颜色
    function setColor() {
      return `rgb(${parseInt(Math.random() * 256)},${parseInt(
        Math.random() * 256
      )},${parseInt(Math.random() * 256)})`;
    }
    // 获取随机速度
    function setSpeed() {
      return parseInt(Math.random() * 2);
      // 0正常
      // 1快速
    }
    danmubox.forEach((item) => {
      let danmu = item.querySelectorAll(".danmu");
      barrage.forEach((item1, index1) => {
        // 将数据分别给三个danmu加入数据
        danmu.forEach((item2, index2) => {
          // 将数据分成三份
          if (index1 % 3 == index2) {
            // 给li添加字体颜色 自定义一个属性espeed（速度）
            item2.innerHTML += `<li style="margin-left:50px;color:${setColor()};" espeed="${setSpeed()}">${item1}</li>`;
          }
        });
      });
      item.addEventListener("mouseenter", (e) => {
        aaa = setInterval(() => {
          danmu.forEach((item, index) => {
            if (
              item.getBoundingClientRect().right >
              danmubox[0].getBoundingClientRect().left
            ) {
              item.style.left = item.offsetLeft - 10 + index * 2 + "px";
              item.style.opacity = 1;
            }
          });
        }, 100);
      });
      item.addEventListener("mouseleave", (e) => {
        clearInterval(aaa);
        aaa = null;
        danmu.forEach((item) => {
          item.style.opacity = 0;
        });
      });
    });
  }
  // 渲染danmu盒子（添加li数据）
  // function addData() {
  //   barrage.forEach((item1, index1) => {
  //     // 将数据分别给三个danmu加入数据
  //     danmu.forEach((item2, index2) => {
  //       // 将数据分成三份
  //       if (index1 % 3 == index2) {
  //         // 给li添加字体颜色 自定义一个属性espeed（速度）
  //         item2.innerHTML += `<li style="margin-left:50px;color:${setColor()};" espeed="${setSpeed()}">${item1}</li>`;
  //       }
  //     });
  //   });
  // }
  // addData();

  // 弹幕里的li
  // const li = document.querySelectorAll(".danmu li");
  // 绑定移入事件

  // 绑定移出事件

  //推广区域移入移出事件====================================
  const adddelegators = function adddelegators() {
    let imgh = document.querySelectorAll(".delegatorsB>a");
    console.log(imgh);
    imgh.forEach((item) => {
      let video = item.querySelector("video"),
        imgo = item.querySelector("img"),
        transition = item.parentNode.querySelector(".transition");
      item.onmouseenter = function () {
        video.play();
        video.style.opacity = 1;
        imgo.style.opacity = 0;
        transition.style.opacity = 0;
      };
      item.onmouseleave = function () {
        video.pause();
        imgo.style.opacity = 1;
        video.style.opacity = 0.2;
        transition.style.opacity = 1;
      };
    });
  };
  adddelegators();

  //赛事区域移入移出事件==========================================
  const Competition = function Competition() {
    let imgh = document.querySelectorAll(".CompetitionBottomF>a");
    imgh.forEach((item) => {
      let video = item.querySelector("video"),
        imgo = item.querySelector("img"),
        sinatv = item.parentNode.querySelector(".sinatv");
      item.onmouseenter = function () {
        video.play();
        video.style.opacity = 1;
        imgo.style.opacity = 0;
        sinatv.style.opacity = 0;
      };
      item.onmouseleave = function () {
        video.pause();
        imgo.style.opacity = 1;
        video.style.opacity = 0.5;
        sinatv.style.opacity = 1;
      };
    });
  };
  Competition();

  //直播右侧选项卡切换=========================================
  const cut = function cut() {
    let ul = document.querySelector(".broadcastRight>ul");
    let li = ul.querySelectorAll("li");
    let item = document.querySelectorAll(".item");
    ul.addEventListener("click", (e) => {
      if (e.target.tagName == "LI") {
        let type = e.target.getAttribute("data-index");
        console.log(item[type]);
        item.forEach((item, index) => {
          if (index == type) {
            item.classList.add("active");
            li[index].classList.add("active");
          } else {
            item.classList.remove("active");
            li[index].classList.remove("active");
          }
        });
      }
    });
  };
  cut();

  //排行榜移入移出效果
  const appear = document.querySelectorAll(".Ranking>li");
  console.log(appear);
  appear.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      console.log(e.target.children[0]);
      console.log(e.target.offsetHeight);
      // e.target.children[0].style.display = "block";
      e.target.children[0].style.opacity = 1;
      e.target.children[0].style.bottom = e.target.offsetHeight + 5 + "px";

      e.target.children[0].style.visibility = "visible";
    });
  });
  appear.forEach((item) => {
    item.addEventListener("mouseleave", (e) => {
      console.log(e.target.children[0]);
      e.target.children[0].style.bottom = e.target.offsetHeight + "px";

      e.target.children[0].style.visibility = "hidden";
      e.target.children[0].style.opacity = 0;
      // e.target.children[0].style.display = "none";
    });
  });
})();
