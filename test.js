const fastGlop = require("fast-glob");
const fs = require("fs");
const allFiles = fastGlop.sync("./imgs/**/*.{mp4,webpm,jpg,png,gif.webp}");

const map = {}

allFiles.forEach((ele) => {
  const oldNmae = ele.split("/").pop().replace(/\.\w+/, "");
  const nextName = Math.random().toFixed(10).split(".")[1];

  const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  if (!reg.test(oldNmae)) return;

  map[oldNmae] = nextName;
  fs.renameSync(ele, ele.replace(oldNmae, nextName));
});

fs.writeFileSync("./map.json", JSON.stringify(map));
