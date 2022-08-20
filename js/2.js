window.onload = () => {
  const topCon = document.querySelector(".topCon");
  const bgi = document.querySelector(".bgi");
  const raindrop1 = document.querySelector(".raindrop1");
  const raindrop2 = document.querySelector(".raindrop2");
  const rwsp = document.querySelector(".person-video");
  const rwyp = document.querySelector(".person-audio");
  const sj = document.querySelector(".iphone");
  const ys = document.querySelector(".rain-audio");
  const bfzt = document.querySelector(".play-or-pause");
  const myRange = document.querySelector(".my-range");
  const nav = document.querySelector(".navigation");
  const gb = document.querySelector(".close");
  const playtv = document.querySelector(".play-tv");
  const play = document.querySelector(".play");
  const mengceng = document.querySelector(".mask");

  const setypsp = (spsrc, ypsrc) => {
    rwsp.src = spsrc;
    rwyp.src = ypsrc;
    rwsp.play();
    ypsrc == "" ? "" : rwyp.play();
  };

  myRange.addEventListener("change", (e) => {
    ys.volume = e.target.value;
  });

  let suiji = 1,
    sjShow = false,
    iszhankai = false;

  playtv.style.top = bgi.offsetHeight * 0.27 + "px";
  play.style.top = bgi.offsetHeight * 0.12 + "px";
  raindrop2.style.top = bgi.offsetHeight * 0.06 + "px";
  topCon.addEventListener("click", (e) => {
    iszhankai = true;
    topCon.style.height = bgi.offsetHeight - 1 + "px";
    topCon.style.marginTop = "0";
    nav.style.visibility = "hidden";
    const ab = setTimeout(() => {
      gb.style.display = "block";
    }, 400);
  });
  gb.addEventListener("click", (e) => {
    if (sjShow) {
      mengceng.click();
    }
    iszhankai = false;
    topCon.style.height = "196px";
    topCon.style.marginTop = "-20px";
    nav.style.visibility = "visible";
    playtv.style.top = bgi.offsetHeight * 0.27 + "px";
    play.style.top = bgi.offsetHeight * 0.12 + "px";
    raindrop2.style.top = bgi.offsetHeight * 0.06 + "px";
    gb.style.display = "none";
    e.stopPropagation();
  });

  bfzt.addEventListener("click", () => {
    if (ys.paused) {
      ys.play();
      bfzt.style.backgroundImage = "url(./imgs/animation/bofang.png)";
    } else {
      ys.pause();
      bfzt.style.backgroundImage = "url(./imgs/animation/zanting.png)";
    }
  });

  const raindrop1time = setInterval(() => {
    // 雨滴1播放
    raindrop1.play();
    // 延时雨滴2
    const raindrop2time = setTimeout(() => {
      // 雨滴2播放
      raindrop2.play();
    }, 1000);
  }, 3800);

  rwsp.addEventListener("ended", () => {
    if (suiji == 10) {
      suiji = 1;
    }
    console.log("视频播放结束");
    if (!sjShow) {
      if (suiji % 3 == 0) {
        Math.random() > 0.5
          ? setypsp(
              "./imgs/animation/fanshu.webm",
              "./imgs/animation/fanshu.mp3"
            )
          : setypsp(
              "./imgs/animation/rouyan.webm",
              "./imgs/animation/rouyan.mp3"
            );
      } else {
        setypsp("./imgs/animation/kanshu.webm", "");
      }
      suiji++;
    }
  });
  rwsp.addEventListener("click", () => {
    if (!iszhankai) {
      return;
    }
    setypsp(
      "./imgs/animation/naqishouji.webm",
      "./imgs/animation/naqishouji.mp3"
    );
    const ab = setTimeout(() => {
      sj.style.top = "2%";
    }, 800);
    sjShow = true;
    mengceng.style.display = "block";
  });
  mengceng.addEventListener("click", (e) => {
    setypsp(
      "./imgs/animation/fangxiashouji.webm",
      "./imgs/animation/fangxiashouji.mp3"
    );
    const ab = setTimeout(() => {
      sj.style.top = "100%";
    }, 300);
    sjShow = false;
    mengceng.style.display = "none";
    e.stopPropagation();
  });
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });
};
