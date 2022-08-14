import { pageInit, cut, initRankingList, adddelegators } from './1.js';

// 初始化页面
pageInit();

// 直播右侧选项卡切换
cut();

// 控制视频播放
adddelegators();
adddelegators(".CompetitionBottomF>a", 0.2, ".sinatv");

// 排行榜移入移出效果
initRankingList()