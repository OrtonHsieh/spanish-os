const scenarios=window.SPANISH_OS_SCENARIOS;
const initialState={screen:"home",scenario:0,lesson:0,previewScenario:0,step:0,selected:null,score:0,combo:0,bestCombo:0,xp:0,completedByScenario:{},name:"",settings:false,confirmReset:false};
let state={...initialState,completedByScenario:{}};
const root=document.querySelector("#spanish-os");

function scenario(index=state.scenario){return scenarios[index]}
function lessons(){return scenario().lessons}
function completed(index=state.scenario){return state.completedByScenario[scenarios[index].id]||[]}
function scenarioComplete(index){return completed(index).length===scenarios[index].lessons.length}
function scenarioUnlocked(index){if(index===0)return true;const previous=scenarios[index-1];return previous.status==="available"&&completed(index-1).length/previous.lessons.length>=.7}
function currentUnlockedLesson(){return Math.min(completed().length,lessons().length-1)}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}

function load(){
  try{
    const profile=JSON.parse(localStorage.getItem("spanish-os-profile")||"{}");
    const saved=JSON.parse(localStorage.getItem("spanish-os-progress")||"{}");
    let savedMap={};
    if(Array.isArray(saved.completedLessons))savedMap[scenarios[0].id]=saved.completedLessons;
    else if(saved.completedLessons&&typeof saved.completedLessons==="object")savedMap=saved.completedLessons;
    const cleanMap={};
    scenarios.forEach(s=>{const values=Array.isArray(savedMap[s.id])?savedMap[s.id]:[];cleanMap[s.id]=values.filter(id=>s.lessons.some(l=>l.id===id))});
    let scenarioIndex=scenarios.findIndex(s=>s.id===saved.currentScenario&&s.status==="available");
    if(scenarioIndex<0)scenarioIndex=0;
    if(!scenarioUnlockedFromMap(scenarioIndex,cleanMap))scenarioIndex=0;
    const savedLesson=Number.isInteger(saved.currentLesson)?saved.currentLesson:0;
    const lessonIndex=Math.min(Math.max(savedLesson,cleanMap[scenarios[scenarioIndex].id].length),scenarios[scenarioIndex].lessons.length-1);
    state={...state,name:profile.name||"",xp:Number(saved.xp)||0,completedByScenario:cleanMap,scenario:scenarioIndex,lesson:lessonIndex};
  }catch(_){/* Ignore malformed device-local data. */}
}
function scenarioUnlockedFromMap(index,map){if(index===0)return true;const previous=scenarios[index-1],done=map[previous.id]||[];return previous.status==="available"&&done.length/previous.lessons.length>=.7}
function save(){
  const finished=scenarios.filter((_,i)=>scenarioComplete(i)).map(s=>s.id);
  localStorage.setItem("spanish-os-progress",JSON.stringify({version:4,xp:state.xp,currentScenario:scenario().id,completedScenarios:finished,completedLessons:state.completedByScenario,currentLesson:state.lesson,updatedAt:new Date().toISOString()}));
}

function header(){const initial=(state.name.trim()[0]||"旅").toUpperCase();return `<header class="topbar"><button class="brand brand-button" data-action="home"><span class="brand-mark">S</span>Spanish OS</button><nav class="nav-links"><button class="${state.screen==="home"?"active":""}" data-action="home">首頁</button><button class="${state.screen==="map"||state.screen==="scenario"?"active":""}" data-action="map">場景地圖</button></nav><div class="header-actions"><div class="xp-counter"><span>XP</span><strong>${state.xp}</strong></div><button class="settings-trigger" data-action="settings" aria-label="設定">⚙</button><span class="avatar" title="學習者：${escapeHtml(state.name||"旅人")}">${escapeHtml(initial)}</span></div></header>`}
function route(){return `<div class="route">${lessons().map((l,i)=>`<i class="${completed().includes(l.id)?"done":i===state.lesson?"active":""}"></i>`).join("")}</div>`}
function home(){const s=scenario(),ls=lessons(),l=ls[state.lesson],done=completed();return `${header()}<section class="hero"><div><span class="eyebrow">場景 ${s.number} · 20 分鐘生活西語</span><h1>${state.name?`${escapeHtml(state.name)}，繼續你的`:"從生活場景，開始你的"}<br>西班牙旅程。</h1><p>${s.canDo} 每課約 5 分鐘，完成練習就能解鎖下一段任務。</p><button class="primary-action" data-action="start"><span>${done.length?"繼續學習":"開始第 1 課"}</span><b>→</b></button></div><article class="passport"><div class="passport-top">ESPAÑA <i>✦</i></div><div class="passport-art"><span>${s.number==="01"?"¡HOLA!":"¡VAMOS!"}</span><span>MISIÓN ${s.number} · ${s.spanishTitle.toUpperCase()}</span></div><div class="passport-copy"><small>目前任務</small><h2>${l.title}</h2>${route()}<p>已完成 ${done.length} / ${ls.length} 個微課程</p></div></article></section><section class="dashboard"><article class="lesson-card"><div class="card-heading"><span class="lesson-number">${state.lesson+1}</span><div><small>下一個微課程</small><h2>${l.title}</h2></div><span class="duration">約 5 分鐘</span></div><div class="lesson-preview"><button data-speak="${l.preview}" aria-label="播放發音">▶</button><div><span>${l.preview}</span><small>${l.translation}</small></div></div><div class="skill-tags"><span>西班牙發音</span><span>生活句型</span><span>即時回饋</span></div></article><article class="ability-card"><small>本場景能力</small><h3>${s.title}</h3><p>${s.canDo}</p><div class="stamp ${scenarioComplete(state.scenario)?"earned":""}">${s.stamp}<span>READY</span></div></article></section>${microList()}${settings()}`}
function microList(){const unlocked=currentUnlockedLesson(),done=completed();return `<section class="micro-list"><h2>本場景的 4 個微課程</h2>${lessons().map((l,i)=>{const isDone=done.includes(l.id),locked=i>unlocked;return `<button class="micro-row ${isDone?"complete":""}" data-lesson="${i}" ${locked?"disabled":""}><b>${isDone?"✓":i+1}</b><span><strong>${l.title}</strong><small>${l.stage} · ${l.subtitle}</small></span><em>${isDone?"已完成":locked?"尚未解鎖":i===state.lesson?"目前課程":"開始"}</em></button>`}).join("")}</section>`}
function mapPage(){const finished=scenarios.filter((_,i)=>scenarioComplete(i)).length;return `${header()}<section class="map-page catalog-page"><span class="eyebrow">TU RUTA · 你的學習路線</span><h1>10 個西班牙生活場景</h1><p>每個場景約 20 分鐘。完成前一場景至少 3 堂課即可解鎖下一站；尚未開放的內容仍可預覽。</p><div class="catalog-summary"><strong>${finished} / ${scenarios.length}</strong><span>完成場景</span><b>${scenarios.length*4}</b><span>微課程路線</span></div><div class="scene-path">${scenarios.map((s,i)=>{const released=s.status==="available",unlocked=released&&scenarioUnlocked(i),done=scenarioComplete(i),active=i===state.scenario;return `<article class="scene-card ${active?"current":""} ${!unlocked?"locked":""}"><span class="scene-index">${done?"✓":s.number}</span><div><small>${done?"CAN COPE":unlocked?active?"學習中":"已解鎖":released?"完成上一場景 3 堂課解鎖":"即將開放"}</small><h2>${s.title}</h2><p>${s.description}</p><span class="scene-can-do">完成後：${s.canDo}</span></div><button data-scenario="${i}">${unlocked?active?"繼續":"開始":"預覽"} →</button></article>`}).join("")}</div></section>${settings()}`}
function scenarioPreview(){const s=scenarios[state.previewScenario],released=s.status==="available",unlock=released&&scenarioUnlocked(state.previewScenario);return `${header()}<section class="scenario-preview"><button class="text-back" data-action="map">← 回到場景地圖</button><span class="eyebrow">場景 ${s.number} · ${s.spanishTitle}</span><h1>${s.title}</h1><p class="scenario-can-do-lead">${s.canDo}</p><div class="preview-status">${released?"完成上一場景至少 3 堂課即可解鎖":"內容製作中 · 可先查看課程路線"}</div><section class="preview-lessons">${s.lessons.map((l,i)=>`<article><b>${i+1}</b><div><small>${l.stage}</small><h2>${l.title}</h2><p>${l.subtitle}</p></div><span>約 5 分鐘</span></article>`).join("")}</section><button class="primary-action" data-action="${unlock?"open-preview":"map"}"><span>${unlock?"開始這個場景":"探索其他場景"}</span><b>→</b></button></section>${settings()}`}
function quiz(){const ls=lessons(),l=ls[state.lesson],q=l.questions[state.step],progress=((state.step+(state.selected!==null?1:0))/l.questions.length)*100,receptive=q.answer!==q.phrase;return `${header()}<section class="lesson-screen"><div class="lesson-top"><button data-action="home" aria-label="離開課程">×</button><div class="lesson-track"><i style="width:${progress}%"></i></div><span class="combo">🔥 ${state.combo} COMBO</span></div><article class="quiz-card"><small>${scenario().title} · 第 ${state.lesson+1} 課 · ${state.step+1}/${l.questions.length}</small>${receptive?`<div class="sound-row"><button data-speak="${q.phrase}" aria-label="播放發音">▶</button><button data-speak-slow="${q.phrase}">慢速播放</button></div><h2>${q.phrase}</h2>`:'<span class="eyebrow question-type">情境選句</span>'}<p>${q.prompt}</p><div class="answer-grid">${q.options.map((o,i)=>{let cls="";if(state.selected!==null)cls=o===q.answer?"correct":i===state.selected?"wrong":"muted";return `<button class="${cls}" data-answer="${i}" ${state.selected!==null?"disabled":""}><b>${String.fromCharCode(65+i)}</b>${o}</button>`}).join("")}</div>${feedback(q)}</article></section>${settings()}`}
function feedback(q){if(state.selected===null)return "";const ok=q.options[state.selected]===q.answer;return `<div class="feedback ${ok?"success":"retry"}"><div><strong>${ok?"答對了！ +10 XP":"再記一次就會了"}</strong><p>${ok?`連續答對 ${state.combo} 題。`:`正確答案：${q.answer}`}</p></div><button data-action="next">繼續 →</button></div>`}
function result(){const ls=lessons(),l=ls[state.lesson],last=state.lesson===ls.length-1,s=scenario(),done=completed();const nextScenario=scenarios[state.scenario+1],newScenarioReady=last&&nextScenario?.status==="available";return `${header()}<section class="result-screen"><div class="confetti">✦ • ✦ • ✦</div><div class="big-stamp">${state.score}<span>XP</span><small>${l.title}</small></div><span class="eyebrow">微課程完成</span><h1>${last?"場景完成！":"下一課已解鎖"}</h1><p>${last?s.canDo:`你完成了「${l.title}」，現在可以進入「${ls[state.lesson+1].title}」。`}</p><div class="result-stats"><div><strong>${state.score}</strong><span>本課 XP</span></div><div><strong>${state.bestCombo}</strong><span>最佳 Combo</span></div><div><strong>${done.length}/4</strong><span>場景進度</span></div></div><div class="result-actions"><button class="secondary-action" data-action="repeat-lesson">↻ 再練一次</button><button class="primary-action" data-action="${last?newScenarioReady?"map":"map":"next-lesson"}"><span>${last?newScenarioReady?"下一個場景已解鎖":"回到場景地圖":"進入下一課"}</span><b>→</b></button></div></section>${settings()}`}
function settings(){if(!state.settings)return "";return `<div class="settings-backdrop"><section class="settings-panel" role="dialog" aria-modal="true"><div class="settings-heading"><div><small>PROFILE</small><h2>學習設定</h2></div><button data-action="close-settings">×</button></div><label for="learner-name">你的名字</label><p class="field-help">只儲存在這台裝置，用於首頁稱呼。</p><input id="learner-name" value="${escapeHtml(state.name)}" maxlength="24" placeholder="例如：Orton"><button class="save-settings" data-action="save-name">儲存名字</button><div class="danger-zone"><h3>初始化學習進度</h3><p>清除所有場景的 XP、完成紀錄與解鎖狀態，並回到第 1 單元第 1 課。名字會保留。</p>${state.confirmReset?'<div class="reset-confirm"><span>確定要重新開始嗎？</span><button data-action="confirm-reset">確定初始化</button><button data-action="cancel-reset">取消</button></div>':'<button data-action="reset">初始化進度</button>'}</div></section></div>`}
function render(){root.innerHTML=state.screen==="home"?home():state.screen==="map"?mapPage():state.screen==="scenario"?scenarioPreview():state.screen==="quiz"?quiz():result()}
function startLesson(index=state.lesson){if(index>currentUnlockedLesson())return;state={...state,screen:"quiz",lesson:index,step:0,selected:null,score:0,combo:0,bestCombo:0};save();render()}
function openScenario(index){if(scenarios[index].status!=="available"||!scenarioUnlocked(index)){state.previewScenario=index;state.screen="scenario";return render()}state.scenario=index;state.lesson=Math.min(completed(index).length,scenarios[index].lessons.length-1);state.screen="home";save();render()}
function speak(text,rate=.9){if(!("speechSynthesis" in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="es-ES";u.rate=rate;const voice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith("es-es"));if(voice)u.voice=voice;speechSynthesis.speak(u)}

root.addEventListener("click",e=>{
  const target=e.target.closest("button");if(!target)return;
  if(target.dataset.speak!==undefined)return speak(target.dataset.speak);
  if(target.dataset.speakSlow!==undefined)return speak(target.dataset.speakSlow,.6);
  if(target.dataset.lesson!==undefined)return startLesson(Number(target.dataset.lesson));
  if(target.dataset.scenario!==undefined)return openScenario(Number(target.dataset.scenario));
  if(target.dataset.answer!==undefined&&state.selected===null){const q=lessons()[state.lesson].questions[state.step],i=Number(target.dataset.answer),ok=q.options[i]===q.answer;state.selected=i;if(ok){state.score+=10;state.xp+=10;state.combo++;state.bestCombo=Math.max(state.bestCombo,state.combo)}else state.combo=0;save();return render()}
  const action=target.dataset.action;
  if(action==="home"){state.screen="home";state.settings=false}
  if(action==="map"){state.screen="map";state.settings=false}
  if(action==="start")return startLesson();
  if(action==="repeat-lesson")return startLesson(state.lesson);
  if(action==="open-preview")return openScenario(state.previewScenario);
  if(action==="next"){const ls=lessons(),l=ls[state.lesson];if(state.step<l.questions.length-1){state.step++;state.selected=null}else{const s=scenario(),id=l.id,list=completed();if(!list.includes(id))state.completedByScenario={...state.completedByScenario,[s.id]:[...list,id]};state.screen="result";save()}}
  if(action==="next-lesson"){state.lesson=Math.min(state.lesson+1,lessons().length-1);return startLesson(state.lesson)}
  if(action==="settings")state.settings=true;
  if(action==="close-settings")state.settings=false;
  if(action==="save-name"){state.name=document.querySelector("#learner-name").value.trim();localStorage.setItem("spanish-os-profile",JSON.stringify({name:state.name}));state.settings=false}
  if(action==="reset")state.confirmReset=true;
  if(action==="cancel-reset")state.confirmReset=false;
  if(action==="confirm-reset"){localStorage.removeItem("spanish-os-progress");state={...initialState,name:state.name,completedByScenario:{}}}
  render();
});
load();render();
