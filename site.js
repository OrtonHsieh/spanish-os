const lessons = [
  { id:"greetings", title:"打招呼", subtitle:"初次見面的第一句", preview:"Buenos días", translation:"早安", questions:[
    {prompt:"早上見到店員，你會說？", phrase:"Buenos días", answer:"早安", options:["晚安","早安","謝謝"]},
    {prompt:"朋友問候你「¿Qué tal?」，意思是？", phrase:"¿Qué tal?", answer:"你好嗎？", options:["你叫什麼名字？","你好嗎？","你住哪裡？"]},
    {prompt:"你想回答「很好，謝謝」，選哪一句？", phrase:"Muy bien, gracias", answer:"Muy bien, gracias", options:["Muy bien, gracias","Hasta luego","Me llamo Ana"]}
  ]},
  { id:"name", title:"介紹名字", subtitle:"說出自己的名字並詢問對方", preview:"Me llamo...", translation:"我叫……", questions:[
    {prompt:"「Me llamo Lucía」是什麼意思？", phrase:"Me llamo Lucía", answer:"我叫 Lucía", options:["我來自 Lucía","我叫 Lucía","我是老師"]},
    {prompt:"你想問對方叫什麼名字，選哪一句？", phrase:"¿Cómo te llamas?", answer:"¿Cómo te llamas?", options:["¿Cómo te llamas?","¿De dónde eres?","¿Qué tal?"]},
    {prompt:"聽到對方的名字後，可以怎麼說？", phrase:"Encantado", answer:"很高興認識你", options:["再見","不客氣","很高興認識你"]}
  ]},
  { id:"origin", title:"來自哪裡", subtitle:"談論家鄉、居住地與語言", preview:"Soy de Taiwán", translation:"我來自台灣", questions:[
    {prompt:"「¿De dónde eres?」是在問？", phrase:"¿De dónde eres?", answer:"你來自哪裡？", options:["你住在哪裡？","你來自哪裡？","你會說什麼語言？"]},
    {prompt:"你想說「我住在台北」，選哪一句？", phrase:"Vivo en Taipéi", answer:"Vivo en Taipéi", options:["Soy Taipéi","Vivo en Taipéi","Voy a Taipéi"]},
    {prompt:"「Hablo chino y un poco de español」是？", phrase:"Hablo chino y un poco de español", answer:"我會說中文和一點西班牙文", options:["我會說中文和一點西班牙文","我在中國學西班牙文","我只會說西班牙文"]}
  ]},
  { id:"dialogue", title:"實境對話", subtitle:"完成一段語言交換初遇", preview:"¡Encantado!", translation:"很高興認識你！", questions:[
    {prompt:"語言交換活動中，先自然地打招呼：", phrase:"Hola, ¿qué tal?", answer:"Hola, ¿qué tal?", options:["Adiós","Hola, ¿qué tal?","Perdón"]},
    {prompt:"對方問「¿Cómo te llamas?」，你回答：", phrase:"Me llamo...", answer:"Me llamo...", options:["Me llamo...","Soy de...","Vivo en..."]},
    {prompt:"接著對方問「¿De dónde eres?」，你回答：", phrase:"Soy de Taiwán", answer:"Soy de Taiwán", options:["Estoy Taiwán","Soy de Taiwán","Hablo Taiwán"]}
  ]}
];

const initialState = {screen:"home",lesson:0,step:0,selected:null,score:0,combo:0,bestCombo:0,xp:0,completed:[],name:"",settings:false,confirmReset:false};
let state = {...initialState};
const root = document.querySelector("#spanish-os");

function load(){
  try{
    const profile=JSON.parse(localStorage.getItem("spanish-os-profile")||"{}");
    const saved=JSON.parse(localStorage.getItem("spanish-os-progress")||"{}");
    const completed=Array.isArray(saved.completedLessons)?saved.completedLessons.filter(id=>lessons.some(l=>l.id===id)):[];
    const current=Math.min(Number.isInteger(saved.currentLesson)?saved.currentLesson:completed.length,lessons.length-1);
    state={...state,name:profile.name||"",xp:Number(saved.xp)||0,completed,lesson:current};
  }catch(_){ /* Ignore malformed device-local data. */ }
}
function save(){localStorage.setItem("spanish-os-progress",JSON.stringify({version:2,xp:state.xp,completedLessons:state.completed,currentLesson:state.lesson,updatedAt:new Date().toISOString()}));}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));}
function currentUnlocked(){return Math.min(state.completed.length,lessons.length-1);}
function header(){const initial=(state.name.trim()[0]||"旅").toUpperCase();return `<header class="topbar"><button class="brand brand-button" data-action="home"><span class="brand-mark">S</span>Spanish OS</button><nav class="nav-links"><button class="active" data-action="home">首頁</button><button data-action="map">場景地圖</button></nav><div class="header-actions"><div class="xp-counter"><span>XP</span><strong>${state.xp}</strong></div><button class="settings-trigger" data-action="settings" aria-label="設定">⚙</button><button class="avatar" data-action="settings" aria-label="個人設定">${escapeHtml(initial)}</button></div></header>`;}
function route(){return `<div class="route">${lessons.map((l,i)=>`<i class="${state.completed.includes(l.id)?"done":i===state.lesson?"active":""}"></i>`).join("")}</div>`;}
function home(){const l=lessons[state.lesson];return `${header()}<section class="hero"><div><span class="eyebrow">20 分鐘生活場景 · 西班牙西語</span><h1>${state.name?`${escapeHtml(state.name)}，繼續你的`:"從一句問候，開始你的"}<br>西班牙旅程。</h1><p>每課約 5 分鐘。完成練習就能解鎖下一段對話，把單字變成生活中真的說得出口的西班牙文。</p><button class="primary-action" data-action="start"><span>${state.completed.length?"繼續學習":"開始第 1 課"}</span><b>→</b></button></div><article class="passport"><div class="passport-top">ESPAÑA <i>✦</i></div><div class="passport-art"><span>¡HOLA!</span><span>MISIÓN 01 · PRIMER ENCUENTRO</span></div><div class="passport-copy"><small>目前任務</small><h2>${l.title}</h2>${route()}<p>已完成 ${state.completed.length} / ${lessons.length} 個微課程</p></div></article></section><section class="dashboard"><article class="lesson-card"><div class="card-heading"><span class="lesson-number">${state.lesson+1}</span><div><small>下一個微課程</small><h2>${l.title}</h2></div><span class="duration">約 5 分鐘</span></div><div class="lesson-preview"><button data-speak="${l.preview}" aria-label="播放發音">▶</button><div><span>${l.preview}</span><small>${l.translation}</small></div></div><div class="skill-tags"><span>西班牙發音</span><span>生活句型</span><span>即時回饋</span></div></article><article class="ability-card"><small>本場景能力</small><h3>自然完成初次見面</h3><p>打招呼、介紹姓名、談家鄉，再把句子串成一段實境對話。</p><div class="stamp ${state.completed.length===lessons.length?"earned":""}">A1<span>READY</span></div></article></section>${microList()}${settings()}`;}
function microList(){const unlocked=currentUnlocked();return `<section class="micro-list"><h2>本場景的 4 個微課程</h2>${lessons.map((l,i)=>{const done=state.completed.includes(l.id),locked=i>unlocked;return `<button class="micro-row ${done?"complete":""}" data-lesson="${i}" ${locked?"disabled":""}><b>${done?"✓":i+1}</b><span><strong>${l.title}</strong><small>${l.subtitle}</small></span><em>${done?"已完成":locked?"尚未解鎖":i===state.lesson?"目前課程":"開始"}</em></button>`}).join("")}</section>`;}
function mapPage(){const unlocked=currentUnlocked();return `${header()}<section class="map-page"><span class="eyebrow">MISIÓN 01</span><h1>初次見面</h1><p>每完成一課，就解鎖下一個生活能力。</p><div class="scene-path">${lessons.map((l,i)=>{const done=state.completed.includes(l.id),locked=i>unlocked;return `<article class="scene-card ${i===state.lesson?"current":""} ${locked?"locked":""}"><span class="scene-index">${done?"✓":i+1}</span><div><small>${done?"COMPLETED":locked?"LOCKED":"AVAILABLE"}</small><h2>${l.title}</h2><p>${l.subtitle}</p></div>${locked?'<span class="lock">🔒 完成上一課解鎖</span>':`<button data-lesson="${i}">${done?"再練一次":"開始"}</button>`}</article>`}).join("")}</div></section>${settings()}`;}
function quiz(){const l=lessons[state.lesson],q=l.questions[state.step],progress=((state.step+(state.selected!==null?1:0))/l.questions.length)*100;return `${header()}<section class="lesson-screen"><div class="lesson-top"><button data-action="home" aria-label="離開課程">×</button><div class="lesson-track"><i style="width:${progress}%"></i></div><span class="combo">🔥 ${state.combo} COMBO</span></div><article class="quiz-card"><small>第 ${state.lesson+1} 課 · ${state.step+1}/${l.questions.length}</small><div class="sound-row"><button data-speak="${q.phrase}" aria-label="播放發音">▶</button><button data-speak-slow="${q.phrase}">慢速播放</button></div><h2>${q.phrase}</h2><p>${q.prompt}</p><div class="answer-grid">${q.options.map((o,i)=>{let cls="";if(state.selected!==null)cls=o===q.answer?"correct":i===state.selected?"wrong":"muted";return `<button class="${cls}" data-answer="${i}" ${state.selected!==null?"disabled":""}><b>${String.fromCharCode(65+i)}</b>${o}</button>`}).join("")}</div>${feedback(q)}</article></section>${settings()}`;}
function feedback(q){if(state.selected===null)return "";const ok=q.options[state.selected]===q.answer;return `<div class="feedback ${ok?"success":"retry"}"><div><strong>${ok?"答對了！ +10 XP":"再記一次就會了"}</strong><p>${ok?`連續答對 ${state.combo} 題。`:`正確答案：${q.answer}`}</p></div><button data-action="next">繼續 →</button></div>`;}
function result(){const l=lessons[state.lesson],last=state.lesson===lessons.length-1;return `${header()}<section class="result-screen"><div class="confetti">✦ • ✦ • ✦</div><div class="big-stamp">${state.score}<span>XP</span><small>${l.title}</small></div><span class="eyebrow">微課程完成</span><h1>${last?"場景完成！":"下一課已解鎖"}</h1><p>${last?"你已經能完成一段初次見面的基本對話。隨時可以回到地圖複習。":`你完成了「${l.title}」，現在可以進入「${lessons[state.lesson+1].title}」。`}</p><div class="result-stats"><div><strong>${state.score}</strong><span>本課 XP</span></div><div><strong>${state.bestCombo}</strong><span>最佳 Combo</span></div><div><strong>${state.completed.length}/4</strong><span>場景進度</span></div></div><button class="primary-action centered" data-action="${last?"map":"next-lesson"}"><span>${last?"回到場景地圖":"進入下一課"}</span><b>→</b></button></section>${settings()}`;}
function settings(){if(!state.settings)return "";return `<div class="settings-backdrop"><section class="settings-panel" role="dialog" aria-modal="true"><div class="settings-heading"><div><small>PROFILE</small><h2>學習設定</h2></div><button data-action="close-settings">×</button></div><label for="learner-name">你的名字</label><p class="field-help">只儲存在這台裝置，用於首頁稱呼。</p><input id="learner-name" value="${escapeHtml(state.name)}" maxlength="24" placeholder="例如：Orton"><button class="save-settings" data-action="save-name">儲存名字</button><div class="danger-zone"><h3>初始化學習進度</h3><p>清除 XP、完成紀錄與解鎖狀態，並回到第 1 課。名字會保留。</p>${state.confirmReset?'<div class="reset-confirm"><span>確定要重新開始嗎？</span><button data-action="confirm-reset">確定初始化</button><button data-action="cancel-reset">取消</button></div>':'<button data-action="reset">初始化進度</button>'}</div></section></div>`;}
function render(){root.innerHTML=state.screen==="home"?home():state.screen==="map"?mapPage():state.screen==="quiz"?quiz():result();}
function startLesson(index=state.lesson){if(index>currentUnlocked())return;state={...state,screen:"quiz",lesson:index,step:0,selected:null,score:0,combo:0,bestCombo:0};save();render();}
function speak(text,rate=0.9){if(!("speechSynthesis" in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="es-ES";u.rate=rate;const voice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith("es-es"));if(voice)u.voice=voice;speechSynthesis.speak(u);}
root.addEventListener("click",e=>{
  const target=e.target.closest("button");if(!target)return;
  if(target.dataset.speak!==undefined)return speak(target.dataset.speak);
  if(target.dataset.speakSlow!==undefined)return speak(target.dataset.speakSlow,0.6);
  if(target.dataset.lesson!==undefined)return startLesson(Number(target.dataset.lesson));
  if(target.dataset.answer!==undefined&&state.selected===null){const q=lessons[state.lesson].questions[state.step],i=Number(target.dataset.answer),ok=q.options[i]===q.answer;state.selected=i;if(ok){state.score+=10;state.xp+=10;state.combo++;state.bestCombo=Math.max(state.bestCombo,state.combo)}else state.combo=0;save();return render();}
  const action=target.dataset.action;
  if(action==="home"){state.screen="home";state.settings=false}
  if(action==="map"){state.screen="map";state.settings=false}
  if(action==="start")startLesson();
  if(action==="next"){const total=lessons[state.lesson].questions.length;if(state.step<total-1){state.step++;state.selected=null}else{const id=lessons[state.lesson].id;if(!state.completed.includes(id))state.completed.push(id);state.screen="result";save()}}
  if(action==="next-lesson"){state.lesson=Math.min(state.lesson+1,lessons.length-1);startLesson(state.lesson)}
  if(action==="settings")state.settings=true;
  if(action==="close-settings")state.settings=false;
  if(action==="save-name"){state.name=document.querySelector("#learner-name").value.trim();localStorage.setItem("spanish-os-profile",JSON.stringify({name:state.name}));state.settings=false}
  if(action==="reset")state.confirmReset=true;
  if(action==="cancel-reset")state.confirmReset=false;
  if(action==="confirm-reset"){localStorage.removeItem("spanish-os-progress");state={...initialState,name:state.name};}
  render();
});
load();render();
