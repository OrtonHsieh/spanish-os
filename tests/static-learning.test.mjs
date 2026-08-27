import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const rootUrl=new URL("../",import.meta.url);
const [contentSource,siteSource]=await Promise.all([
  readFile(new URL("content.js",rootUrl),"utf8"),
  readFile(new URL("site.js",rootUrl),"utf8"),
]);

function boot(progress){
  const memory=new Map();
  if(progress)memory.set("spanish-os-progress",JSON.stringify(progress));
  const root={innerHTML:"",addEventListener(){}};
  const context={
    console,Date,JSON,Math,SpeechSynthesisUtterance:function(){},
    document:{querySelector(selector){return selector==="#spanish-os"?root:{value:""}}},
    localStorage:{getItem:key=>memory.get(key)||null,setItem:(key,value)=>memory.set(key,value),removeItem:key=>memory.delete(key)},
    speechSynthesis:{getVoices:()=>[],cancel(){},speak(){}},
  };
  context.window=context;
  vm.createContext(context);
  vm.runInContext(contentSource,context);
  vm.runInContext(siteSource,context);
  return {context,root,memory};
}

test("catalog has ten four-lesson scenarios and two complete playable scenarios",()=>{
  const {context}=boot();
  const summary=vm.runInContext("scenarios.map(s=>({status:s.status,lessons:s.lessons.length,ready:s.lessons.every(l=>Array.isArray(l.questions)&&l.questions.length===3)}))",context);
  assert.equal(summary.length,10);
  assert.ok(summary.every(s=>s.lessons===4));
  assert.deepEqual(Array.from(summary.slice(0,2),s=>s.status),["available","available"]);
  assert.ok(summary[0].ready&&summary[1].ready);
});

test("migrates legacy first-scenario progress and unlocks scenario two at 70 percent",()=>{
  const {context}=boot({version:2,xp:30,completedLessons:["greetings","name","origin"],currentLesson:2});
  assert.equal(vm.runInContext("completed(0).length",context),3);
  assert.equal(vm.runInContext("scenarioUnlocked(1)",context),true);
  assert.equal(vm.runInContext("state.xp",context),30);
});

test("restores independent progress for the second scenario",()=>{
  const {context}=boot({version:4,xp:50,currentScenario:"cafe-restaurant",currentLesson:1,completedLessons:{"meeting-someone":["greetings","name","origin"],"cafe-restaurant":["menu-basics","ordering"]}});
  assert.equal(vm.runInContext("state.scenario",context),1);
  assert.equal(vm.runInContext("completed().length",context),2);
  assert.equal(vm.runInContext("state.lesson",context),2);
});
