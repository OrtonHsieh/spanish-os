window.SPANISH_OS_SCENARIOS = [
  {
    id:"meeting-someone", number:"01", title:"初次見面", spanishTitle:"Primer encuentro",
    canDo:"自然完成一段初次見面的基本對話。", description:"問候、自我介紹，談論家鄉與語言。", status:"available", stamp:"HOLA",
    lessons:[
      { id:"greetings", stage:"重點語言", title:"打招呼", subtitle:"初次見面的第一句", preview:"Buenos días", translation:"早安", questions:[
        {prompt:"早上見到店員，你會說？", phrase:"Buenos días", answer:"早安", options:["晚安","早安","謝謝"]},
        {prompt:"朋友問候你「¿Qué tal?」，意思是？", phrase:"¿Qué tal?", answer:"你好嗎？", options:["你叫什麼名字？","你好嗎？","你住哪裡？"]},
        {prompt:"你想回答「很好，謝謝」，選哪一句？", phrase:"Muy bien, gracias", answer:"Muy bien, gracias", options:["Muy bien, gracias","Hasta luego","Me llamo Ana"]}
      ]},
      { id:"name", stage:"理解", title:"介紹名字", subtitle:"說出自己的名字並詢問對方", preview:"Me llamo...", translation:"我叫……", questions:[
        {prompt:"「Me llamo Lucía」是什麼意思？", phrase:"Me llamo Lucía", answer:"我叫 Lucía", options:["我來自 Lucía","我叫 Lucía","我是老師"]},
        {prompt:"你想問對方叫什麼名字，選哪一句？", phrase:"¿Cómo te llamas?", answer:"¿Cómo te llamas?", options:["¿Cómo te llamas?","¿De dónde eres?","¿Qué tal?"]},
        {prompt:"聽到對方的名字後，可以怎麼說？", phrase:"Encantado", answer:"很高興認識你", options:["再見","不客氣","很高興認識你"]}
      ]},
      { id:"origin", stage:"表達", title:"來自哪裡", subtitle:"談論家鄉、居住地與語言", preview:"Soy de Taiwán", translation:"我來自台灣", questions:[
        {prompt:"「¿De dónde eres?」是在問？", phrase:"¿De dónde eres?", answer:"你來自哪裡？", options:["你住在哪裡？","你來自哪裡？","你會說什麼語言？"]},
        {prompt:"你想說「我住在台北」，選哪一句？", phrase:"Vivo en Taipéi", answer:"Vivo en Taipéi", options:["Soy Taipéi","Vivo en Taipéi","Voy a Taipéi"]},
        {prompt:"「Hablo chino y un poco de español」是？", phrase:"Hablo chino y un poco de español", answer:"我會說中文和一點西班牙文", options:["我會說中文和一點西班牙文","我在中國學西班牙文","我只會說西班牙文"]}
      ]},
      { id:"dialogue", stage:"實境任務", title:"實境對話", subtitle:"完成一段語言交換初遇", preview:"¡Encantado!", translation:"很高興認識你！", questions:[
        {prompt:"語言交換活動中，先自然地打招呼：", phrase:"Hola, ¿qué tal?", answer:"Hola, ¿qué tal?", options:["Adiós","Hola, ¿qué tal?","Perdón"]},
        {prompt:"對方問「¿Cómo te llamas?」，你回答：", phrase:"Me llamo...", answer:"Me llamo...", options:["Me llamo...","Soy de...","Vivo en..."]},
        {prompt:"接著對方問「¿De dónde eres?」，你回答：", phrase:"Soy de Taiwán", answer:"Soy de Taiwán", options:["Estoy Taiwán","Soy de Taiwán","Hablo Taiwán"]}
      ]}
    ]
  },
  {id:"cafe-restaurant",number:"02",title:"咖啡館與餐廳",spanishTitle:"Café y restaurante",canDo:"看懂基本菜單並獨立完成點餐與結帳。",description:"菜單、點餐、需求與付款。",status:"available",stamp:"CAFÉ",lessons:[
    {id:"menu-basics",stage:"重點語言",title:"看懂菜單",subtitle:"飲料、餐點與常見分類",preview:"Un café con leche",translation:"一杯牛奶咖啡",questions:[
      {prompt:"在西班牙咖啡館中，這杯飲料是？",phrase:"Un café con leche",answer:"一杯牛奶咖啡",options:["一杯黑咖啡","一杯牛奶咖啡","一杯熱巧克力"]},
      {prompt:"「Agua sin gas」是什麼？",phrase:"Agua sin gas",answer:"無氣泡水",options:["無氣泡水","氣泡水","冰水"]},
      {prompt:"菜單上的「postres」是哪一類？",phrase:"Postres",answer:"甜點",options:["主餐","飲料","甜點"]}
    ]},
    {id:"ordering",stage:"理解",title:"開口點餐",subtitle:"聽懂店員並說出選擇",preview:"¿Qué va a tomar?",translation:"您要喝什麼？",questions:[
      {prompt:"店員問「¿Qué va a tomar?」，意思是？",phrase:"¿Qué va a tomar?",answer:"您要喝什麼？",options:["您要喝什麼？","您要結帳嗎？","您有訂位嗎？"]},
      {prompt:"你想禮貌地點一杯咖啡，選哪一句？",phrase:"Quisiera un café, por favor",answer:"Quisiera un café, por favor",options:["Quisiera un café, por favor","¿Dónde está el café?","El café está cerrado"]},
      {prompt:"店員問「¿Algo más?」，是在問？",phrase:"¿Algo más?",answer:"還需要別的嗎？",options:["味道如何？","還需要別的嗎？","要內用嗎？"]}
    ]},
    {id:"requests",stage:"表達",title:"提出需求",subtitle:"數量、偏好與禮貌請求",preview:"Sin azúcar, por favor",translation:"請不要加糖",questions:[
      {prompt:"「Sin azúcar, por favor」表示？",phrase:"Sin azúcar, por favor",answer:"請不要加糖",options:["請多加糖","請不要加糖","請給我鹽"]},
      {prompt:"你想請店員拿一杯水，選哪一句？",phrase:"¿Me trae un vaso de agua?",answer:"¿Me trae un vaso de agua?",options:["¿Me trae un vaso de agua?","¿Cuánto cuesta el agua?","El agua está fría"]},
      {prompt:"你想說「我是素食者」，選哪一句？",phrase:"Soy vegetariano",answer:"Soy vegetariano",options:["Tengo mucha hambre","Soy vegetariano","Quiero carne"]}
    ]},
    {id:"paying",stage:"實境任務",title:"結帳離開",subtitle:"詢問帳單並完成付款",preview:"La cuenta, por favor",translation:"請給我帳單",questions:[
      {prompt:"吃完後想請店員拿帳單，選哪一句？",phrase:"La cuenta, por favor",answer:"La cuenta, por favor",options:["La carta, por favor","La cuenta, por favor","Una mesa, por favor"]},
      {prompt:"店員說「Son doce euros」，金額是？",phrase:"Son doce euros",answer:"十二歐元",options:["二歐元","十歐元","十二歐元"]},
      {prompt:"你想詢問能不能刷卡，選哪一句？",phrase:"¿Puedo pagar con tarjeta?",answer:"¿Puedo pagar con tarjeta?",options:["¿Puedo pagar con tarjeta?","¿Dónde está mi tarjeta?","Quiero otra cuenta"]}
    ]}
  ]},
  {id:"transport-directions",number:"03",title:"交通與問路",spanishTitle:"Transporte y direcciones",canDo:"購票、確認班次並找到正確目的地。",description:"地點、車票、班次與方向。",status:"planned",stamp:"RUTA",lessons:[
    {id:"places",stage:"重點語言",title:"認識地點",subtitle:"車站、街道與城市設施"},{id:"tickets",stage:"理解",title:"購買車票",subtitle:"目的地、單程與來回"},{id:"schedules",stage:"表達",title:"確認班次",subtitle:"時間、月台與轉乘"},{id:"finding-way",stage:"實境任務",title:"找到目的地",subtitle:"問路並理解基本方向"}
  ]},
  {id:"shopping-market",number:"04",title:"商店與市場",spanishTitle:"Tiendas y mercado",canDo:"詢問價格、選擇商品並完成購物。",description:"商品、價格、尺寸與付款。",status:"planned",stamp:"COMPRA",lessons:[
    {id:"products",stage:"重點語言",title:"認識商品",subtitle:"常見物品與分類"},{id:"prices",stage:"理解",title:"詢問價格",subtitle:"數字、折扣與單位"},{id:"size-quantity",stage:"表達",title:"尺寸與數量",subtitle:"顏色、大小與想要多少"},{id:"market-task",stage:"實境任務",title:"完成購物",subtitle:"詢價、選擇並付款"}
  ]},
  {id:"accommodation",number:"05",title:"飯店與住宿",spanishTitle:"Hotel y alojamiento",canDo:"辦理入住並處理基本住宿需求。",description:"預訂、入住、設備與問題。",status:"planned",stamp:"HOTEL",lessons:[
    {id:"booking-details",stage:"重點語言",title:"預訂資料",subtitle:"姓名、日期與房型"},{id:"check-in",stage:"理解",title:"辦理入住",subtitle:"聽懂櫃檯常見問題"},{id:"room-needs",stage:"表達",title:"房間需求",subtitle:"詢問設備與服務"},{id:"solve-hotel-problem",stage:"實境任務",title:"反映問題",subtitle:"說明狀況並請求協助"}
  ]},
  {id:"time-plans",number:"06",title:"時間與行程",spanishTitle:"Hora y planes",canDo:"確認時間、營業資訊並安排一天行程。",description:"時間、日期、營業時間與行程。",status:"planned",stamp:"PLAN",lessons:[
    {id:"clock-time",stage:"重點語言",title:"現在幾點",subtitle:"整點、分鐘與時段"},{id:"dates",stage:"理解",title:"日期與星期",subtitle:"聽懂日期和預約時間"},{id:"opening-hours",stage:"表達",title:"詢問營業時間",subtitle:"幾點開門與休息日"},{id:"day-plan",stage:"實境任務",title:"安排一天",subtitle:"串連時間與地點"}
  ]},
  {id:"social-invitations",number:"07",title:"社交與邀約",spanishTitle:"Planes con amigos",canDo:"提出邀請並和朋友約好時間地點。",description:"興趣、邀請、回應與約定。",status:"planned",stamp:"AMIGOS",lessons:[
    {id:"interests",stage:"重點語言",title:"聊聊興趣",subtitle:"喜歡與不喜歡的活動"},{id:"invite",stage:"理解",title:"聽懂邀請",subtitle:"活動、時間與意願"},{id:"respond",stage:"表達",title:"接受或婉拒",subtitle:"自然回覆並提出替代"},{id:"make-plan",stage:"實境任務",title:"約好見面",subtitle:"確認時間、地點與聯絡"}
  ]},
  {id:"daily-shopping",number:"08",title:"日常採買",spanishTitle:"Compras cotidianas",canDo:"在超市找到並買齊基本生活用品。",description:"食品、包裝、位置與自助結帳。",status:"planned",stamp:"DIARIO",lessons:[
    {id:"groceries",stage:"重點語言",title:"食品與用品",subtitle:"日常採買常見名稱"},{id:"packages",stage:"理解",title:"數量與包裝",subtitle:"公斤、瓶、盒與袋"},{id:"find-product",stage:"表達",title:"商品在哪裡",subtitle:"詢問位置與庫存"},{id:"supermarket-task",stage:"實境任務",title:"超市採買",subtitle:"找商品並完成結帳"}
  ]},
  {id:"health-emergency",number:"09",title:"藥局與緊急狀況",spanishTitle:"Farmacia y emergencias",canDo:"描述基本症狀並在需要時取得協助。",description:"症狀、藥品、注意事項與求助。",status:"planned",stamp:"AYUDA",lessons:[
    {id:"body-symptoms",stage:"重點語言",title:"身體與症狀",subtitle:"疼痛、發燒與不舒服"},{id:"pharmacy",stage:"理解",title:"在藥局",subtitle:"聽懂用法與基本問題"},{id:"describe-problem",stage:"表達",title:"說明不適",subtitle:"哪裡、多久與嚴重程度"},{id:"get-help",stage:"實境任務",title:"緊急求助",subtitle:"清楚說明並取得協助"}
  ]},
  {id:"spanish-day-challenge",number:"10",title:"西班牙生活挑戰",spanishTitle:"Un día en España",canDo:"串連所學，獨立完成一天的西班牙生活任務。",description:"移動、用餐、社交與臨時問題。",status:"planned",stamp:"LISTO",lessons:[
    {id:"arrival",stage:"重點語言",title:"抵達城市",subtitle:"確認位置與下一步"},{id:"move-and-eat",stage:"理解",title:"移動與用餐",subtitle:"聽懂連續生活指令"},{id:"plans-change",stage:"表達",title:"行程有變",subtitle:"改時間並說明需要"},{id:"full-day",stage:"實境任務",title:"完整一天",subtitle:"完成跨場景綜合挑戰"}
  ]}
];
