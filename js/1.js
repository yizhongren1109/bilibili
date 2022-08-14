//顶部动画
//视频数据 弹幕数据
import { videoData, barrage } from "./const.js";

const topCon = document.querySelector(".topCon"),
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
const VIDEO_MENU = document.querySelector(".VIDEO_MENU");
let page = 1,
  // 每页多少数据
  pageSize = 6;
const render = function render() {
  const strhtml = videoData.reduce((prev, cur, index) => {
    const {
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
    } = cur;
    if ((page - 1) * pageSize <= index && index < page * pageSize) {
      prev += `<div class="first">
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
    return prev;
  }, "");
  VIDEO_MENU.innerHTML = strhtml;
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
    let aaa;
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
//
export const pageInit = () => {
  render();
  addMouseEnter();
  renderBarrage();
};

const btnDom = document.querySelector(".btn button");
const svg = btnDom.querySelector("svg");

//绑定换一换按钮
btnDom.onclick = function () {
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

//推广区域移入移出事件====================================
export const adddelegators = function adddelegators(
  imghClassName = ".delegatorsB>a",
  opacity = 0.2,
  transitionClassName = ".transition"
) {
  let imgh = document.querySelectorAll(imghClassName);
  console.log(imgh);
  imgh.forEach((item) => {
    let video = item.querySelector("video"),
      imgo = item.querySelector("img"),
      transition = item.parentNode.querySelector(transitionClassName);
    item.onmouseenter = function () {
      video.play();
      video.style.opacity = 1;
      imgo.style.opacity = 0;
      transition.style.opacity = 0;
    };
    item.onmouseleave = function () {
      video.pause();
      imgo.style.opacity = 1;
      video.style.opacity = opacity;
      transition.style.opacity = 1;
    };
  });
};


//直播右侧选项卡切换=================================================================================================
export const cut = function cut() {
  let ul = document.querySelector(".broadcastRight>ul");
  let li = ul.querySelectorAll("li");
  let item = document.querySelectorAll(".item");
  ul.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      let type = e.target.getAttribute("data-index");

      console.log(item[type]);
      item.forEach((item, index) => {
        const key = index == type ? "add" : "remove";
        item.classList[key]("active");
        li[index].classList[key]("active");
        /*           if (index == type) {

          } else {
            item.classList.remove("active");
            li[index].classList.remove("active");
          } */
      });
    }
  });
};

//排行榜移入移出效果=========================================================================================================
export const initRankingList= () => {
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
    item.addEventListener("mouseleave", (e) => {
      console.log(e.target.children[0]);
      e.target.children[0].style.bottom = e.target.offsetHeight + "px";

      e.target.children[0].style.visibility = "hidden";
      e.target.children[0].style.opacity = 0;
      // e.target.children[0].style.display = "none";
    });
  });
};
