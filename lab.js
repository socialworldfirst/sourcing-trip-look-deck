/* Sourcing Trip look lab: 10 options per look item (5 built here, 5 from Higgsfield) */
const LK='stl_lang';let LANG='zh';try{LANG=localStorage.getItem(LK)||'zh'}catch(e){}
const _t=(en,zh)=>LANG==='zh'?zh:en;
const SK='stl_lab_v1';let W={picks:{},notes:{}};try{W=Object.assign(W,JSON.parse(localStorage.getItem(SK)||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem(SK,JSON.stringify(W))}catch(e){}const s=document.getElementById('saved');if(s){s.style.opacity=1;clearTimeout(save.t);save.t=setTimeout(()=>s.style.opacity=0,900)}};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const FLAG=c=>`https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/1x1/${c}.svg`;
const FR=n=>`frames/${n}.jpg`;
const bg=n=>`style="background-image:url(${FR(n)})"`;
const fl=(c,cls='')=>`<span class="fl ${cls}" style="background-image:url(${FLAG(c)})"></span>`;
const FL5=['au','sg','th','kr','nz'];
const TT='They Believe Their Eyes',SS='A WorldFirst China Sourcing Trip';
const LOGO='<img class="lg" src="wf/wf_logo_en_hrz_rev.svg" alt=""/>';

/* ---------- 01 title cards ---------- */
const TITLE_C=[
 {n:'Aperture',z:'睁眼',i:"Black frame, a thin line, then the picture opens like eyelids into a cinema letterbox, and the title sits in the opening. The card acts out the film's name.",iz:'黑屏，一条细线，画面像睁眼一样打开成电影宽银幕，片名落在开口里。用画面演出片名。',
  h:()=>`<div class="stage tA1"><div class="ph" ${bg('waterdrop')}></div><div class="dim"></div><div class="tt"><h5>${TT}<i>.</i></h5><p>${SS}</p></div><div class="lid t"></div><div class="lid b"></div><div class="ln"></div>${LOGO}</div>`},
 {n:'Focus pull',z:'对焦',i:'The fair crowd is sharp and the title is soft, then the focus racks: the title sharpens as the footage falls away. Seeing clearly, in one camera move.',iz:'先是展会人潮清晰、片名虚焦，然后焦点转移：片名变清楚，画面虚掉。用一个镜头运动讲"看清楚"。',
  h:()=>`<div class="stage tA2"><div class="ph" ${bg('crowd')}></div><div class="tt"><h5>They Believe<br/>Their Eyes<i>.</i></h5><p>${SS}</p></div>${LOGO}</div>`},
 {n:'Four cuts',z:'四个镜头',i:"One word per hard cut on the beat: They over the fair crowd, Believe over the robot press, Their over the pink aisle, Eyes over a buyer's face. Then the full title.",iz:'跟着节拍硬切，一个镜头一个词：They 配展会人潮，Believe 配机械冲压线，Their 配粉色选品通道，Eyes 配买家的脸。最后出完整片名。',
  h:()=>`<div class="stage tA3" data-seq="420"><div class="c" ${bg('crowd')}><div class="dk"></div><h6>They</h6></div><div class="c" ${bg('press')}><div class="dk"></div><h6>Believe</h6></div><div class="c" ${bg('pink_aisle')}><div class="dk"></div><h6>Their</h6></div><div class="c" ${bg('miley')}><div class="dk"></div><h6>Eyes.</h6></div><div class="c fin on" ${bg('floor')}><div class="dk"></div><div class="tt"><h5>${TT}<i>.</i></h5><p>${SS}</p></div>${LOGO}</div></div>`},
 {n:'Knockout',z:'镂空',i:'A full WorldFirst Red ground. The footage plays only inside the giant letters and slowly pans. The most brand-forward option.',iz:'满屏万里汇红，画面只在超大字母里播放并缓慢平移。品牌感最强的一版。',
  h:()=>`<div class="stage tA4"><div class="red"></div><h5 style="background-image:url(${FR('waterdrop')})">They Believe<br/>Their Eyes</h5><p>${SS}</p>${LOGO}</div>`},
 {n:'Contact sheet',z:'印样',i:"Twelve frames from the four days land in a grid like a photographer's contact sheet, dim, and the title lands on top. It says: this really happened.",iz:'四天里的 12 个画面像摄影师的印样一样排成网格，然后压暗，片名落在上面。传达"这是真实发生的"。',
  h:()=>`<div class="stage tA5"><div class="gr">${['crowd','press','pink_aisle','tower','waterdrop','stelang_shelf','container','centre_orange','joshua_bus','vision_line','livestream','banner'].map((f,k)=>`<div style="background-image:url(${FR(f)});--d:${k*70}ms"></div>`).join('')}</div><div class="tt"><h5>${TT}<i>.</i></h5><p>${SS}</p></div>${LOGO}</div>`},
];
/* ---------- 02 caption systems ---------- */
const CAP_BG=['joshua_bus','han','tower','container'];
const CAP_C=[
 {n:'Edge tab',z:'边签',i:'Every element is a white tab that slides out from the left edge of the frame, with a red edge strip. Nothing floats mid-frame or near a face.',iz:'所有元素都是从画面左边缘滑出的白色标签，边缘一条红线。不会飘在画面中间，也不靠近人脸。',cls:'B1',
  s:[`<div class="el"><small>14 IMPORTERS</small><div class="fls" style="margin-top:.6cqw">${FL5.map(c=>fl(c)).join('')}</div></div>`,
     `<div class="el"><b>Han ${fl('au')}</b><span>Amazon growth consultant</span></div>`,
     `<div class="el"><small>DAY 2</small><b>Rongde</b><span>Kettles and lunch boxes · Zhongshan</span></div>`,
     `<div class="el"><div class="n"><em>20</em><div><b>containers a day</b><span>Weijin, Zhongshan</span></div></div></div>`]},
 {n:'Big type',z:'大字',i:'No boxes. Names, places and numbers set big in Poppins Extrabold straight on the picture, with a short red rule. The strongest presence; needs a soft dark ground at the bottom.',iz:'不用底框。人名、地点、数字直接用大号 Poppins Extrabold 压在画面上，配一条短红线。存在感最强，画面底部需要一层柔和暗部。',cls:'B2',scrim:1,
  s:[`<div class="el"><i></i><div class="fls">${FL5.map(c=>fl(c)).join('')}</div><span>14 importers, five countries</span></div>`,
     `<div class="el"><i></i><b>Han</b><span>${fl('au','s')} Amazon growth consultant</span></div>`,
     `<div class="el"><i></i><b>Rongde</b><span>Zhongshan · Day 2</span></div>`,
     `<div class="el"><i></i><b class="x">20</b><span>containers leave Weijin every day</span></div>`]},
 {n:'Manifest',z:'乘客名单',i:"The trip's own logic: delegates get their coach seat number, stops count up (Stop 4) with a progress row, numbers sit in the same card. The itinerary becomes the caption system.",iz:'用这趟行程本身的逻辑：每位团员有大巴座位号，每一站显示进度（第 4 站），数字也用同一张卡。行程本身就是字幕系统。',cls:'B3',
  s:[`<div class="el"><div class="k"><b>14</b><small>IMPORTERS</small></div><div class="vv"><div class="fls">${FL5.map(c=>fl(c)).join('')}</div><span style="margin-top:.5cqw">from five countries</span></div></div>`,
     `<div class="el"><div class="k"><small>SEAT</small><b>07</b></div><div class="vv"><b>Han ${fl('au')}</b><span>Amazon growth consultant</span></div></div>`,
     `<div class="el"><div class="k"><small>STOP</small><b>4</b></div><div class="vv"><b>Rongde · Zhongshan</b><span>Day 2 · kettles and lunch boxes</span><div class="dots">${'<i class="f"></i>'.repeat(4)+'<i></i>'.repeat(5)}</div></div></div>`,
     `<div class="el"><div class="k"><b>20</b><small>A DAY</small></div><div class="vv"><b>containers</b><span>leave Weijin, Zhongshan</span></div></div>`]},
 {n:'Red dot',z:'红点',i:'A single WorldFirst Red dot lands first and the words unroll from it. The same dot is the pin on the route map, so captions and map read as one system.',iz:'先出现一个万里汇红点，文字从红点里展开。同一个红点也是路线地图上的定位点，字幕和地图成为一套系统。',cls:'B4',scrim:1,
  s:[`<div class="el"><div class="dot"></div><div class="tx"><div class="fls">${FL5.map(c=>fl(c)).join('')}</div><span>14 importers, five countries</span></div></div>`,
     `<div class="el"><div class="dot"></div><div class="tx"><b>Han ${fl('au')}</b><span>Amazon growth consultant</span></div></div>`,
     `<div class="el"><div class="dot"></div><div class="tx"><b>Rongde</b><span>Zhongshan · Day 2</span></div></div>`,
     `<div class="el"><div class="dot"></div><div class="tx"><b>20 containers a day</b><span>Weijin, Zhongshan</span></div></div>`]},
 {n:'Split bar',z:'双色条',i:'A red block for the flag, day or number, joined to a white block for the words. Built like the WorldFirst partnership lockup: one shape for everything.',iz:'红色块放国旗、天数或数字，接一个白色块放文字。结构参照万里汇的合作 lockup，所有信息一个形状。',cls:'B5',
  s:[`<div class="el"><div class="k">14</div><div class="vv"><b>${FL5.map(c=>fl(c)).join('')}</b><span>importers from five countries</span></div></div>`,
     `<div class="el"><div class="k">${fl('au')}</div><div class="vv"><b>Han</b><span>Amazon growth consultant</span></div></div>`,
     `<div class="el"><div class="k">D2</div><div class="vv"><b>Rongde</b><span>Zhongshan · kettles and lunch boxes</span></div></div>`,
     `<div class="el"><div class="k">20</div><div class="vv"><b>containers a day</b><span>Weijin, Zhongshan</span></div></div>`]},
];
/* ---------- 03 subtitles ---------- */
const SUBL=[
 {bg:'han',who:'Han',en:"Until you're here, you're not really realising the scale of things."},
 {bg:'korean',who:'Korean client · Mandarin',en:'From Korea to the Chinese factory: convenient, and fast.',zh:'从韩国转到中国工厂，就这样很方便，然后很快'},
 {bg:'jeff',who:'Jeff · Viomi',en:'So our main business is focusing on the water purifier.'}];
const chunk=s=>{const w=s.split(' ');const o=[];for(let k=0;k<w.length;){const n=(w.length-k)===4?2:Math.min(3,w.length-k);o.push(w.slice(k,k+n).join(' '));k+=n}return o};
const SUB_C=[
 {n:'Clean white',z:'净白',i:'Netflix standard: white Poppins Medium with a soft shadow, no band, bottom centre, two lines at most. Disappears into the film.',iz:'Netflix 标准：白色 Poppins Medium，带柔和阴影，不加底条，底部居中，最多两行。融进画面。',cls:'S1',f:l=>`<div class="sub">${esc(l.en)}</div>`},
 {n:'Purple box',z:'紫底块',i:'Each line on a tight dark purple box. Reads on any background, including white factory floors, and quietly carries the brand colour.',iz:'每行字放在紧贴的深紫底块上。任何背景都清楚，包括白色厂房，也悄悄带上品牌色。',cls:'S2',f:l=>`<div class="sub"><span>${esc(l.en)}</span></div>`},
 {n:'Speaker label',z:'说话人标签',i:"The first line of each new speaker carries their name in a small red tag. In group scenes it replaces most name captions.",iz:'每位新说话人的第一句前加一个红色小标签写名字。群体场景里可以省掉大部分人名字幕。',cls:'S3',f:l=>`<div class="sub"><span class="who">${esc(l.who)}</span><br/>${esc(l.en)}</div>`},
 {n:'Original above, faint',z:'原文淡显',i:'English leads; the original Chinese sits above it, small and faint, so viewers see it was said in Mandarin. Never stacked as equals.',iz:'英文为主，中文原话放在上方，小而淡，让观众知道原话是普通话。不是两行并列。',cls:'S4',f:l=>`<div class="sub">${l.zh?`<span class="orig">${esc(l.zh)}</span>`:''}${esc(l.en)}</div>`},
 {n:'Short-form chunks',z:'短视频大字',i:'For the 9:16 cutdowns only: two or three words at a time, big and bold, in the middle third. Most social viewers watch with the sound off.',iz:'只用于 9:16 短视频：每次两三个词，大而粗，放在画面中段。社交平台观众多数静音观看。',cls:'S5',chunks:1,f:l=>`<div class="sub">${chunk(l.en).map((c,j)=>`<span class="${j?'':'on'}">${esc(c)}</span>`).join('')}</div>`},
];
/* ---------- 04 map looks ---------- */
const OSM='Map data © OpenStreetMap contributors';
const LOOK_C=[
 {n:'Atlas',z:'地图册',i:'A printed-atlas look: white land, grey water, motorways as fine black hairlines, a coordinate grid at the edges. The red route is the only colour.',iz:'印刷地图册风格：白色陆地、灰色水面，高速公路是细黑线，边缘有经纬网格。红色路线是唯一的颜色。',k:'atlas',dk:1},
 {n:'Night lines',z:'夜线',i:'Dark purple ground with every motorway in faint lilac, like the delta seen at night. The route runs in the WorldFirst belt, red into orange.',iz:'深紫底，所有高速用淡紫色细线，像夜里俯瞰珠三角。路线用万里汇飘带的红到橙。',k:'night'},
 {n:'Red ground',z:'红底',i:'The whole map on WorldFirst Red: land a lighter tint, roads in white, the route a thick white line. Unmistakably ours.',iz:'整张地图铺在万里汇红上：陆地是浅一层的红，道路白色，路线是粗白线。一看就是我们的。',k:'red'},
 {n:'Satellite',z:'卫星',i:'Real Sentinel-2 satellite imagery of the Pearl River Delta, desaturated and tinted purple so the red route reads. The most real.',iz:'真实的 Sentinel-2 珠三角卫星影像，去饱和并加紫色调，让红色路线跳出来。最真实。',k:'sat',attr:'Sentinel-2 cloudless 2016 by EOX · contains modified Copernicus Sentinel data'},
 {n:'Raised cities',z:'立体城市',i:"Guangdong's cities as raised blocks, the three trip cities lifted higher in red. A tabletop-model feel that motion graphics can still build in 2D.",iz:'广东各市做成立体块，行程经过的三个城市抬高、用红色。像桌面沙盘，动态图形用二维也能做。',k:'extrude',dk:1},
];
/* ---------- 05 map motion ---------- */
const MO_C=[
 {n:'Globe dive',z:'地球俯冲',i:'Opens on the globe: the five flags fly from home to Guangzhou, then the camera dives through China into the delta and the route starts. The opening for the route beat.',iz:'从地球开始：五面国旗从各自国家飞到广州，然后镜头穿过中国俯冲进珠三角，路线开始。适合路线段的开场。',k:'globe'},
 {n:'Belt route',z:'飘带路线',i:'The route draws as the WorldFirst belt, red into orange, stop by stop on a light map. Each stop rings out as it is reached.',iz:'路线像万里汇飘带一样，从红到橙，一站一站画出来。到站时定位点泛起一圈。',k:'belt',dk:1},
 {n:'Follow cam',z:'跟车视角',i:'Navigation-app view: the camera rides with the coach, heading up and tilted, roads sliding underneath. Short hops between factories feel like travel.',iz:'导航视角：镜头跟着大巴，车头朝上、画面倾斜，道路从下面滑过。工厂之间的短途也有在路上的感觉。',k:'follow',dk:1},
 {n:'Photo pins',z:'照片图钉',i:"As the coach reaches each stop, a frame from that stop pops from the pin and shrinks to a thumbnail. By the end the map is the film's index.",iz:'大巴每到一站，从定位点弹出那一站的画面，再缩成小图留在地图上。到最后整张地图就是影片的目录。',k:'photo',dk:1},
 {n:'Day counter',z:'天数里程',i:'The route builds day by day with a running count of day, kilometres and stops, and a strip fills Day 1 to Day 4. It gives the trip a sense of effort.',iz:'路线按天展开，实时计数：第几天、公里数、第几站，底部进度条从第一天走到第四天。让行程有分量感。',k:'days'},
];
/* ---------- Higgsfield directions (5 per item) ---------- */
const HF={
 title:[
  {n:'Eye macro',z:'瞳孔倒影',i:'Extreme close-up of an eye with the factory floor and robot arms reflected in the iris. Shoots "believe their eyes" literally.',iz:'眼睛特写，虹膜里倒映着工厂和机械臂。把"亲眼所见"直接拍出来。',m:'nano_banana_pro',p:"Extreme macro photograph of a human eye, iris in sharp focus, a modern Chinese factory floor with orange robot arms and stacked cartons reflected inside the iris. Cinematic, warm natural light, shallow depth of field, deep purple #13002D vignette. Below the eye, the title 'They Believe Their Eyes' in clean white bold geometric sans-serif (Poppins ExtraBold style), one small red #FF0051 full stop after Eyes, and a small line 'A WorldFirst China Sourcing Trip'. 16:9. No other text, no logos."},
  {n:'Coach window',z:'车窗',i:'From inside the coach at golden hour, the title printed on the window glass while Guangzhou slides past behind it.',iz:'金色时刻从大巴里往外看，片名像印在车窗玻璃上，广州城市在字后面掠过。',m:'nano_banana_pro',p:"Cinematic photograph from inside a coach bus at golden hour, looking out of the side window at the Guangzhou skyline and Canton Tower passing by with slight motion blur. The title 'They Believe Their Eyes' appears printed on the glass in clean white bold geometric sans-serif, with a small line 'A WorldFirst China Sourcing Trip' beneath. Documentary realism, natural warm light. 16:9. No other text, no logos."},
  {n:'Canton Fair LED wall',z:'广交会大屏',i:'The title on a giant LED wall inside the Canton Fair, buyers silhouetted with phones up.',iz:'广交会展馆里的巨型 LED 屏打出片名，前景是举着手机的各国买家剪影。',m:'nano_banana_pro',p:"Wide documentary photograph inside the Canton Fair exhibition hall in Guangzhou: a huge LED wall shows the title 'They Believe Their Eyes' in white bold geometric sans-serif on a deep purple #13002D background with one red #FF0051 full stop. International buyers silhouetted in the foreground, some holding up phones. Realistic, natural hall light mixed with screen light. 16:9. No other text, no logos."},
  {n:'Product line-up',z:'产品陈列',i:'The products they saw (kettle, espresso machine, air fryer, purifier, bottle warmer) on a red studio set, keynote style, title above.',iz:'红色影棚里摆一排这次看到的产品：水壶、咖啡机、空气炸锅、净水器、温奶器，像发布会，片名在上方。',m:'nano_banana_pro',p:"Premium product photograph on a seamless WorldFirst red #FF0051 studio set: a neat row of appliances made in Chinese factories, a gooseneck kettle, an espresso machine, an air fryer, a countertop water purifier and a baby bottle warmer, evenly lit with soft shadows, Apple keynote restraint. Above them, the title 'They Believe Their Eyes' in large white bold geometric sans-serif and a small line 'A WorldFirst China Sourcing Trip'. 16:9. No other text, no brand logos on the products."},
  {n:'Container stencil',z:'集装箱喷字',note:'The model painted the colour code onto the container; a rerun would drop it.',nz:'模型把色值也喷到了集装箱上，重新生成时可以去掉。',i:'The title stencil-painted on a container being loaded at a factory dock, forklift in the foreground.',iz:'工厂装货口的集装箱侧面喷着片名，前景是叉车和工人。',m:'nano_banana_pro',p:"Photograph of the side of a dark purple shipping container being loaded at a factory dock in Guangdong. The words 'They Believe Their Eyes' are stencil-painted large in white across the corrugated steel, with a small red #FF0051 painted full stop. A forklift and workers slightly blurred in the foreground, warm daylight, documentary realism. 16:9. No other text, no logos."}],
 caps:[
  {n:'Label tape',z:'标签带',i:'Captions as label-maker tape: one white strip for the name, one for the role, a red tape edge.',iz:'像标签机打出来的白色胶带：名字一条，职业一条，一小段红色胶带边。',m:'nano_banana_pro + frame',ref:'han',p:"Edit this frame: add a documentary lower-third at the bottom left made of printed label-maker tape. One strip of white tape reads 'Han' in bold black geometric sans-serif, a second smaller strip reads 'Amazon growth consultant' with a tiny Australian flag, and a short strip of WorldFirst red #FF0051 tape at the edge. Flat, crisp, realistic tape texture. Keep the photo otherwise unchanged. 16:9."},
  {n:'Swiss grid',z:'瑞士网格',i:'A thin white grid on the left third, big white name, one small red square.',iz:'左侧三分之一一组细白网格线，大号白字人名，一个红色小方块。',m:'nano_banana_pro + frame',ref:'han',p:"Edit this frame: add a Swiss editorial caption. Thin white hairline grid lines aligned to the left third of the frame, the name 'Han' in large bold white geometric sans-serif, the role 'Amazon growth consultant, Australia' in small white text below, one small red #FF0051 square marker. Flat, minimal, no boxes. Keep the photo otherwise unchanged. 16:9."},
  {n:'Vertical type',z:'竖排',i:'Name and role set vertically along the right edge with a thin red line. Magazine feel, never over the face.',iz:'沿画面右边缘竖排人名和职业，旁边一条细红线。杂志感，不压人脸。',m:'nano_banana_pro + frame',ref:'han',p:"Edit this frame: add a vertical caption along the right edge. The name 'Han' and the role 'Amazon growth consultant' set vertically, rotated 90 degrees, in white bold geometric sans-serif, with a thin red #FF0051 line running alongside. Magazine editorial style, flat. Keep the photo otherwise unchanged. 16:9."},
  {n:'Ticket stub',z:'车票票根',i:'A white coach-ticket card with a perforated edge, red seat number, name and role.',iz:'左下角一张大巴车票样式的白卡，打孔边，红色座位号，人名和职业。',m:'nano_banana_pro + frame',ref:'han',p:"Edit this frame: add a lower-third at the bottom left designed like a coach ticket stub. A white card with a perforated edge, 'SEAT 07' in red #FF0051, the name 'Han' in bold dark geometric sans-serif, the role 'Amazon growth consultant' and a small Australian flag. Flat graphic, crisp text. Keep the photo otherwise unchanged. 16:9."},
  {n:'Slate corner',z:'场记角标',i:'A thin white corner bracket with the name, role and a red date-and-place line, like a documentary slate.',iz:'左下一个细白角框，人名、职业，加一行红色日期地点小字，像纪录片场记。',m:'nano_banana_pro + frame',ref:'han',p:"Edit this frame: add a minimal documentary caption at the bottom left. A thin white corner bracket, the name 'Han' in bold white geometric sans-serif, the role 'Amazon growth consultant · Australia' below, and a small line '12.10.2026 · GUANGZHOU' in red #FF0051. Flat, crisp. Keep the photo otherwise unchanged. 16:9."}],
 subs:[
  {n:'Purple outline',z:'紫描边',i:'Cinema subtitles: white with a thin dark purple outline instead of a shadow.',iz:'电影字幕：白字加细深紫描边，代替阴影。',m:'nano_banana_pro + frame',ref:'han',p:"Edit this frame: add a cinema subtitle at the bottom centre in white bold geometric sans-serif with a thin dark purple #13002D outline, reading: Until you're here, you're not really realising the scale of things. Keep the photo otherwise unchanged. 16:9."},
  {n:'Lower-left editorial',z:'左下编辑式',i:'Left-aligned subtitles with a short red bar, the Chinese original small above.',iz:'左对齐字幕，前面一条短红线，中文原话小字放在上方。',m:'nano_banana_pro + frame',ref:'korean',p:"Edit this frame: add a subtitle in the lower left, left-aligned, in white medium geometric sans-serif with a short red #FF0051 vertical bar at the start, reading: From Korea to the Chinese factory: convenient, and fast. Above it, in small faint white Chinese: 从韩国转到中国工厂，很方便，很快. Keep the photo otherwise unchanged. 16:9."},
  {n:'One word in red',z:'一词标红',i:'Bottom-centre white subtitles with a single key word in WorldFirst Red.',iz:'底部白色字幕，只把一个关键词标成万里汇红。',m:'nano_banana_pro + frame',ref:'han',p:"Edit this frame: add a bottom-centre subtitle in white bold geometric sans-serif with only the word 'scale' in red #FF0051, reading: Until you're here, you're not really realising the scale of things. Keep the photo otherwise unchanged. 16:9."},
  {n:'Letterbox subtitles',z:'黑边字幕',i:'Cinema letterbox bars, with the subtitle inside the bottom bar so it never covers the picture.',iz:'加电影宽银幕黑边，字幕放在下方黑边里，不压画面。',m:'nano_banana_pro + frame',ref:'jeff',p:"Edit this frame: add black cinema letterbox bars for a 2.39:1 look and place the subtitle inside the bottom black bar in white medium geometric sans-serif, reading: So our main business is focusing on the water purifier. Keep the photo inside unchanged. 16:9."},
  {n:'Two columns',z:'左右双语',i:'English left, Chinese right, a thin red line between. An option for the Chinese cut.',iz:'底部左右两栏：左英文，右中文，中间一条细红线。可用于中文版。',m:'nano_banana_pro + frame',ref:'korean',p:"Edit this frame: add subtitles in two columns at the bottom. Left column in English, white medium geometric sans-serif: From Korea to the Chinese factory: convenient, and fast. Right column in Chinese, white: 从韩国转到中国工厂，很方便，很快. A thin red #FF0051 vertical line between the columns. Keep the photo otherwise unchanged. 16:9."}],
 look:[
  {n:'Physical model',z:'实体沙盘',i:'A handmade card relief model of the delta with a red thread route between white pins.',iz:'手工纸板做的珠三角立体沙盘，一根红线串起白色图钉。',m:'nano_banana_pro',p:"Overhead photograph of a handmade physical relief model of the Pearl River Delta in southern China, built from layered white card with pale grey river channels, a red #FF0051 thread route stretched between small white map pins, soft studio daylight, tabletop miniature, shallow depth of field. 16:9. No text."},
  {n:'Risograph',z:'孔版印刷',i:'A two-ink risograph print, red and purple on white paper, visible grain.',iz:'两色孔版印刷：红和深紫印在白纸上，看得见颗粒。',m:'nano_banana_pro',p:"A risograph-printed map of the Pearl River Delta using two inks only, WorldFirst red #FF0051 and deep purple #13002D, on white paper, visible grain and slight misregistration. Rivers and coastline in purple, a bold red route line connecting five dots. 16:9. No text."},
  {n:'Paper cut',z:'剪纸层叠',i:'Stacked white paper layers for land, purple paper water, a red paper ribbon for the route.',iz:'白纸层层叠成陆地，深紫纸做水面，一条红色纸带做路线。',m:'nano_banana_pro',p:"A layered paper-cut map of the Pearl River Delta seen from above: land made of stacked white paper layers with soft shadows, water in deep purple #13002D paper, a red #FF0051 paper ribbon route weaving between cities. Clean studio light. 16:9. No text."},
  {n:'Night orbit',z:'夜景卫星',i:'The delta at night from orbit, city lights traced in lilac, one red route.',iz:'从太空看夜里的珠三角，城市灯光是淡紫色细线，一条红色路线。',m:'nano_banana_pro',p:"Satellite view at night of the Pearl River Delta, city lights traced as thin lilac and white lines on a dark purple #13002D ground, a single red #FF0051 route line connecting Guangzhou, Foshan and Zhongshan. Realistic orbital photography. 16:9. No text."},
  {n:'Low-poly',z:'低多边形',i:'An isometric low-poly model: matte white terrain, purple water, small factories at the stops.',iz:'等距视角的低多边形模型：哑光白色地形、紫色水面，每站一个小工厂。',m:'nano_banana_pro',p:"Isometric low-poly 3D map of the Pearl River Delta, matte white terrain, deep purple #13002D water, small simple factory buildings at five stops, a red #FF0051 road route connecting them, clean product-render lighting. 16:9. No text."}],
 motion:[
  {n:'Model push-in',z:'沙盘推进',i:'The physical model, a slow push-in while a tiny coach runs the red thread from Guangzhou to Zhongshan.',iz:'实体沙盘缓慢推进，一辆小大巴沿着红线从广州开到中山。',m:'seedance_2_0 · 5 s · 16:9',v:1,p:"Slow cinematic push-in over a handmade physical relief model of the Pearl River Delta made of layered white card, pale grey river channels and a WorldFirst red (#FF0051) thread route stretched between small white map pins. A tiny white coach model travels along the red thread from Guangzhou toward Zhongshan. Soft studio daylight, shallow depth of field, calm and premium. No text, no logos."},
  {n:'Drone to map',z:'航拍转地图',i:'A drone shot over the Pearl River at golden hour that flattens into the graphic map as the route draws.',iz:'金色时刻的珠江航拍，画面逐渐压平成图形地图，路线随之画出。',m:'seedance_2_0 · 5 s · 16:9',v:1,p:"Aerial drone shot over Guangzhou and the Pearl River at golden hour that smoothly transforms into a flat graphic map: the buildings flatten into clean white land, the river becomes deep purple (#13002D), and a single red (#FF0051) route line draws itself across the city from point to point. Smooth, elegant, no text, no logos."},
  {n:'Ink route',z:'墨线晕染',note:'The model wrote the colour code onto the map as text; a rerun would drop it.',nz:'模型把色值当文字印到了地图上，重新生成时可以去掉。',i:'A red ink line draws itself across a paper map and bleeds into the fibres, stops appearing one by one.',iz:'红色墨线在纸地图上自己画出来，晕进纸纤维，站点一个个出现。',m:'seedance_2_0 · 5 s · 16:9',v:1,p:"Top-down macro shot of a white paper map of the Pearl River Delta: a red (#FF0051) ink line draws itself across the paper, bleeding slightly into the fibres, and five small dots appear one by one along the route. Deep purple (#13002D) water areas printed on the map. Calm pacing, soft daylight, no text, no logos."},
  {n:'Map unfolds',z:'地图展开',note:'Came out as an antique paper map, which is off brand. Judge the camera move, not the look.',nz:'生成成了旧纸地图，不符合品牌。只看镜头运动，不看画面风格。',i:'A folded paper map of southern China opens on a table, then the camera pushes into the delta.',iz:'一张折起来的华南纸地图在桌上展开，镜头再推进珠三角。',m:'seedance_2_0 · 5 s · 16:9',v:1,p:"A folded paper map of southern China unfolds on a clean white table, revealing a red (#FF0051) route line and small white pins over the Pearl River Delta, top-down, natural daylight; then the camera pushes in smoothly toward the delta. No text, no logos."},
  {n:'Night flight',z:'夜航',skip:1,i:'A forward flight over the delta at night, a red light trail tracing the route between cities.',iz:'夜里向前飞越珠三角，一道红色光迹沿路线在城市间穿行。',m:'seedance_2_0 · 5 s · 16:9',v:1,p:"Night aerial flight over the Pearl River Delta, city lights glowing in purple and lilac tones over a dark purple (#13002D) landscape, a single red (#FF0051) light trail traces a route between the cities like a moving vehicle, smooth forward camera motion. No text, no logos."}],
};
const ITEMS=[
 {id:'title',name:'Title card',nz:'片名卡',lead:'How "They Believe Their Eyes" lands after the hook. All five here keep the same words and fonts; what changes is the idea behind the reveal.',lz:'片名"They Believe Their Eyes"在开场钩子之后怎么出现。这里五个方案文字和字体都一样，变化的是呈现的想法。',cur:'On the board now: T2 Big wordmark.',cz:'看板当前选择：T2 大字标。',C:TITLE_C},
 {id:'caps',name:'Caption system',nz:'字幕系统',lead:'One system for countries, names, places and numbers, used start to end. Each option cycles through all four uses on real frames.',lz:'国家、人名、地点、数字用同一套系统，全片统一。每个方案都在真实画面上依次演示四种用法。',cur:'On the board now: C2 Brand pill.',cz:'看板当前选择：C2 品牌胶囊。',C:CAP_C},
 {id:'subs',name:'Subtitles',nz:'对白字幕',lead:'How speech is subtitled, including the Korean client speaking Mandarin. Each option plays three lines from three speakers.',lz:'对白字幕怎么做，包括韩国客户讲普通话的情况。每个方案播放三位说话人的三句话。',cur:'On the board now: U3 Chinese over English (Chinese cut only); English master uses English only at the bottom.',cz:'看板当前选择：U3 中文在上英文在下（仅中文版）；英文主版底部只用英文。',C:SUB_C},
 {id:'look',name:'Route map: the ground',nz:'路线地图：底图',lead:'What the map itself looks like. All five Claude options are drawn from real geography: OpenStreetMap motorways and river channels, real city boundaries, and real satellite imagery for one.',lz:'地图本身长什么样。Claude 的五个方案都基于真实地理：OpenStreetMap 的高速和河道、真实的城市边界，其中一个用真实卫星影像。',cur:'On the board now: light ground, flat, full frame.',cz:'看板当前选择：浅灰底、平面、全屏。',C:LOOK_C},
 {id:'motion',name:'Route map: the motion',nz:'路线地图：动效',lead:'How the map moves between stops. These run live; scroll to one and it plays.',lz:'地图在各站之间怎么动。这些都是实时动画，滚动到哪个就播放哪个。',cur:'On the board now: the coach glyph drives the route, flags fly in, optional tilt.',cz:'看板当前方案：大巴图标沿路线行驶，国旗飞入，可选倾斜。',C:MO_C},
];
const HFKEY={title:'title',caps:'caps',subs:'subs',look:'look',motion:'motion'};

/* ---------- render ---------- */
function stageFor(item,c,k){
  if(item.id==='title')return c.h();
  if(item.id==='caps')return `<div class="stage cy ${c.cls}">${c.s.map((h,j)=>`<div class="sc ${j?'':'on'}" ${bg(CAP_BG[j])}>${c.scrim?'<div class="scrim"></div>':''}${h}</div>`).join('')}</div>`;
  if(item.id==='subs')return `<div class="stage cy ${c.cls}">${c.chunks?`<div class="tag">9:16</div>`:''}${SUBL.map((l,j)=>`<div class="sc ${j?'':'on'}" ${bg(l.bg)} ${c.chunks?`data-chunks="1" data-d="${chunk(l.en).length*520+500}"`:'data-d="3300"'}>${c.f(l)}</div>`).join('')}</div>`;
  if(item.id==='look')return `<div class="stage"><canvas data-map="look:${c.k}"></canvas><div class="attr ${c.dk?'dk':''}">${esc(c.attr||OSM)}</div></div>`;
  if(c.k==='follow')return `<div class="stage"><div class="tiltw"><canvas data-map="mo:follow"></canvas></div><div class="hud hudL" data-hud="leg"></div><div class="attr dk">${OSM}</div></div>`;
  if(c.k==='days')return `<div class="stage"><canvas data-map="mo:days"></canvas><div class="hud hudN"><b data-hud="day">Day 1</b><span><em data-hud="km">0</em> km · stop <em data-hud="stop">1</em> of 11</span></div><div class="days">${[1,2,3,4].map(d=>`<div data-dd="${d}"><i><u></u></i>DAY ${d}</div>`).join('')}</div><div class="attr" style="bottom:auto;top:1.6cqw">${OSM}</div></div>`;
  return `<div class="stage"><canvas data-map="mo:${c.k}"></canvas><div class="attr ${c.dk?'dk':''}">${OSM}</div></div>`;
}
function hfStage(item,h,k){
  const key=`${item.id}_${k+1}`;const f=(window.HF_DONE||{})[key];
  if(f)return `<div class="stage" title="${esc(h.note||'')}">${/\.mp4$/.test(f)?`<video class="hfo" src="${f}" muted loop playsinline autoplay></video>`:`<img class="hfo" src="${f}" alt=""/>`}</div>`;
  return `<div class="stage hfwait"><b>${h.skip?_t('Skipped','已跳过'):_t('Higgsfield · in progress','Higgsfield · 生成中')}</b><span>${esc(h.m)}${h.ref?_t(' · uses the '+h.ref+' frame',' · 使用 '+h.ref+' 画面'):''}</span></div>`;
}
function card(item,c,k,hf){
  const id=(hf?'H':'C')+(k+1);const no=String(hf?k+6:k+1).padStart(2,'0');const pk=W.picks[item.id]===id;
  return `<div class="v ${pk?'pk':''}" data-item="${item.id}" data-id="${id}">
   <div class="vh"><span class="no">${no}</span><b>${esc(_t(c.n,c.z))}</b><span class="src ${hf?'hf':''}">${hf?'Higgsfield':'Claude'}</span></div>
   ${hf?hfStage(item,c,k):stageFor(item,c,k)}
   <div class="vi">${esc(_t(c.i,c.iz))}${hf&&c.note&&(window.HF_DONE||{})[item.id+'_'+(k+1)]?`<br/><span style="color:var(--rose)">${esc(_t(c.note,c.nz))}</span>`:''}</div>
   ${hf?`<details class="pr"><summary>${_t('Prompt','提示词')} · ${esc(c.m)}</summary><p>${esc(c.p)}</p></details>`:''}
   <div class="vf">${hf?'':`<button class="btn g" data-replay>${_t('Replay','重播')}</button>`}<span class="sp"></span><button class="btn ${pk?'on':''}" data-pick>${pk?_t('Picked','已选'):_t('Pick','选这个')}</button></div></div>`;
}
function build(){
  document.documentElement.lang=LANG==='zh'?'zh':'en';document.body.dataset.lang=LANG;
  $('#side').innerHTML=`<img class="logo" src="wf/wf_logo_en_hrz_pos.svg" alt="WorldFirst"/><div class="nt">${_t('Look lab','画面方案库')}</div>`+ITEMS.map((it,j)=>`<a href="#s-${it.id}"><span class="n">0${j+1}</span><span>${esc(_t(it.name,it.nz))}</span><span class="pk" data-np="${it.id}">${W.picks[it.id]||''}</span></a>`).join('')+`<div class="nt">${_t('Back to','返回')}</div><a href="../sourcing-trip-production-board/index.html"><span class="n">↗</span><span>${_t('Production board','制作看板')}</span></a>`;
  $('#main').innerHTML=`<header class="hd"><div class="ey">SOURCING TRIP · ${_t('LOOK LAB','画面方案库')}</div>
   <h1>${_t('Ten options for every look item','每个画面元素十个方案')}</h1>
   <p class="hsub">${_t('For each item in Look and graphics: five options built by Claude on real frames and real map data from the trip, and five generated in Higgsfield. All stay inside the WorldFirst palette (red, dark purple, white, grey) and Poppins. Pick one per item, or write what to combine. Picks save in this browser and copy out as a list for the board.','"画面与图形"里的每一项：五个由 Claude 用这趟行程的真实画面和真实地图数据做出来，五个由 Higgsfield 生成。全部只用万里汇的颜色（红、深紫、白、灰）和 Poppins 字体。每项选一个，或者写下想组合的方式。选择保存在本浏览器里，可以复制成清单贴回看板。')}</p>
   <div class="meta">${_t('Film','影片')} <b>They Believe Their Eyes</b> · ${_t('Look items','画面元素')} <b>5</b> · ${_t('Options','方案')} <b>50</b> · ${_t('Higgsfield generated','Higgsfield 已生成')} <b>${Object.keys(window.HF_DONE||{}).length} / 25</b></div></header>
   <div class="bar"><button class="btn" id="bLang">${LANG==='zh'?'English':'中文'}</button><button class="btn g" id="bAll">${_t('Replay all','全部重播')}</button><button class="btn g" id="bCopy">${_t('Copy picks','复制选择')}</button><span id="saved">${_t('Saved','已保存')}</span><span class="rt">${_t('Picked','已选')} <b id="npk">${Object.keys(W.picks).length}</b> / 5</span></div>
   <textarea id="out" readonly></textarea>
   ${ITEMS.map((it,j)=>`<section id="s-${it.id}"><div class="sn">0${j+1}</div><h2>${esc(_t(it.name,it.nz))}</h2><p class="lead">${esc(_t(it.lead,it.lz))}</p><div class="cur">${esc(_t(it.cur,it.cz))}</div>
     <h3 class="k">Claude <span>${_t('built live on real frames and data','用真实画面和数据实时制作')}</span></h3><div class="vg">${it.C.map((c,k)=>card(it,c,k,false)).join('')}</div>
     <h3 class="k">Higgsfield <span>${_t('generated stills and clips','AI 生成的图片和视频')}</span></h3><div class="vg">${HF[it.id].map((c,k)=>card(it,c,k,true)).join('')}</div>
     <textarea class="nt" data-note="${it.id}" placeholder="${_t('Notes: what to combine or change','备注：想怎么组合或修改')}">${esc(W.notes[it.id]||'')}</textarea></section>`).join('')}`;
  initStages();
}

/* ---------- stage behaviour ---------- */
const CYC=new Map();
function replayTitle(st){
  if(st.dataset.seq){const cs=$$('.c',st);const d=+st.dataset.seq;clearTimeout(st._tm);let k=0;const step=()=>{cs.forEach((c,j)=>c.classList.toggle('on',j===k));if(k<cs.length-1){k++;st._tm=setTimeout(step,d)}};step();return}
  st.classList.remove('go');void st.offsetWidth;st.classList.add('go');
}
function cycler(st){
  const scs=$$(':scope>.sc',st);let i=0,tm=null,ch=null;
  const runChunks=s=>{clearInterval(ch);const sp=$$('.sub span',s);let k=0;sp.forEach((x,j)=>x.classList.toggle('on',j===0));ch=setInterval(()=>{k++;if(k>=sp.length){clearInterval(ch);return}sp.forEach((x,j)=>x.classList.toggle('on',j===k))},520)};
  const show=k=>{scs.forEach((s,j)=>s.classList.toggle('on',j===k));if(scs[k].dataset.chunks)runChunks(scs[k])};
  const dur=k=>+(scs[k].dataset.d||2900);
  const next=()=>{i=(i+1)%scs.length;show(i);tm=setTimeout(next,dur(i))};
  return {start(){clearTimeout(tm);i=0;show(0);tm=setTimeout(next,dur(0))},stop(){clearTimeout(tm);clearInterval(ch)}};
}
let IO=null;
function initStages(){
  CYC.forEach(c=>c.stop());CYC.clear();MAPS.forEach(m=>m.dead=true);MAPS.length=0;if(IO)IO.disconnect();
  $$('.cy').forEach(st=>CYC.set(st,cycler(st)));
  $$('canvas[data-map]').forEach(cv=>MAPS.push(new LabMap(cv)));
  IO=new IntersectionObserver(es=>es.forEach(e=>{const st=e.target;
    if(st.classList.contains('cy')){const c=CYC.get(st);e.isIntersecting?c.start():c.stop()}
    else if(st.matches('.tA1,.tA2,.tA3,.tA4,.tA5')){if(e.isIntersecting&&!st._seen){st._seen=1;replayTitle(st)}}
    const m=st._map;if(m){m.vis=e.isIntersecting;if(e.isIntersecting&&!m.t0)m.restart()}
  }),{threshold:.35});
  $$('.stage').forEach(st=>IO.observe(st));
}
document.addEventListener('click',e=>{const t=e.target;const v=t.closest('.v');
  if(t.hasAttribute('data-replay')&&v){const st=$('.stage',v);if(st.classList.contains('cy'))CYC.get(st).start();else if(st._map)st._map.restart();else replayTitle(st)}
  else if(t.hasAttribute('data-pick')&&v){const it=v.dataset.item,id=v.dataset.id;if(W.picks[it]===id)delete W.picks[it];else W.picks[it]=id;save();
    $$(`.v[data-item="${it}"]`).forEach(x=>{const on=W.picks[it]===x.dataset.id;x.classList.toggle('pk',on);const b=$('[data-pick]',x);b.classList.toggle('on',on);b.textContent=on?_t('Picked','已选'):_t('Pick','选这个')});
    $(`[data-np="${it}"]`).textContent=W.picks[it]||'';$('#npk').textContent=Object.keys(W.picks).length}
  else if(t.id==='bLang'){LANG=LANG==='zh'?'en':'zh';try{localStorage.setItem(LK,LANG)}catch(e){}build()}
  else if(t.id==='bAll'){$$('.stage').forEach(st=>{if(st.classList.contains('cy'))CYC.get(st).start();else if(st._map)st._map.restart();else if(st.matches('.tA1,.tA2,.tA3,.tA4,.tA5'))replayTitle(st)})}
  else if(t.id==='bCopy'){const L=['Look lab picks · They Believe Their Eyes'];ITEMS.forEach(it=>{const id=W.picks[it.id];let s='not picked';if(id){const hf=id[0]==='H';const k=+id.slice(1)-1;const c=hf?HF[it.id][k]:it.C[k];s=`${String(hf?k+6:k+1).padStart(2,'0')} ${c.n} (${hf?'Higgsfield':'Claude'})`}L.push(`- ${it.name}: ${s}${W.notes[it.id]?' · '+W.notes[it.id].replace(/\s+/g,' '):''}`)});
    const o=$('#out');o.value=L.join('\n');o.style.display='block';o.select();try{navigator.clipboard.writeText(o.value)}catch(e){}t.textContent=_t('Copied','已复制');setTimeout(()=>t.textContent=_t('Copy picks','复制选择'),1200)}
});
document.addEventListener('input',e=>{const n=e.target.dataset.note;if(n!=null){W.notes[n]=e.target.value;save()}});

/* ---------- map engine (real geography) ---------- */
const MP=window.MAP;const ST={};MP.stops.forEach(s=>ST[s.id]=s);
const D2R=Math.PI/180,C23=Math.cos(23*D2R);
const W2=(lon,lat)=>[(lon-73)*C23*100,(54-lat)*100];
const L2=(x,y)=>[x/(C23*100)+73,54-y/100];
const PA=(()=>{const o={china:new Path2D(),gd:new Path2D(),roads:new Path2D(),rivers:new Path2D()};
  const ring=(P,pts)=>{pts.forEach((q,i)=>i?P.lineTo(q[0],q[1]):P.moveTo(q[0],q[1]));P.closePath()};
  MP.china.forEach(f=>ring(o.china,f.p));MP.gd.forEach(f=>ring(o.gd,f.p));
  const ln=(P,a)=>a.forEach(l=>l.forEach((q,i)=>i?P.lineTo(q[0],q[1]):P.moveTo(q[0],q[1])));ln(o.roads,MP.roads);ln(o.rivers,MP.rivers);return o})();
const CITIES=[['Guangzhou',113.42,23.32],['Foshan',112.98,23.0],['Zhongshan',113.4,22.42],['Dongguan',113.82,22.98],['Shenzhen',114.02,22.62],['Jiangmen',112.95,22.55],['Zhuhai',113.5,22.24]].map(([n,lo,la])=>[n,...W2(lo,la)]);
const LAB={viomi:['Viomi',-1],stelang:['Stelang',-1],rongde:['Rongde',-1],weijin:['Weijin',1],vision:['Vision',1],centre1688:['1688 centre',-1],fair:['Canton Fair',1]};
const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ss=(a,b,v)=>{const t=clamp((v-a)/(b-a));return t*t*(3-2*t)};
const lerp=(a,b,t)=>a+(b-a)*t;
const mix=(c1,c2,t)=>{const h=c=>[1,3,5].map(i=>parseInt(c.slice(i,i+2),16));const a=h(c1),b=h(c2);return `rgb(${a.map((v,i)=>Math.round(v+(b[i]-v)*t)).join(',')})`};
function ctrl(a,b,k){const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1];return [mx-dy*k,my+dx*k]}
function qpt(a,c,b,t){const u=1-t;return [u*u*a[0]+2*u*t*c[0]+t*t*b[0],u*u*a[1]+2*u*t*c[1]+t*t*b[1]]}
function buildRoute(seq){const segs=[];let tot=0;
  for(let j=0;j<seq.length-1;j++){const a=[ST[seq[j]].x,ST[seq[j]].y],b=[ST[seq[j+1]].x,ST[seq[j+1]].y];if(Math.hypot(a[0]-b[0],a[1]-b[1])<.01)continue;
    const c=ctrl(a,b,j%2?-.12:.12);const pts=[],cum=[0];for(let s=0;s<=40;s++)pts.push(qpt(a,c,b,s/40));for(let s=1;s<pts.length;s++)cum.push(cum[s-1]+Math.hypot(pts[s][0]-pts[s-1][0],pts[s][1]-pts[s-1][1]));
    segs.push({from:seq[j],to:seq[j+1],pts,cum,len:cum[cum.length-1],start:tot});tot+=cum[cum.length-1]}
  return {segs,tot}}
function routeTo(R,d){const out=[];for(const s of R.segs){if(d<=s.start)break;const loc=d-s.start;for(let k=0;k<s.pts.length;k++){if(s.cum[k]<=loc){if(!out.length||k)out.push(s.pts[k])}else{const f=(loc-s.cum[k-1])/(s.cum[k]-s.cum[k-1]);out.push([lerp(s.pts[k-1][0],s.pts[k][0],f),lerp(s.pts[k-1][1],s.pts[k][1],f)]);break}}}return out}
function at(R,d){const p=routeTo(R,Math.max(.01,d));const a=p[p.length-1],b=p[Math.max(0,p.length-3)];return {p:a,ang:Math.atan2(a[1]-b[1],a[0]-b[0])}}
const OV=MP.legs.overview.stops;const ROUTE=buildRoute(OV);
const STOPD={};ROUTE.segs.forEach(s=>{if(STOPD[s.to]==null)STOPD[s.to]=s.start+s.len});STOPD.gz=0;
const PRDV=[3709.4,3108.75,150,102];
const STY={
 atlas:{sea:'#ECEDEE',land:'#FFFFFF',river:'#ECEDEE',rw:.36,road:'rgba(31,35,35,.6)',roadw:.06,bnd:'rgba(31,35,35,.2)',grat:'rgba(31,35,35,.11)',route:'#FF0051',pin:'#FF0051',ring:'#FFFFFF',lab:'rgba(31,35,35,.62)',slab:'#1F2323'},
 night:{sea:'#13002D',land:'rgba(50,0,110,.38)',landA:1,river:'#13002D',rw:.36,road:'rgba(215,199,248,.5)',roadw:.11,bnd:'rgba(215,199,248,.12)',route:'belt',pin:'#FFFFFF',ring:'#FF0051',lab:'rgba(255,255,255,.5)',slab:'#FFFFFF'},
 red:{sea:'#FF0051',land:'rgba(255,255,255,.14)',landA:1,river:'#FF0051',rw:.36,road:'rgba(255,255,255,.42)',roadw:.11,bnd:'rgba(255,255,255,.22)',route:'#FFFFFF',rlw:4.6,pin:'#FFFFFF',ring:'#13002D',lab:'rgba(255,255,255,.8)',slab:'#FFFFFF'},
 sat:{sea:'#13002D',sat:1,route:'#FF0051',rlw:4,pin:'#FFFFFF',ring:'#FF0051',lab:'rgba(255,255,255,.75)',slab:'#FFFFFF'},
 light:{sea:'#ECEDEE',land:'#FFFFFF',river:'#ECEDEE',rw:.36,road:'rgba(31,35,35,.17)',roadw:.13,bnd:'rgba(31,35,35,.12)',route:'#FF0051',pin:'#FF0051',ring:'#FFFFFF',lab:'rgba(31,35,35,.45)',slab:'#1F2323'},
 purple:{sea:'#13002D',land:'#32006E',river:'#13002D',rw:.36,road:'rgba(255,255,255,.17)',roadw:.12,bnd:'rgba(255,255,255,.1)',route:'belt',pin:'#FFFFFF',ring:'#FF0051',lab:'rgba(255,255,255,.5)',slab:'#FFFFFF'},
};
const SATB=[3622.1866,3035,3797.0825,3185];const SATI=new Image();
const IMG={};const img=n=>{if(!IMG[n]){IMG[n]=new Image();IMG[n].src=FR(n)}return IMG[n]};
const FLI={};FL5.forEach(c=>{const i=new Image();i.crossOrigin='anonymous';i.src=FLAG(c);FLI[c]=i});
const TEX={};
function tex(k,b,ppu){const key=k+b.join(',')+ppu;if(TEX[key])return TEX[key];const S=STY[k];
  const c=document.createElement('canvas');c.width=Math.round((b[2]-b[0])*ppu);c.height=Math.round((b[3]-b[1])*ppu);const x=c.getContext('2d');
  x.setTransform(ppu,0,0,ppu,-b[0]*ppu,-b[1]*ppu);x.fillStyle=S.sea;x.fillRect(b[0],b[1],b[2]-b[0],b[3]-b[1]);
  if(S.sat){if(!SATI.src)SATI.src='frames/sat_prd.jpg';if(!SATI.complete||!SATI.naturalWidth){SATI.addEventListener('load',()=>{delete TEX[key]},{once:true});return c}
    x.filter='grayscale(1) contrast(1.35) brightness(1.08)';x.drawImage(SATI,SATB[0],SATB[1],SATB[2]-SATB[0],SATB[3]-SATB[1]);x.filter='none';
    x.globalCompositeOperation='multiply';x.fillStyle='#D7C7F8';x.fillRect(b[0],b[1],b[2]-b[0],b[3]-b[1]);x.globalAlpha=.55;x.fillStyle='#6F4C99';x.fillRect(b[0],b[1],b[2]-b[0],b[3]-b[1]);x.globalAlpha=1;x.globalCompositeOperation='source-over';x.fillStyle='rgba(19,0,45,.12)';x.fillRect(b[0],b[1],b[2]-b[0],b[3]-b[1]);
    TEX[key]=c;return c}
  x.fillStyle=S.land;if(!S.landA)x.fill(PA.china);x.fill(PA.gd);
  if(S.grat){x.strokeStyle=S.grat;x.lineWidth=.07;for(let lo=112;lo<=115;lo+=.25){const X=W2(lo,0)[0];x.beginPath();x.moveTo(X,b[1]);x.lineTo(X,b[3]);x.stroke()}for(let la=21.5;la<=24;la+=.25){const Y=W2(0,la)[1];x.beginPath();x.moveTo(b[0],Y);x.lineTo(b[2],Y);x.stroke()}}
  x.lineJoin='round';x.lineCap='round';x.strokeStyle=S.river;x.lineWidth=S.rw;x.stroke(PA.rivers);
  x.strokeStyle=S.road;x.lineWidth=S.roadw;x.stroke(PA.roads);
  x.strokeStyle=S.bnd;x.lineWidth=.1;x.setLineDash([.5,.5]);x.stroke(PA.gd);x.setLineDash([]);
  TEX[key]=c;return c}
const TEXB=[3600,3030,3820,3190];
const MAPS=[];
class LabMap{
  constructor(cv){this.cv=cv;this.ctx=cv.getContext('2d');const [kind,k]=cv.dataset.map.split(':');this.kind=kind;this.k=k;this.st=cv.closest('.stage');this.st._map=this;this.vis=false;this.t0=0;this.reach={};
    new ResizeObserver(()=>this.size()).observe(this.st);if(!LabMap.loop){LabMap.loop=1;const f=()=>{MAPS.forEach(m=>{if(m.vis&&!m.dead)m.frame()});requestAnimationFrame(f)};requestAnimationFrame(f)}}
  size(){const r=this.st.getBoundingClientRect();if(!r.width)return;const d=Math.min(2,window.devicePixelRatio||1);this.cv.width=Math.round(r.width*d);this.cv.height=Math.round(r.width*9/16*d);this.ext=null;this.frame(true)}
  restart(){this.t0=performance.now();this.reach={}}
  loopLen(){return {look:16,globe:12,belt:10.5,follow:10,photo:12,days:11.5,dayslight:11.5}[this.kind==='look'?'look':this.k]}
  frame(force){if(!this.cv.width)return;let t=this.t0?(performance.now()-this.t0)/1000:99;const L=this.loopLen();if(this.t0&&t>L){this.restart();t=0}
    if(!this.t0)t=this.kind==='look'?0:L-.6;
    const f=this.kind==='look'?(this.k==='extrude'?this.extrude:this.look):({globe:this.globe,belt:this.belt,follow:this.follow,photo:this.photo,days:this.days,dayslight:this.days})[this.k];f.call(this,t)}
  cam(t,drift=1){const W=this.cv.width,H=this.cv.height;const s0=Math.min(W/PRDV[2],H/PRDV[3]);const z=1+.05*drift*(.5-.5*Math.cos(t/this.loopLen()*Math.PI*2));return {s:s0*z,cx:PRDV[0]+drift*1.5*Math.sin(t/this.loopLen()*Math.PI*2),cy:PRDV[1]}}
  apply(c){const W=this.cv.width,H=this.cv.height;this.ctx.setTransform(c.s,0,0,c.s,W/2-c.cx*c.s,H/2-c.cy*c.s)}
  X(c,p){return [(p[0]-c.cx)*c.s+this.cv.width/2,(p[1]-c.cy)*c.s+this.cv.height/2]}
  base(k,c){const x=this.ctx,S=STY[k];x.setTransform(1,0,0,1,0,0);x.fillStyle=S.sea;x.fillRect(0,0,this.cv.width,this.cv.height);this.apply(c);const T=tex(k,TEXB,9);x.drawImage(T,TEXB[0],TEXB[1],TEXB[2]-TEXB[0],TEXB[3]-TEXB[1])}
  strokeRoute(pts,c,S,u,alpha=1){const x=this.ctx;if(pts.length<2)return;this.apply(c);x.lineCap='round';x.lineJoin='round';x.globalAlpha=alpha;
    if(S.route==='belt'){const n=pts.length;x.lineWidth=(S.rlw||3.6)*u/c.s;for(let k=1;k<n;k++){x.strokeStyle=mix('#FF0051','#FF882A',k/ROUTE_N);x.beginPath();x.moveTo(pts[k-1][0],pts[k-1][1]);x.lineTo(pts[k][0],pts[k][1]);x.stroke()}}
    else{x.strokeStyle=S.route;x.lineWidth=(S.rlw||3.4)*u/c.s;x.beginPath();pts.forEach((q,k)=>k?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.stroke()}x.globalAlpha=1}
  pins(c,S,u,ids,pop){const x=this.ctx;x.setTransform(1,0,0,1,0,0);const seen=new Set();ids.forEach(id=>{if(seen.has(id))return;seen.add(id);const p=this.X(c,[ST[id].x,ST[id].y]);const k=pop?pop(id):1;if(k<=0)return;const r=(id==='gz'?6.5:5)*u*(.5+.5*Math.min(1,k));x.fillStyle=S.pin;x.beginPath();x.arc(p[0],p[1],r,0,6.283);x.fill();x.strokeStyle=S.ring;x.lineWidth=2*u;x.stroke()})}
  labels(c,S,u,stops,alphaFn){const x=this.ctx;x.setTransform(1,0,0,1,0,0);x.textBaseline='middle';
    x.font=`600 ${10*u}px Poppins`;x.fillStyle=S.lab;x.textAlign='center';CITIES.forEach(([n,X0,Y0])=>{const p=this.X(c,[X0,Y0]);x.fillText(n.toUpperCase().split('').join(String.fromCharCode(8202)),p[0],p[1])});
    if(!stops)return;x.font=`600 ${11.5*u}px Poppins`;Object.entries(LAB).forEach(([id,[n,dir]])=>{const a=alphaFn?alphaFn(id):1;if(a<=0)return;x.globalAlpha=a;const p=this.X(c,[ST[id].x,ST[id].y]);x.fillStyle=S.slab;x.textAlign=dir<0?'right':'left';x.fillText(n,p[0]+dir*11*u,p[1]);x.globalAlpha=1})}
  look(t){const S=STY[this.k];const c=this.cam(t);const u=this.cv.width/1000;this.base(this.k,c);
    if(this.k==='atlas'){const x=this.ctx;x.setTransform(1,0,0,1,0,0);x.font=`500 ${8.5*u}px Poppins`;x.fillStyle='rgba(31,35,35,.5)';x.textBaseline='top';x.textAlign='center';for(let lo=112.5;lo<=114.25;lo+=.25){const p=this.X(c,W2(lo,23));if(p[0]>30*u&&p[0]<this.cv.width-30*u)x.fillText(lo.toFixed(2)+'°E',p[0],8*u)}x.textAlign='left';x.textBaseline='middle';for(let la=22.25;la<=23.75;la+=.25){const p=this.X(c,W2(113,la));if(p[1]>20*u&&p[1]<this.cv.height-30*u)x.fillText(la.toFixed(2)+'°N',8*u,p[1])}
      const sb=10/1.113;const p0=[this.cv.width-150*u,this.cv.height-40*u];x.fillStyle='#1F2323';x.fillRect(p0[0],p0[1],sb*c.s,2*u);x.font=`500 ${9*u}px Poppins`;x.textBaseline='bottom';x.fillText('10 km',p0[0],p0[1]-4*u)}
    this.strokeRoute(routeTo(ROUTE,ROUTE.tot),c,S,u);this.pins(c,S,u,OV);this.labels(c,S,u,true)}
  extrude(t){const W=this.cv.width,H=this.cv.height,u=W/1000;
    if(!this.ext){const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');x.fillStyle='#ECEDEE';x.fillRect(0,0,W,H);
      const s=Math.min(W/PRDV[2],H/PRDV[3])*1.55,cx=PRDV[0]+2,cy=PRDV[1]+10;const P=(q,h)=>[W/2+(q[0]-cx)*s+(q[1]-cy)*s*.2,H*.5+(q[1]-cy)*s*.6-h];
      const inside=(pt,poly)=>{let o=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if(((a[1]>pt[1])!==(b[1]>pt[1]))&&(pt[0]<(b[0]-a[0])*(pt[1]-a[1])/(b[1]-a[1])+a[0]))o=!o}return o};
      const trip=f=>/Guangzhou|Foshan|Zhongshan/.test(f.n)||MP.stops.some(st=>inside([st.x,st.y],f.p));
      const polys=MP.gd.map(f=>({f,tr:trip(f),cy:f.p.reduce((a,q)=>a+q[1],0)/f.p.length})).sort((a,b)=>a.cy-b.cy);
      const HT=H*.05,HO=H*.016;
      const fill=(pts,h,col)=>{x.beginPath();pts.forEach((q,i)=>{const p=P(q,h);i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1])});x.closePath();x.fillStyle=col;x.fill()};
      polys.forEach(({f,tr})=>{const h=tr?HT:HO;for(let k=0;k<h;k+=1){fill(f.p,k,tr?'#FF0051':'#DADCDD');if(tr)fill(f.p,k,'rgba(19,0,45,.32)')}fill(f.p,h,tr?'#FF0051':'#FFFFFF');x.strokeStyle=tr?'rgba(255,255,255,.35)':'rgba(31,35,35,.12)';x.lineWidth=.8*u;x.stroke()});
      this.ext={c,P,HT};}
    const x=this.ctx;x.setTransform(1,0,0,1,0,0);x.drawImage(this.ext.c,0,0);const {P,HT}=this.ext;
    const pts=routeTo(ROUTE,ROUTE.tot).map(q=>P(q,HT));x.strokeStyle='#FFFFFF';x.lineWidth=3.4*u;x.lineCap='round';x.lineJoin='round';x.beginPath();pts.forEach((p,k)=>k?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));x.stroke();
    const seen=new Set();OV.forEach(id=>{if(seen.has(id))return;seen.add(id);const p=P([ST[id].x,ST[id].y],HT);const bob=Math.sin(t*2+p[0]*.01)*2*u;x.strokeStyle='#13002D';x.lineWidth=1.4*u;x.beginPath();x.moveTo(p[0],p[1]);x.lineTo(p[0],p[1]-14*u+bob);x.stroke();x.fillStyle='#FFFFFF';x.beginPath();x.arc(p[0],p[1]-16*u+bob,4.6*u,0,6.283);x.fill();x.strokeStyle='#13002D';x.lineWidth=1.8*u;x.stroke()});
    x.font=`600 ${10*u}px Poppins`;x.fillStyle='rgba(31,35,35,.55)';x.textAlign='center';x.textBaseline='middle';CITIES.forEach(([n,X0,Y0])=>{const tr=/Guangzhou|Foshan|Zhongshan/.test(n);const p=P([X0,Y0],tr?HT:H*.016);x.fillStyle=tr?'#FFFFFF':'rgba(31,35,35,.55)';x.fillText(n.toUpperCase().split('').join(String.fromCharCode(8202)),p[0],p[1])})}
  bus(x,px,py,dir,u,fillC,ringC){x.save();x.translate(px,py);if(dir<0)x.scale(-1,1);const w=34*u,h=14*u;x.translate(-w/2,-h-7*u);x.fillStyle=fillC;x.strokeStyle=ringC;x.lineWidth=1.8*u;x.beginPath();x.roundRect(0,0,w,h,[3.5*u,6*u,3*u,3*u]);x.fill();x.stroke();x.fillStyle=ringC;for(let i=0;i<4;i++){x.beginPath();x.roundRect(4*u+i*6.2*u,3*u,4.6*u,4.4*u,1*u);x.fill()}x.beginPath();x.roundRect(w-6.4*u,3*u,4.4*u,6.5*u,1.2*u);x.fill();[8*u,w-9*u].forEach(wx=>{x.fillStyle=ringC;x.beginPath();x.arc(wx,h,3.2*u,0,6.283);x.fill()});x.restore()}
  belt(t){const S=STY.light;const c=this.cam(0,0);const u=this.cv.width/1000;this.base('light',c);const x=this.ctx;
    const d=ROUTE.tot*ease(clamp(t/7.6));const pts=routeTo(ROUTE,d);
    this.apply(c);x.lineCap='round';x.lineJoin='round';for(let k=1;k<pts.length;k++){const fr=k/ROUTE_N;const tail=clamp((pts.length-k)/10);x.lineWidth=(2.2+4.2*tail)*u/c.s;x.strokeStyle=mix('#FF0051','#FF882A',fr);x.beginPath();x.moveTo(pts[k-1][0],pts[k-1][1]);x.lineTo(pts[k][0],pts[k][1]);x.stroke()}
    x.setTransform(1,0,0,1,0,0);const seen=new Set();OV.forEach(id=>{if(seen.has(id)||STOPD[id]>d+.01)return;seen.add(id);if(this.reach[id]==null)this.reach[id]=t;const age=t-this.reach[id];const p=this.X(c,[ST[id].x,ST[id].y]);const col=mix('#FF0051','#FF882A',STOPD[id]/ROUTE.tot);
      if(age<1.1){x.globalAlpha=1-age/1.1;x.strokeStyle=col;x.lineWidth=2*u;x.beginPath();x.arc(p[0],p[1],(6+30*ease(clamp(age/1.1)))*u,0,6.283);x.stroke();x.globalAlpha=1}
      x.fillStyle='#FFFFFF';x.beginPath();x.arc(p[0],p[1],5.4*u,0,6.283);x.fill();x.strokeStyle=col;x.lineWidth=2.6*u;x.stroke()});
    this.labels(c,S,u,true,id=>this.reach[id]==null?0:clamp((t-this.reach[id])/.4));
    if(t>9.9){x.setTransform(1,0,0,1,0,0);x.fillStyle=`rgba(236,237,238,${ss(9.9,10.5,t)})`;x.fillRect(0,0,this.cv.width,this.cv.height)}}
  follow(t){const W=this.cv.width,H=this.cv.height,u=W/1000,x=this.ctx;const R=FOLLOW;const d=R.tot*ease(clamp((t-.3)/8));const a=at(R,d);const ah=at(R,Math.min(R.tot,d+2.5)),ab=at(R,Math.max(.01,d-2.5));const ang=Math.atan2(ah.p[1]-ab.p[1],ah.p[0]-ab.p[0]);
    if(this.fang==null||t<.1)this.fang=ang;let da=ang-this.fang;while(da>Math.PI)da-=2*Math.PI;while(da<-Math.PI)da+=2*Math.PI;this.fang+=da*.08;
    const s=W/34;x.setTransform(1,0,0,1,0,0);x.fillStyle='#ECEDEE';x.fillRect(0,0,W,H);x.translate(W/2,H*.62);x.rotate(-Math.PI/2-this.fang);x.scale(s,s);x.translate(-a.p[0],-a.p[1]);
    const T=tex('light',FOLB,26);x.drawImage(T,FOLB[0],FOLB[1],FOLB[2]-FOLB[0],FOLB[3]-FOLB[1]);
    x.lineCap='round';x.lineJoin='round';x.strokeStyle='rgba(255,0,81,.25)';x.lineWidth=5*u/s;x.beginPath();routeTo(R,R.tot).forEach((q,k)=>k?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.stroke();
    x.strokeStyle='#FF0051';x.lineWidth=5*u/s;x.beginPath();routeTo(R,d).forEach((q,k)=>k?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.stroke();
    ['gz','viomi','stelang'].forEach(id=>{x.fillStyle='#FF0051';x.beginPath();x.arc(ST[id].x,ST[id].y,9*u/s,0,6.283);x.fill();x.strokeStyle='#FFFFFF';x.lineWidth=3*u/s;x.stroke()});
    x.setTransform(1,0,0,1,0,0);x.translate(W/2,H*.62);const bw=16*u,bl=40*u;x.fillStyle='#FF0051';x.strokeStyle='#FFFFFF';x.lineWidth=3*u;x.beginPath();x.roundRect(-bw/2,-bl/2,bw,bl,[7*u,7*u,4*u,4*u]);x.fill();x.stroke();x.fillStyle='#FFFFFF';x.beginPath();x.roundRect(-bw/2+3*u,-bl/2+4*u,bw-6*u,7*u,2*u);x.fill();
    const seg=R.segs.find(s=>d<=s.start+s.len)||R.segs[R.segs.length-1];const left=Math.max(0,(seg.start+seg.len-d)*1.113*1.3);const nm={viomi:'Viomi',stelang:'Stelang'}[seg.to];
    const h=$('[data-hud=leg]',this.st);if(h)h.innerHTML=`<b style="font-weight:700">${seg.to==='viomi'?'Day 1 · Guangzhou to Viomi':'Day 1 · Viomi to Stelang'}</b><br/>${nm} · ${left<.5?'arrived':Math.round(left)+' km'}`}
  photo(t){const S=STY.light;const c=this.cam(0,0);const u=this.cv.width/1000,H=this.cv.height;this.base('light',c);const x=this.ctx;const d=ROUTE.tot*ease(clamp(t/8.6));
    this.strokeRoute(routeTo(ROUTE,d),c,S,u);this.pins(c,S,u,OV,id=>STOPD[id]<=d+.01?1:0);this.labels(c,S,u,false);
    const hd=at(ROUTE,d);if(t<8.7){const p=this.X(c,hd.p);this.bus(x,p[0],p[1],Math.cos(hd.ang)>=0?1:-1,u,'#FF0051','#FFFFFF')}
    x.setTransform(1,0,0,1,0,0);
    Object.entries(PHOTO).forEach(([id,[fn,ox,oy]])=>{if(STOPD[id]>d+.01)return;if(this.reach[id]==null)this.reach[id]=t;const age=t-this.reach[id];const im=img(fn);
      const big=H*.3,small=H*.15;const k=age<.3?ease(age/.3)*1.06:age<.42?1.06-.06*((age-.3)/.12):age<1.1?1:age<1.5?1-ease((age-1.1)/.4)*(1-small/big):small/big;const sz=big*k;
      const p=this.X(c,[ST[id].x,ST[id].y]);const dist=(sz*.62+18*u);const cx=p[0]+ox*dist,cy=p[1]+oy*dist;
      x.strokeStyle='#1F2323';x.globalAlpha=.5;x.lineWidth=1.2*u;x.beginPath();x.moveTo(p[0],p[1]);x.lineTo(cx,cy);x.stroke();x.globalAlpha=1;
      const pad=sz*.045,lab=age<1.3?sz*.17:0;x.fillStyle='#FFFFFF';x.beginPath();x.roundRect(cx-sz/2,cy-sz/2,sz,sz+lab,6*u);x.fill();
      if(im.complete&&im.naturalWidth){const iw=im.naturalWidth,ih=im.naturalHeight,s2=Math.min(iw,ih);x.save();x.beginPath();x.roundRect(cx-sz/2+pad,cy-sz/2+pad,sz-pad*2,sz-pad*2,4*u);x.clip();x.drawImage(im,(iw-s2)/2,(ih-s2)/2,s2,s2,cx-sz/2+pad,cy-sz/2+pad,sz-pad*2,sz-pad*2);x.restore()}
      if(lab){x.fillStyle='#1F2323';x.font=`600 ${Math.max(9,sz*.075)}px Poppins`;x.textAlign='left';x.textBaseline='middle';x.fillText(LAB[id][0],cx-sz/2+pad*1.4,cy+sz/2+lab*.42-pad*.2)}});
    if(t>11.4){x.fillStyle=`rgba(236,237,238,${ss(11.4,12,t)})`;x.fillRect(0,0,this.cv.width,H)}}
  days(t){const LT=this.k==='dayslight';const G=LT?'light':'purple';const S=STY[G];const c=this.cam(0,0);const u=this.cv.width/1000;this.base(G,c);const x=this.ctx;const d=ROUTE.tot*clamp((t-.4)/9);
    const seg=ROUTE.segs.find(s=>d<=s.start+s.len)||ROUTE.segs[ROUTE.segs.length-1];const day=DAYN[seg.to];
    const all=routeTo(ROUTE,d);let done=[],cur=[];ROUTE.segs.forEach(s=>{if(s.start>=d)return;const pp=routeTo({segs:[{...s,start:0}],tot:s.len},Math.min(s.len,d-s.start));(DAYN[s.to]===day?cur:done).push(pp)});
    done.forEach(pp=>this.strokeRoute(pp,c,{route:LT?'#1F2323':'#FFFFFF',rlw:2.4},u,.35));cur.forEach(pp=>this.strokeRoute(pp,c,{route:'#FF0051',rlw:4},u));
    this.pins(c,S,u,OV,id=>STOPD[id]<=d+.01?1:0);this.labels(c,S,u,false);const hd=at(ROUTE,d);if(t<9.5){const p=this.X(c,hd.p);x.setTransform(1,0,0,1,0,0);this.bus(x,p[0],p[1],Math.cos(hd.ang)>=0?1:-1,u,LT?'#FF0051':'#FFFFFF',LT?'#FFFFFF':'#FF0051')}
    const nstop=1+ROUTE.segs.filter(s=>s.start+s.len<=d+.01&&s.to!=='gz').length;
    const q=k=>$(`[data-hud=${k}]`,this.st);if(q('day')){q('day').textContent='Day '+day;q('km').textContent=Math.round(d*1.113*1.3);q('stop').textContent=Math.min(11,nstop)}
    [1,2,3,4].forEach(n=>{const segs=ROUTE.segs.filter(s=>DAYN[s.to]===n);const tot=segs.reduce((a,s)=>a+s.len,0);const got=segs.reduce((a,s)=>a+clamp(d-s.start,0,s.len),0);const el=$(`[data-dd="${n}"]`,this.st);if(el){$('u',el).style.width=(tot?got/tot*100:0)+'%';el.classList.toggle('on',n===day)}})}
  globe(t){const W=this.cv.width,H=this.cv.height,u=W/1000,x=this.ctx;x.setTransform(1,0,0,1,0,0);x.fillStyle='#13002D';x.fillRect(0,0,W,H);
    const cFlat={s:Math.min(W/PRDV[2],H/PRDV[3]),cx:PRDV[0],cy:PRDV[1]};const tgt=L2(PRDV[0],PRDV[1]);const R0=H*.42,R1=cFlat.s*100/D2R;
    const kr=ease(clamp((t-2.6)/1.6));const l0=lerp(126,tgt[0],kr),p0=lerp(2,tgt[1],kr);
    const kz=clamp((t-3.8)/2.6);const R=Math.exp(lerp(Math.log(R0),Math.log(R1),ease(kz)))*(1+.18*kr*(1-kz));
    const flat=ss(5.7,6.4,t);
    if(flat<1){const cx=W/2,cy=H/2;const pr=(lo,la)=>{const a=la*D2R,o=(lo-l0)*D2R,p=p0*D2R;const cc=Math.sin(p)*Math.sin(a)+Math.cos(p)*Math.cos(a)*Math.cos(o);let X=R*Math.cos(a)*Math.sin(o),Y=R*(Math.cos(p)*Math.sin(a)-Math.sin(p)*Math.cos(a)*Math.cos(o));if(cc<0){const r=Math.hypot(X,Y)||1;X=X/r*R;Y=Y/r*R}return [cx+X,cy-Y,cc]};
      x.globalAlpha=1-flat;x.fillStyle='rgba(255,255,255,.07)';x.beginPath();x.arc(cx,cy,R,0,6.283);x.fill();
      const drawRings=(rings,col)=>{x.fillStyle=col;rings.forEach(r=>{const P=r.map(q=>pr(q[0],q[1]));if(!P.some(p=>p[2]>0))return;x.beginPath();P.forEach((p,i)=>i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));x.closePath();x.fill()})};
      drawRings(WORLD,'#32006E');x.globalAlpha=(1-flat)*(1-ss(4.6,5.7,t));drawRings(CHN,'#FF0051');x.globalAlpha=1-flat;
      x.strokeStyle='rgba(255,255,255,.18)';x.lineWidth=1.5*u;x.beginPath();x.arc(cx,cy,R,0,6.283);x.stroke();
      const gz=L2(ST.gz.x,ST.gz.y);const ff=1-ss(4.0,4.6,t);
      if(ff>0)MP.origins.forEach((o,i)=>{const t0=.5+i*.28;if(t<t0)return;const k=ease(clamp((t-t0)/1.5));const ol=L2(o.x,o.y);const P=[];for(let j=0;j<=24;j++){const f=k*j/24;P.push(pr(lerp(ol[0],gz[0],f),lerp(ol[1],gz[1],f)))}
        x.globalAlpha=(1-flat)*ff*.7;x.strokeStyle='#FFFFFF';x.lineWidth=1.4*u;x.setLineDash([4*u,4*u]);x.beginPath();P.forEach((p,j)=>j?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]));x.stroke();x.setLineDash([]);
        const h=P[P.length-1];const rr=15*u;x.globalAlpha=(1-flat)*ff;x.save();x.beginPath();x.arc(h[0],h[1],rr,0,6.283);x.fillStyle='#fff';x.fill();x.clip();const im=FLI[o.id];if(im.complete&&im.naturalWidth)x.drawImage(im,h[0]-rr,h[1]-rr,rr*2,rr*2);x.restore();x.strokeStyle='#fff';x.lineWidth=2*u;x.beginPath();x.arc(h[0],h[1],rr,0,6.283);x.stroke()});
      x.globalAlpha=1}
    if(flat>0){x.globalAlpha=flat;this.base('purple',cFlat);x.globalAlpha=1;const d=ROUTE.tot*ease(clamp((t-6.3)/3.6));if(d>0){this.strokeRoute(routeTo(ROUTE,d),cFlat,STY.purple,u);this.pins(cFlat,STY.purple,u,OV,id=>STOPD[id]<=d+.01?1:0)}this.labels(cFlat,STY.purple,u,false);x.globalAlpha=flat;
      if(t>6.4&&t<11.4){const a=ss(6.4,6.9,t)*(1-ss(10.9,11.4,t));const p=this.X(cFlat,[ST.gz.x,ST.gz.y]);x.setTransform(1,0,0,1,0,0);x.globalAlpha=a;x.font=`600 ${16*u}px Poppins`;const w=x.measureText('Guangzhou').width+28*u;x.fillStyle='#FFFFFF';x.beginPath();x.roundRect(p[0]+22*u,p[1]-48*u,w,32*u,16*u);x.fill();x.fillStyle='#13002D';x.textAlign='left';x.textBaseline='middle';x.fillText('Guangzhou',p[0]+36*u,p[1]-32*u)}
      x.globalAlpha=1}
    if(t>11.4){x.setTransform(1,0,0,1,0,0);x.fillStyle=`rgba(19,0,45,${ss(11.4,12,t)})`;x.fillRect(0,0,W,H)}}
}
const ROUTE_N=routeTo(ROUTE,ROUTE.tot).length;
const FOLLOW=buildRoute(['gz','viomi','stelang']);const FOLB=[3672,3058,3746,3150];
const PHOTO={viomi:['waterdrop',-1,-.25],stelang:['stelang_shelf',-1,.55],rongde:['tower',-.95,.45],weijin:['press',1,-.1],vision:['vision_line',.75,.75],centre1688:['centre_orange',-.85,-.7],fair:['crowd',.95,-.6]};
const DAYN={viomi:1,stelang:1,dinner1:1,rongde:2,weijin:2,vision:2,gz:2,dimsum:3,centre1688:3,alibaba:3,fair:4};
const WORLD=MP.world.filter(r=>r.reduce((a,q)=>a+q[1],0)/r.length>-60);
const CHN=MP.china.map(f=>f.p.filter((q,i)=>i%2===0).map(q=>L2(q[0],q[1])));
if(!window.LAB_NO_BUILD)build();
