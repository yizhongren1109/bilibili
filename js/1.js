import {
  videoData,
  barrage,
  vs,
  Livebarrage,
  cartoonbarrage,
  seobarrage,
  sinatvData,
  cartoonData,
  FeatureData,
  bangumData,
  bangumstateData,
  ComicData,
} from "./const.js";

//顶部动画
(function () {
  //绑定移入移出事件===========================================
  const addMouseEnter = function addMouseEnter() {
    let imgh = document.querySelectorAll(".first>a");

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
    /*     let str = "";
     videoData.forEach((item, index) => {
      // (page - 1) * pageSize <= index && index < page * pageSize
      // 第一页0-5
      // 第二页6-11
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
    });  */

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

  function renderBarrage(danmuList = ".first>a", vsdata = barrage) {
    let danmubox = document.querySelectorAll(danmuList),
      aaa = null;
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
      vsdata.forEach((item1, index1) => {
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

  //推广区域移入移出事件====================================
  const adddelegators = function adddelegators(
    imghClassName = ".delegatorsB>a",
    opacity = 0.2,
    transitionClassName = ".transition"
  ) {
    let imgh = document.querySelectorAll(imghClassName);

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
  adddelegators();

  //直播页面换一换效果=======================================================
  let paper = 1,
    paperitems = 8;
  let broadcastFooter = document.querySelector(".broadcastFooter");
  let btn2 = document.querySelector(".broadcastHeaderR>button");
  let svg2 = btn2.querySelector("svg");

  const sinatvRender = function sinatvRender() {
    let str = ``;
    sinatvData.forEach((item, index) => {
      const { src, imgsrc, videosrc, num, vnum, time, namesrc, title, name } =
        item;
      if ((paper - 1) * paperitems <= index && index < paper * paperitems) {
        str += `              <div class="broadcastFooterF">
          <a
            href="${src}"
            target="_blank"
          >
            <div id="img4">
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
    
          <div class="broadcastFootertv">
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
          <div class="broadcastFootertvtext">
            <h3>
              <a
                href="${src}"
              >
                <div>
                  <img src="./imgs/live.gif" alt="" />
                  <span>直播中</span>
                </div>
                <span>${title}</span>
              </a>
            </h3>
            <div>
              <a
                href="${namesrc}"
              >
                <svg class="bili-video-card__info--owner__up">
                  <use xlink:href="#widget-up"></use>
                </svg>
                <span>${name}</span>
              </a>
            </div>
          </div>
        </div>`;
      }
    });
    broadcastFooter.innerHTML = str;
  };
  sinatvRender();
  renderBarrage(".broadcastFooterF>a", Livebarrage);
  btn2.onclick = function () {
    svg2.style.transform == "rotate(360deg)"
      ? (svg2.style.transform = "rotate(0deg)")
      : (svg2.style.transform = "rotate(360deg)");
    paper++;

    if (paper > sinatvData.length / paperitems) {
      paper = 1;
    }

    sinatvRender();
    adddelegators(".broadcastFooterF>a", 0.2, ".broadcastFootertv");
    renderBarrage(".broadcastFooterF>a", Livebarrage);
  };
  //推广弹幕
  renderBarrage(".delegatorsB>a", seobarrage);
  //赛事区域移入移出事件==========================================

  adddelegators(".CompetitionBottomF>a", 0.2, ".sinatv");
  //弹幕
  renderBarrage(".CompetitionBottomF>a", vs);
  //直播左移入移出事件==========================================

  adddelegators(".broadcastFooterF>a", 0.2, ".broadcastFootertv");

  //直播右侧选项卡切换=================================================================================================
  const cut = function cut(
    ulclassName = ".broadcastRight>ul",
    itemclassName = ".item",
    idName = "data-index",
    aclassName = "active"
  ) {
    let ul = document.querySelector(ulclassName);
    let li = ul.querySelectorAll("li");
    let item = document.querySelectorAll(itemclassName);
    ul.addEventListener("click", (e) => {
      if (e.target.tagName == "LI") {
        let type = e.target.getAttribute(idName);

        item.forEach((item, index) => {
          const key = index == type ? "add" : "remove";
          item.classList[key](aclassName);
          li[index].classList[key](aclassName);
          /*           if (index == type) {

          } else {
            item.classList.remove("active");
            li[index].classList.remove("active");
          } */
        });
      }
    });
  };
  cut();
  //漫画右侧选项卡切换=======================================
  cut(".ComicRight>ul", ".items", "data-id", "arise");

  //排行榜移入移出效果=========================================================================================================
  const appear = document.querySelectorAll(".Ranking>li");

  appear.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      // e.target.children[0].style.display = "block";
      e.target.children[0].style.opacity = 1;
      e.target.children[0].style.bottom = e.target.offsetHeight + 5 + "px";

      e.target.children[0].style.visibility = "visible";
    });
    item.addEventListener("mouseleave", (e) => {
      e.target.children[0].style.bottom = e.target.offsetHeight + "px";

      e.target.children[0].style.visibility = "hidden";
      e.target.children[0].style.opacity = 0;
      // e.target.children[0].style.display = "none";
    });
  });

  //导航栏直播过渡==============================================
  const navtrans = function navtrans(
    sintvH = ".Satellite",
    sintv = ".Satellitetv"
  ) {
    let Satellite = document.querySelector(sintvH),
      Satellitetv = document.querySelector(sintv);

    Satellitetv.addEventListener("mouseenter", function () {
      Satellite.style.visibility = "visible";
      Satellite.style.opacity = 1;
      Satellite.style.top = "100%";
      Satellite.addEventListener("mouseenter", function () {
        Satellite.style.visibility = "visible";
        Satellite.style.opacity = 1;
        Satellite.style.top = "100%";
      });
    });
    Satellitetv.addEventListener("mouseleave", function () {
      Satellite.style.visibility = "hidden";
      Satellite.style.opacity = 0;
      Satellite.style.top = "80%";
      Satellite.addEventListener("mouseleave", function () {
        Satellite.style.visibility = "hidden";
        Satellite.style.opacity = 0;
        Satellite.style.top = "80%";
      });
    });
  };
  navtrans();
  //导航栏游戏中心过渡=================================================================
  navtrans(".gameCenter", ".gameCentertv");
  //导航栏漫画过渡================================================
  navtrans(".animator", ".animatortv");

  //导航栏下载过渡=====================================================
  navtrans(".down", ".cancels");
  //导航栏大会员过渡========================================
  navtrans(".bigVip", ".bigViptv");
  //导航栏消息过渡============================================
  navtrans(".news", ".newstv");
  //导航栏投稿过渡==========================================
  navtrans(".contribute", ".contributetv");
  //动画页面换一换效果
  let cartoonLeftFooter = document.querySelector(".cartoonLeftFooter");
  let btn3 = document.querySelector(".cartoonLeftHerderR>button");
  let svg3 = btn3.querySelector("svg");
  let cartpaper = 1;
  let cartitems = 8;
  const cartoonrender = function cartoonrender() {
    let str = ``;
    cartoonData.forEach((item, index) => {
      const {
        src,
        imgsrc,
        videosrc,
        num,
        vnum,
        time,
        namesrc,
        title,
        name,
        data,
      } = item;
      if (
        (cartpaper - 1) * cartitems <= index &&
        index < cartpaper * cartitems
      ) {
        str += `<div class="cartoonLeftFooterF">
            <a
              href="${src}"
              target="_blank"
            >
              <div id="img5">
                <img src="${imgsrc}" alt="" />
              </div>
              <ul class="danmu"></ul>
              <ul class="danmu"></ul>
              <ul class="danmu"></ul>
              <video src="${videosrc}" muted></video>
            </a>
            
            <div class="cartoonTv">
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
            <div class="cartoonTvText">
              <h3>
                <a
                  href="${src}"
                  >${title}</a
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
    cartoonLeftFooter.innerHTML = str;
  };
  cartoonrender();
  renderBarrage(".cartoonLeftFooterF>a", cartoonbarrage);
  btn3.onclick = function () {
    svg3.style.transform == "rotate(360deg)"
      ? (svg3.style.transform = "rotate(0deg)")
      : (svg3.style.transform = "rotate(360deg)");
    // cartpaper++;

    if (cartoonData.length > cartpaper * cartitems) {
      cartpaper++;
    } else {
      cartpaper = 1;
    }
    // if (cartpaper > cartoonData.length / cartitems) {
    //   cartpaper = 1;
    // }
    cartoonrender();
    adddelegators(".cartoonLeftFooterF>a", 0.2, ".cartoonTv");
    renderBarrage(".cartoonLeftFooterF>a", cartoonbarrage);
  };
  //动画移入移出=========================================
  adddelegators(".cartoonLeftFooterF>a", 0.2, ".cartoonTv");

  //导航动态选项卡=====================================
  const ramcut = function ramcut() {
    let ul = document.querySelector(".ram>ul");
    let li = ul.querySelectorAll("li");
    let item = document.querySelectorAll(".ramItem");
    ul.addEventListener("click", (e) => {
      if (e.target.tagName == "LI") {
        let type = e.target.getAttribute("data-index");
        //判断是否包含动态两个字
        for (let i = 0; i < ul.children.length; i++) {
          ul.children[i].innerText = ul.children[i].innerText.substr(0, 2);
        }

        if (e.target.innerText.indexOf("动态") == -1) {
          //ul.child.innerText=e.target.innerText.substr(0,2)
          e.target.innerText.replace(
            e.target.innerText,
            (e.target.innerText += "动态")
          );
        }

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
  ramcut();
  //导航动态过渡===========================================
  navtrans(".ram", ".ramtv");

  //专栏换一换=================================================
  let FeatureFooter = document.querySelector(".FeatureFooter");
  let btn4 = document.querySelector(".FeatureHeaderR");
  let svg4 = btn4.querySelector("svg");
  //页数
  let Featurepaper = 1;
  //每页的个数
  let Featureitems = 12;
  const Featurerender = function Featurerender() {
    let str = ``;
    FeatureData.forEach((item, index) => {
      const { src, imgsrc, title, name, data } = item;
      if (
        ((Featurepaper - 1) * Featureitems <= index) &
        (index < Featurepaper * Featureitems)
      ) {
        str += `<div class="FeatureFooterItem">
        <a
          href="${src}"
        >
          <div>
            <img src="${imgsrc}" alt="" />
          </div>
        </a>
        <div class="pictureR">
          <a href="" class="pictureRT">
            <h3>${title}</h3>
          </a>
          <p>${name}</p>
          <a href="" class="pictureRB">
            <svg class="bili-article-card__icon">
              <use xlink:href="#widget-up"></use>
            </svg>
            <p>${data}</p>
          </a>
        </div>
      </div>`;
      }
    });
    FeatureFooter.innerHTML = str;
  };
  Featurerender();
  btn4.onclick = function () {
    svg4.style.transform == "rotate(360deg)"
      ? (svg4.style.transform = "rotate(0deg)")
      : (svg4.style.transform = "rotate(360deg)");
    if (FeatureData.length > Featurepaper * Featureitems) {
      Featurepaper++;
    } else {
      Featurepaper = 1;
    }
    Featurerender();
  };

  //番剧动态换一换===============================================
  let DynamicFooter = document.querySelector(".DynamicFooter");
  let btn5 = document.querySelector(".DynamicHeaderR>button");
  let svg5 = btn5.querySelector("svg");
  //页数
  let Dynamicpaper = 1;
  let Dynamicitem = 10;
  const bangumrender = function bangumrender() {
    let str = ``;
    bangumData.forEach((item, index) => {
      const { src, imgsrc, num, vnum, title } = item;
      if (
        ((Dynamicpaper - 1) * Dynamicitem <= index) &
        (index < Dynamicpaper * Dynamicitem)
      ) {
        str += `<div class="DynamicFooterF">
        <a
          href="${src}"
          target="_blank"
        >
          <div id="img6">
            <img src=${imgsrc} alt="" />
          </div>
        </a>
  
        <div class="DynamicFooterTV">
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
        </div>
        <div class="DynamicFooterText">
          <h3>
            <a
              href="${src}"
              >${title}</a
            >
          </h3>
        </div>
      </div>`;
      }
    });
    DynamicFooter.innerHTML = str;
  };
  bangumrender();
  btn5.onclick = function () {
    svg5.style.transform == "rotate(360deg)"
      ? (svg5.style.transform = "rotate(0deg)")
      : (svg5.style.transform = "rotate(360deg)");
    if (bangumData.length > Dynamicpaper * Dynamicitem) {
      Dynamicpaper++;
    } else {
      Dynamicpaper = 1;
    }
    bangumrender();
  };
  //导航栏效果========================================================================================================
  //节流函数
  const throttle = function throttle(func, wait) {
    if (typeof func !== "function")
      throw new TypeError("func must be an function");
    if (typeof wait !== "number") wait = 300;
    let timer,
      previous = 0;
    return function proxy(...params) {
      let now = +new Date(),
        remaining = wait - (now - previous),
        self = this,
        result;
      if (remaining <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        result = func.call(self, ...params);
        previous = now;
      } else if (!timer) {
        timer = setTimeout(() => {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          result = func.call(self, ...params);
          previous = +new Date();
        }, remaining);
      }
      return result;
    };
  };
  let html = document.documentElement;
  let navigation = document.querySelector(".navigation");
  let navigationLeft = document.querySelectorAll(".navigationLeft>ul>li>a");
  let navigationRight = document.querySelectorAll(".navigationRight>ul>li>a");
  let searchBar = document.querySelector(".searchBar");
  let inp = searchBar.querySelector("input");
  const fixed = function fixed() {
    if (html.scrollTop > 200) {
      navigation.style.background = "#fff";
      navigation.style.borderBottom = "2px solid #e0e0e0";
      navigationLeft.forEach((item, index) => {
        item.style.color = "#18191c";
        navigationRight[index].style.color = "#18191c";
      });
      searchBar.style.background = "#e3e5e7";
      inp.style.background = "#e3e5e7";
    } else {
      navigation.style.background = "transparent";
      navigation.style.borderBottom = "none";
      navigationLeft.forEach((item, index) => {
        item.style.color = "#fff";
        navigationRight[index].style.color = "#fff";
      });
    }
  };
  inp.onclick = () => {
    searchBar.style.background = "#fff";
  };

  // 番剧切换=========================================

  const bangumiSwitch = function () {
    const btn = document.querySelectorAll(
      ".bangumHeaderLTime .btn-item button"
    );
    const btnbg = document.querySelector(".bangumHeaderLTime .activebg");

    const bangumiItem = document.querySelectorAll(
      ".bangumFooter .bangumLeftFooterF"
    );
    btn.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        btnbg.style.left = e.target.offsetLeft + "px";
        btnbg.style.width = e.target.offsetWidth + "px";
        btn.forEach((item) => {
          item.classList.remove("button-active");
        });
        e.target.classList.add("button-active");
        if (index == 0) {
          bangumstateRender(
            bangumstateData.filter((item) => item.recently == "1")
          );
        } else {
          bangumstateRender(
            bangumstateData.filter((item) => item.week == index)
          );
        }
      });
    });
  };

  bangumiSwitch();

  //番剧动态选项卡===============================
  let bangumFooter = document.querySelector(".bangumFooter");
  const bangumstateRender = function bangumstateRender(data) {
    let str = ``;
    data.forEach((item, index) => {
      const { ep_cover, follows, plays, pub_index, title, recently } = item;
      str += `<div class="bangumLeftFooterF">
      <a
        href="https://www.bilibili.com/video/BV12a411K7mT?spm_id_from=333.1007.partition_recommend.content.click"
        target="_blank"
      >
        <div id="img5">
          <img src="${ep_cover}" alt="" />
        </div>
      </a>
  
      <div class="bangumTv">
        <div>
          <span>
            <svg class="bili-video-card__stats--icon">
              <use xlink:href="#widget-video-play-count"></use>
            </svg>
            <span>${plays}</span>
          </span>
        </div>
        <span>${follows}</span>
      </div>
      <div class="bangumTvText">
        <h3>
          <a
            href="https://www.bilibili.com/video/BV12a411K7mT?spm_id_from=333.1007.partition_recommend.content.click"
            >${title}</a
          >
        </h3>
        <div>
          <a
            href="https://www.bilibili.com/bangumi/play/ep625441?spm_id_from=333.1007.partition_recommend.content.click"
          >
            <span>更新至${pub_index}</span>
          </a>
        </div>
      </div>
    </div>`;
    });
    bangumFooter.innerHTML = str;
  };
  bangumstateRender(bangumstateData.filter((item) => item.recently == "1"));

  //漫画区域=================================
  let ComicFooter = document.querySelector(".ComicFooter");
  let btn6 = document.querySelectorAll(".ComicHeaderType>button");
  const ComicRender = function ComicRender(Data) {
    let str = ``;
    Data.forEach((item) => {
      const { ep_cover, font, title } = item;
      str += `<div class="ComicFooterfirst">
<div class="ComicFooterfirstT">
  <img src="${ep_cover}"  alt="" />
</div>
<div class="ComicFooterfirstB">
  <h3>${font}</h3>
  <p>${title}</p>
</div>
</div>`;
    });
    ComicFooter.innerHTML = str;

  };

  ComicRender(ComicData.filter((item) => item.id == "1"));
  //选项切换
  btn6.forEach((item1, index) => {
    item1.onclick = function () {
      btn6.forEach((item2) => {
        item2.classList.remove("arises");
      });
      if (index == 0) {
        ComicRender(ComicData.filter((item) => item.id == "1"));
      } else {
        ComicRender(ComicData.filter((item) => item.id == "2"));
      }
      item1.classList.add("arises");
    };
  });
  const changebtn = document.querySelector(".ComicHeaderR button");
  changebtn.onclick = () => {
    if (btn6[1].className == "arises") return;
    ComicData.reverse();
    ComicRender(ComicData.filter((item) => item.id == "1"));
  };

  //回到顶部

  const btnscroll = document.querySelector(".btn2");
  const watchScroll = function watchScroll() {
    if (html.scrollTop >= html.clientHeight) {
      btnscroll.style.visibility = "visible";
      btnscroll.style.opacity = 1;
      return;
    }
    btnscroll.style.visibility = "hidden";
    btnscroll.style.opacity = 0;
    console.log("111");
    fixed();
  };
  btnscroll.onclick = function () {
    let step = 50;
    let timer = setInterval(() => {
      html.scrollTop -= step;
      if (html.scrollTop <= 0) {
        clearInterval(timer);
        html.scrollTop = 0;
        window.onscroll = watchScroll;
      }
    }, 16);
  };
  window.onscroll = throttle(watchScroll, 500);

  //遮罩层效果===================================================
  const mask = document.querySelector(".zone-mask");
  const zone = document.querySelector(".zone");
  const innerBox = document.querySelector(".zone-mask .inner");

  zone.addEventListener("click", function () {
    mask.style.opacity = 1;
    mask.style.visibility = "visible";
    innerBox.style.right = 0;
  });
  mask.addEventListener("click", function (e) {
    mask.style.opacity = 0;
    mask.style.visibility = "hidden";
    innerBox.style.right = "-100%";
  });
  innerBox.addEventListener("click", (e) => {
    e.stopPropagation();
  });
})();
