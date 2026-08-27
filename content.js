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
  {id:"transport-directions",number:"03",title:"交通與問路",spanishTitle:"Transporte y direcciones",canDo:"購票、確認班次並找到正確目的地。",description:"地點、車票、班次與方向。",status:"available",stamp:"RUTA",lessons:[
    {id:"places",stage:"重點語言",title:"認識地點",subtitle:"車站、街道與城市設施",preview:"La estación",translation:"車站",questions:[
      {prompt:"「La estación de tren」是？",phrase:"La estación de tren",answer:"火車站",options:["火車站","公車站","機場"]},
      {prompt:"「La parada de autobús」是？",phrase:"La parada de autobús",answer:"公車站",options:["地鐵站","公車站","計程車招呼站"]},
      {prompt:"你想問地鐵在哪裡，選哪一句？",phrase:"¿Dónde está el metro?",answer:"¿Dónde está el metro?",options:["¿Cuánto cuesta el metro?","¿Dónde está el metro?","¿Cuándo llega el metro?"]}
    ]},
    {id:"tickets",stage:"理解",title:"購買車票",subtitle:"目的地、單程與來回",preview:"Un billete de ida",translation:"一張單程票",questions:[
      {prompt:"「Un billete de ida」表示？",phrase:"Un billete de ida",answer:"一張單程票",options:["一張來回票","一張單程票","一日票"]},
      {prompt:"你想買一張到 Toledo 的票，選哪一句？",phrase:"Un billete para Toledo, por favor",answer:"Un billete para Toledo, por favor",options:["Un billete para Toledo, por favor","Toledo tiene un billete","¿Dónde vive Toledo?"]},
      {prompt:"售票員問「¿Ida o ida y vuelta?」，是在問？",phrase:"¿Ida o ida y vuelta?",answer:"單程還是來回？",options:["今天還是明天？","單程還是來回？","現金還是刷卡？"]}
    ]},
    {id:"schedules",stage:"表達",title:"確認班次",subtitle:"時間、月台與轉乘",preview:"¿A qué hora sale?",translation:"幾點出發？",questions:[
      {prompt:"「¿A qué hora sale el tren?」是問？",phrase:"¿A qué hora sale el tren?",answer:"火車幾點出發？",options:["火車幾點抵達？","火車幾點出發？","火車停在哪裡？"]},
      {prompt:"你想問從哪個月台出發，選哪一句？",phrase:"¿De qué andén sale?",answer:"¿De qué andén sale?",options:["¿De qué andén sale?","¿Dónde compro el andén?","¿Cuánto tarda el andén?"]},
      {prompt:"「Hay que hacer transbordo」表示？",phrase:"Hay que hacer transbordo",answer:"需要轉乘",options:["需要轉乘","班車誤點","不需要車票"]}
    ]},
    {id:"finding-way",stage:"實境任務",title:"找到目的地",subtitle:"問路並理解基本方向",preview:"Todo recto",translation:"一直走",questions:[
      {prompt:"路人說「Todo recto」，你應該？",phrase:"Todo recto",answer:"一直往前走",options:["向右轉","一直往前走","原地等待"]},
      {prompt:"你想問博物館怎麼走，選哪一句？",phrase:"¿Cómo se va al museo?",answer:"¿Cómo se va al museo?",options:["¿Cómo se va al museo?","¿Cuánto cuesta el museo?","¿Cuándo abre el museo?"]},
      {prompt:"「Gire a la derecha」表示？",phrase:"Gire a la derecha",answer:"向右轉",options:["向左轉","向右轉","過馬路"]}
    ]}
  ]},
  {id:"shopping-market",number:"04",title:"商店與市場",spanishTitle:"Tiendas y mercado",canDo:"詢問價格、選擇商品並完成購物。",description:"商品、價格、尺寸與付款。",status:"available",stamp:"COMPRA",lessons:[
    {id:"products",stage:"重點語言",title:"認識商品",subtitle:"常見物品與分類",preview:"Una camiseta",translation:"一件 T 恤",questions:[
      {prompt:"「Una camiseta」是？",phrase:"Una camiseta",answer:"一件 T 恤",options:["一件外套","一件 T 恤","一條褲子"]},
      {prompt:"「Los zapatos」是？",phrase:"Los zapatos",answer:"鞋子",options:["鞋子","帽子","襪子"]},
      {prompt:"你想說「我在找一個包包」，選哪一句？",phrase:"Busco un bolso",answer:"Busco un bolso",options:["Busco un bolso","Pago un bolso","Llevo un bolso"]}
    ]},
    {id:"prices",stage:"理解",title:"詢問價格",subtitle:"數字、折扣與單位",preview:"¿Cuánto cuesta?",translation:"多少錢？",questions:[
      {prompt:"想問單一商品多少錢，選哪一句？",phrase:"¿Cuánto cuesta?",answer:"¿Cuánto cuesta?",options:["¿Cuánto cuesta?","¿Qué talla es?","¿Dónde está?"]},
      {prompt:"「Está de rebajas」表示商品？",phrase:"Está de rebajas",answer:"正在特價",options:["已經售完","正在特價","不能退貨"]},
      {prompt:"店員說「Son veinticinco euros」，價格是？",phrase:"Son veinticinco euros",answer:"二十五歐元",options:["十五歐元","二十歐元","二十五歐元"]}
    ]},
    {id:"size-quantity",stage:"表達",title:"尺寸與數量",subtitle:"顏色、大小與想要多少",preview:"¿Tiene una talla más?",translation:"有大一號的嗎？",questions:[
      {prompt:"想問有沒有大一號，選哪一句？",phrase:"¿Tiene una talla más?",answer:"¿Tiene una talla más?",options:["¿Tiene una talla más?","¿Tiene otra tienda?","¿Tiene menos precio?"]},
      {prompt:"「Lo quiero en azul」表示？",phrase:"Lo quiero en azul",answer:"我想要藍色的",options:["我想要藍色的","我不喜歡藍色","藍色的太大"]},
      {prompt:"在市場想買半公斤蘋果，選哪一句？",phrase:"Medio kilo de manzanas",answer:"Medio kilo de manzanas",options:["Una caja de manzanas","Medio kilo de manzanas","Medio litro de manzanas"]}
    ]},
    {id:"market-task",stage:"實境任務",title:"完成購物",subtitle:"詢價、選擇並付款",preview:"Me lo llevo",translation:"我要買這個",questions:[
      {prompt:"試穿前想問「我可以試穿嗎？」，選哪一句？",phrase:"¿Me lo puedo probar?",answer:"¿Me lo puedo probar?",options:["¿Me lo puedo probar?","¿Me lo puedo pagar?","¿Me lo puedo cambiar?"]},
      {prompt:"決定購買時可以說？",phrase:"Me lo llevo",answer:"我要買這個",options:["我要買這個","我想退貨","我只是看看"]},
      {prompt:"你要用現金付款，選哪一句？",phrase:"Pago en efectivo",answer:"Pago en efectivo",options:["Pago en efectivo","Pago con tarjeta","No pago ahora"]}
    ]}
  ]},
  {id:"accommodation",number:"05",title:"飯店與住宿",spanishTitle:"Hotel y alojamiento",canDo:"辦理入住並處理基本住宿需求。",description:"預訂、入住、設備與問題。",status:"available",stamp:"HOTEL",lessons:[
    {id:"booking-details",stage:"重點語言",title:"預訂資料",subtitle:"姓名、日期與房型",preview:"Tengo una reserva",translation:"我有預訂",questions:[
      {prompt:"抵達飯店時說「Tengo una reserva」，意思是？",phrase:"Tengo una reserva",answer:"我有預訂",options:["我有預訂","我需要計程車","我想退房"]},
      {prompt:"「Una habitación doble」是？",phrase:"Una habitación doble",answer:"雙人房",options:["單人房","雙人房","家庭房"]},
      {prompt:"你要住三晚，選哪一句？",phrase:"Para tres noches",answer:"Para tres noches",options:["Para tres personas","Para tres noches","Para el día tres"]}
    ]},
    {id:"check-in",stage:"理解",title:"辦理入住",subtitle:"聽懂櫃檯常見問題",preview:"¿Me deja el pasaporte?",translation:"可以給我護照嗎？",questions:[
      {prompt:"櫃檯問「¿Me deja el pasaporte?」，需要你提供？",phrase:"¿Me deja el pasaporte?",answer:"護照",options:["信用卡","護照","房卡"]},
      {prompt:"「El desayuno está incluido」表示？",phrase:"El desayuno está incluido",answer:"包含早餐",options:["早餐需加價","包含早餐","早餐已結束"]},
      {prompt:"想問退房時間，選哪一句？",phrase:"¿A qué hora es la salida?",answer:"¿A qué hora es la salida?",options:["¿A qué hora es la salida?","¿Dónde está la salida?","¿Cuánto cuesta la salida?"]}
    ]},
    {id:"room-needs",stage:"表達",title:"房間需求",subtitle:"詢問設備與服務",preview:"¿Cuál es la clave del wifi?",translation:"Wi-Fi 密碼是什麼？",questions:[
      {prompt:"想詢問 Wi-Fi 密碼，選哪一句？",phrase:"¿Cuál es la clave del wifi?",answer:"¿Cuál es la clave del wifi?",options:["¿Cuál es la clave del wifi?","¿Dónde compro el wifi?","¿Cuándo cierra el wifi?"]},
      {prompt:"想多要一條毛巾，選哪一句？",phrase:"Otra toalla, por favor",answer:"Otra toalla, por favor",options:["Otra habitación, por favor","Otra toalla, por favor","Otra llave, por favor"]},
      {prompt:"「El ascensor está al fondo」表示電梯？",phrase:"El ascensor está al fondo",answer:"在走廊盡頭",options:["在一樓","在走廊盡頭","正在維修"]}
    ]},
    {id:"solve-hotel-problem",stage:"實境任務",title:"反映問題",subtitle:"說明狀況並請求協助",preview:"El aire acondicionado no funciona",translation:"冷氣壞了",questions:[
      {prompt:"房間冷氣無法運作，選哪一句？",phrase:"El aire acondicionado no funciona",answer:"El aire acondicionado no funciona",options:["El aire acondicionado no funciona","La habitación tiene aire","Quiero cerrar la ventana"]},
      {prompt:"「Hay mucho ruido」表示？",phrase:"Hay mucho ruido",answer:"很吵",options:["很冷","很暗","很吵"]},
      {prompt:"房卡打不開門，想請求協助，選哪一句？",phrase:"La llave no funciona, ¿me puede ayudar?",answer:"La llave no funciona, ¿me puede ayudar?",options:["La llave no funciona, ¿me puede ayudar?","No necesito la llave","¿Cuánto cuesta la puerta?"]}
    ]}
  ]},
  {id:"time-plans",number:"06",title:"時間與行程",spanishTitle:"Hora y planes",canDo:"確認時間、營業資訊並安排一天行程。",description:"時間、日期、營業時間與行程。",status:"available",stamp:"PLAN",lessons:[
    {id:"clock-time",stage:"重點語言",title:"現在幾點",subtitle:"整點、分鐘與時段",preview:"¿Qué hora es?",translation:"現在幾點？",questions:[
      {prompt:"「Son las dos」表示？",phrase:"Son las dos",answer:"兩點整",options:["一點整","兩點整","十二點整"]},
      {prompt:"「Son las seis y media」表示？",phrase:"Son las seis y media",answer:"六點半",options:["六點十五分","六點半","六點四十五分"]},
      {prompt:"想問現在幾點，選哪一句？",phrase:"¿Qué hora es?",answer:"¿Qué hora es?",options:["¿Qué día es?","¿Qué hora es?","¿A qué calle es?"]}
    ]},
    {id:"dates",stage:"理解",title:"日期與星期",subtitle:"聽懂日期和預約時間",preview:"Hoy es lunes",translation:"今天星期一",questions:[
      {prompt:"「Mañana es martes」表示？",phrase:"Mañana es martes",answer:"明天星期二",options:["今天星期二","明天星期二","昨天星期二"]},
      {prompt:"「El quince de mayo」是哪一天？",phrase:"El quince de mayo",answer:"五月十五日",options:["五月五日","五月十五日","十五月五日"]},
      {prompt:"你想問今天幾號，選哪一句？",phrase:"¿A qué fecha estamos?",answer:"¿A qué fecha estamos?",options:["¿A qué fecha estamos?","¿A qué hora estamos?","¿Dónde estamos?"]}
    ]},
    {id:"opening-hours",stage:"表達",title:"詢問營業時間",subtitle:"幾點開門與休息日",preview:"¿A qué hora abre?",translation:"幾點開門？",questions:[
      {prompt:"想問商店幾點開門，選哪一句？",phrase:"¿A qué hora abre?",answer:"¿A qué hora abre?",options:["¿A qué hora abre?","¿A qué hora llega?","¿A qué hora sale?"]},
      {prompt:"「Cierra a las ocho」表示？",phrase:"Cierra a las ocho",answer:"八點關門",options:["八點開門","八點關門","休息八天"]},
      {prompt:"「Los lunes está cerrado」表示？",phrase:"Los lunes está cerrado",answer:"星期一不營業",options:["星期一不營業","星期一只開上午","每天都營業"]}
    ]},
    {id:"day-plan",stage:"實境任務",title:"安排一天",subtitle:"串連時間與地點",preview:"Primero vamos al museo",translation:"我們先去博物館",questions:[
      {prompt:"你想提議先去博物館，選哪一句？",phrase:"Primero vamos al museo",answer:"Primero vamos al museo",options:["Primero vamos al museo","El museo fue ayer","Nunca abre el museo"]},
      {prompt:"「Después comemos a las dos」表示？",phrase:"Después comemos a las dos",answer:"之後兩點吃飯",options:["之前兩點吃飯","之後兩點吃飯","吃飯需要兩小時"]},
      {prompt:"想確認「星期六上午十點」，選哪一句？",phrase:"El sábado a las diez de la mañana",answer:"El sábado a las diez de la mañana",options:["El sábado a las diez de la mañana","El domingo a las diez de la noche","El sábado durante diez horas"]}
    ]}
  ]},
  {id:"social-invitations",number:"07",title:"社交與邀約",spanishTitle:"Planes con amigos",canDo:"提出邀請並和朋友約好時間地點。",description:"興趣、邀請、回應與約定。",status:"available",stamp:"AMIGOS",lessons:[
    {id:"interests",stage:"重點語言",title:"聊聊興趣",subtitle:"喜歡與不喜歡的活動",preview:"Me gusta la música",translation:"我喜歡音樂",questions:[
      {prompt:"「Me gusta la música」表示？",phrase:"Me gusta la música",answer:"我喜歡音樂",options:["我會演奏音樂","我喜歡音樂","我不喜歡音樂"]},
      {prompt:"「No me gusta bailar」表示？",phrase:"No me gusta bailar",answer:"我不喜歡跳舞",options:["我不會跳舞","我不喜歡跳舞","我想學跳舞"]},
      {prompt:"想問對方喜歡做什麼，選哪一句？",phrase:"¿Qué te gusta hacer?",answer:"¿Qué te gusta hacer?",options:["¿Qué te gusta hacer?","¿Dónde tienes que ir?","¿Cómo te llamas?"]}
    ]},
    {id:"invite",stage:"理解",title:"聽懂邀請",subtitle:"活動、時間與意願",preview:"¿Quieres tomar algo?",translation:"要不要去喝點東西？",questions:[
      {prompt:"「¿Quieres tomar algo?」是在邀請你？",phrase:"¿Quieres tomar algo?",answer:"去喝點東西",options:["去買東西","去喝點東西","去搭車"]},
      {prompt:"「¿Te apetece ir al cine?」表示？",phrase:"¿Te apetece ir al cine?",answer:"想去看電影嗎？",options:["電影院在哪裡？","想去看電影嗎？","電影幾點開始？"]},
      {prompt:"想邀請朋友星期五吃飯，選哪一句？",phrase:"¿Cenamos el viernes?",answer:"¿Cenamos el viernes?",options:["¿Cenamos el viernes?","¿Desayunamos el lunes?","¿Trabajamos el viernes?"]}
    ]},
    {id:"respond",stage:"表達",title:"接受或婉拒",subtitle:"自然回覆並提出替代",preview:"Claro, me encantaría",translation:"當然，我很樂意",questions:[
      {prompt:"你很樂意接受邀請，選哪一句？",phrase:"Claro, me encantaría",answer:"Claro, me encantaría",options:["Claro, me encantaría","Lo siento, no puedo","No me gusta nada"]},
      {prompt:"「Lo siento, no puedo」表示？",phrase:"Lo siento, no puedo",answer:"抱歉，我沒辦法",options:["抱歉，我沒辦法","沒問題，我會去","我晚一點到"]},
      {prompt:"今天不行，想提議明天，選哪一句？",phrase:"Hoy no puedo. ¿Mañana?",answer:"Hoy no puedo. ¿Mañana?",options:["Hoy no puedo. ¿Mañana?","Mañana tampoco puedo nunca","Hoy fue mañana"]}
    ]},
    {id:"make-plan",stage:"實境任務",title:"約好見面",subtitle:"確認時間、地點與聯絡",preview:"¿Dónde quedamos?",translation:"我們約在哪裡？",questions:[
      {prompt:"想確認見面地點，選哪一句？",phrase:"¿Dónde quedamos?",answer:"¿Dónde quedamos?",options:["¿Cuánto quedamos?","¿Dónde quedamos?","¿Por qué llegamos?"]},
      {prompt:"朋友說「Nos vemos a las siete」，表示？",phrase:"Nos vemos a las siete",answer:"七點見",options:["七號見","七點見","見面七次"]},
      {prompt:"想約在車站入口，選哪一句？",phrase:"En la entrada de la estación",answer:"En la entrada de la estación",options:["En la entrada de la estación","Dentro del tren de ayer","En la salida del aeropuerto"]}
    ]}
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
