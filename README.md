<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://kit.fontawesome.com/d04b8e1de1.js" crossorigin="anonymous"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="Images/leaficon.png">
  <link rel="stylesheet" href="mainweb.css">
  <link rel="stylesheet" href="mainweb.js">
  <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <script>
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
  </script>
  <title>Queenstown Guide</title>
</head>
<body onload="initClock()">
  <div class="wrapper">
    <div id="navbar" class="navibar">
      <div class="menu-icon">
        <span class="fas fa-bars"></span>
      </div>
        <div class="logo">
          <a href="mainweb.html"><i class="fa-solid fa-leaf"></i></a>
        </div>
        <div class="nav-items">
            <li><a href="#">Communities</a></li>
            <li><a href="maps.html">Map</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="help.html">Help</a></li>
        </div>
        <div class="searchsuggdiv">
              <div class="search-input">
                <input type="text" placeholder="Search towns..." class="inputtranslate">
                <div class="autocom-box">
                    <li><a href="queenstown.html">Queenstown</a></li>
                    <li><a href="#">Cromwell</a></li>
                    <li><a href="#">Wanaka</a></li>
                    <li><a href="#">Glenorchy</a></li>
                    <li><a href="#">Arrowtown</a></li>
                </div>
                <div class="searchbaricon">
                  <i class="fas fa-search"></i>
                </div>
              </div>
        </div>
        <div class="languagebtn">
              <div class="lang-menu">
                <div class="selected-lang">
                    English
                </div>
                <ul>
                  <li>
                    <a href="#" class="en">English</a>
                  </li>
                  <li>
                    <a href="#" class="fil">Tagalog</a>
                  </li>
                  <li>
                    <a href="#" class="zh">中文</a>
                  </li>
                  <li>
                    <a href="#" class="ru">Русский</a>
                  </li>
                  <li>
                    <a href="#" class="es">Español</a>
                  </li>
                  <li>
                    <a href="#" class="fr">Français</a>
                  </li>
                </ul>
              </div>
        </div>
        <div class="search-icon">
          <span class="fas fa-search"></span>
        </div>
        <div class="cancel-icon">
          <span class="fas fa-times"></span>
        </div>
    </div>
  </div>

  <script>
  // english //
  $(function() {
    $(".en").click(function() {
      // Nav
      $(".nav-items li").children().eq(0).text("Communities");
      $(".nav-items li").children().eq(1).text("Map");
      $(".nav-items li").children().eq(2).text("Destinations");
      $(".nav-items li").children().eq(3).text("Help");
      $(".selected-lang").text("English");
      $(".selected-lang").removeClass("change-fil");
      $(".selected-lang").addClass("change-en");
      $(".selected-lang").removeClass("change-zh");
      $(".selected-lang").removeClass("change-ru");
      $(".selected-lang").removeClass("change-fr");
      $(".selected-lang").removeClass("change-es");
      $(".en").text("English")
      $(".fil").text("Tagalog")
      $(".zh").text("Chinese")
      $(".ru").text("Russian")
      $(".es").text("Spanish")
      $(".fr").text("French")
      //section
      $(".inputtranslate").attr('placeholder', 'Search towns..');
      $(".kiaora").text("KIA ORA, THIS IS YOUR QUEENSTOWN GUIDE")
      $(".qttranslate").text("Queenstown")
      $(".qtptranslate").text("Queenstown sits on the shore of Lake Wakatipu among dramatic alpine ranges. It’s rumoured that gold prospectors - captivated by the majestic beauty of the surrounding mountains and rivers - gave this now cosmopolitan town its name.")
      $(".artranslate").text("Arrowtown")
      $(".arptranslate").text("Arrowtown is charming and quirky, a delightful gold rush village nestled beside the sparkling Arrow River and below magnificent peaks. Just 20 minutes from Queenstown Airport, it's the perfect place to stay while you're exploring the region. Arrowtown is a thriving community that is packed with character – as well as some of the best dining and shopping in the country. You’ll be enchanted by the heritage main street and the beautiful walking and biking trails. It's a New Zealand treasure!")
      $(".gltranslate").text("Glenorchy")
      $(".glptranslate").text("Just 45 minutes from Queenstown, Glenorchy is nestled on the northern shores of Lake Wakatipu & is the gateway to hiking trails and Middle‑earth™ magic.")
      $(".watranslate").text("Wanaka")
      $(".waptranslate").text("A lively town buzzing with a carefree spirit, Wanaka’s picture-perfect location and easy access to the outdoors makes it the ultimate base for your holiday.")
      $(".crtranslate").text("Cromwell")
      $(".crptranslate").text("Cromwell was established by gold miners, but now its treasure is stone fruit. Explore nearby ghost towns and soak up the tranquil lakeside scenery.")
      // footer
      $(".footer-container:nth-child(1) h5:nth-child(1)").text("Find us");
      $(".footer-container:nth-child(2) h5:nth-child(1)").text("Plan&Go");
      $(".footer-container:nth-child(3) h5:nth-child(1)").text("Explorations");
      $(".footer-container:nth-child(4) h5:nth-child(1)").text("Booking");
      $(".footer-container:nth-child(2) li:nth-child(1) a").text("Earnslaw");
      $(".footer-container:nth-child(2) li:nth-child(2) a").text("Travel Deals");
      $(".footer-container:nth-child(2) li:nth-child(3) a").text("Coronet&Remarkables Snow Rentals");
      $(".footer-container:nth-child(2) li:nth-child(4) a").text("Jet Boat Rent");
      $(".footer-container:nth-child(2) li:nth-child(5) a").text("Eat&Drinks");
      $(".footer-container:nth-child(3) li:nth-child(1) a").text("Hiking & Tramping");
      $(".footer-container:nth-child(3) li:nth-child(2) a").text("Walking");
      $(".footer-container:nth-child(3) li:nth-child(3) a").text("Biking");
      $(".footer-container:nth-child(3) li:nth-child(4) a").text("Helicopter Rent");
      $(".footer-container:nth-child(3) li:nth-child(5) a").text("Milford&Glenorchy Plane");
      $(".footer-container:nth-child(4) li:nth-child(1) a").text("Hotel");
      $(".footer-container:nth-child(4) li:nth-child(2) a").text("Car Rent");
      $(".footer-container:nth-child(4) li:nth-child(3) a").text("Lodge");
      $(".footer-container:nth-child(4) li:nth-child(4) a").text("Backpackers&Trampers");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(1) a").text("Home");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(2) a").text("About");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(3) a").text("Services");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(4) a").text("Pricing");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(5) a").text("Blog");
      $(".text-center").text("Copyright ©2022 | Queenstown Guide by Ethan Mendoza")
    });
  });

  // filipino
  $(function() {
    $(".fil").click(function() {
      // Nav
      $(".nav-items li").children().eq(0).text("Komunidad");
      $(".nav-items li").children().eq(1).text("Mapa");
      $(".nav-items li").children().eq(2).text("Mga destinasyon");
      $(".nav-items li").children().eq(3).text("Tulong");
      $(".selected-lang").text("Tagalog");
      $(".selected-lang").addClass("change-fil");
      $(".selected-lang").removeClass("change-en");
      $(".selected-lang").removeClass("change-zh");
      $(".selected-lang").removeClass("change-ru");
      $(".selected-lang").removeClass("change-fr");
      $(".selected-lang").removeClass("change-es");
      $(".en").text("Ingles")
      $(".fil").text("Tagalog")
      $(".zh").text("Tsino")
      $(".ru").text("Ruso")
      $(".es").text("Kastila")
      $(".fr").text("Pranses")
      //section
      $(".inputtranslate").attr('placeholder', 'Maghanap ng mga bayan..');
      $(".kiaora").text("MAGING MALUSOG, ITO ANG IYONG QUEENSTOWN GUIDE")
      $(".qttranslate").text("Queenstown")
      $(".qtptranslate").text("Nakatayo ang Queenstown sa baybayin ng Lake Wakatipu sa gitna ng mga dramatikong alpine range. Nabalitaan na ang mga gold prospector - na nabighani ng marilag na kagandahan ng nakapalibot na mga bundok at ilog - ang nagbigay sa ngayong cosmopolitan town na ito ng pangalan.")
      $(".artranslate").text("Arrowtown")
      $(".arptranslate").text("Ang Arrowtown ay kaakit-akit at kakaiba, isang kasiya-siyang gold rush village na matatagpuan sa tabi ng kumikinang na Arrow River at sa ibaba ng mga nakamamanghang taluktok. 20 minuto lang mula sa Queenstown Airport, ito ang perpektong lugar upang manatili habang ginalugad mo ang rehiyon. Ang Arrowtown ay isang umuunlad na komunidad na puno ng karakter – pati na rin ang ilan sa pinakamagagandang kainan at pamimili sa bansa. Mabibighani ka sa heritage main street at sa magagandang walking at biking trail. Ito ay isang kayamanan ng New Zealand!")
      $(".gltranslate").text("Glenorchy")
      $(".glptranslate").text("45 minuto lamang mula sa Queenstown, ang Glenorchy ay matatagpuan sa hilagang baybayin ng Lake Wakatipu at ang gateway sa mga hiking trail at Middle‑earth™ magic.")
      $(".watranslate").text("Wanaka")
      $(".waptranslate").text("Isang buhay na buhay na bayan na umuugong na may walang pakialam na diwa, ang perpektong lokasyon ng Wanaka at madaling pag-access sa labas ay ginagawa itong pinakahuling lugar para sa iyong bakasyon.")
      $(".crtranslate").text("Cromwell")
      $(".crptranslate").text("Ang Cromwell ay itinatag ng mga minero ng ginto, ngunit ngayon ang kayamanan nito ay prutas na bato. I-explore ang mga kalapit na ghost town at pagmasdan ang tahimik na tanawin sa gilid ng lawa.")
      // footer
      $(".footer-container:nth-child(1) h5:nth-child(1)").text("Hanapin kami");
      $(".footer-container:nth-child(2) h5:nth-child(1)").text("Magplano at Pumunta");
      $(".footer-container:nth-child(3) h5:nth-child(1)").text("Mga Paggalugad");
      $(".footer-container:nth-child(4) h5:nth-child(1)").text("Pagbu-book");
      $(".footer-container:nth-child(2) li:nth-child(1) a").text("Earnslaw");
      $(".footer-container:nth-child(2) li:nth-child(2) a").text("Mga Deal sa Paglalakbay");
      $(".footer-container:nth-child(2) li:nth-child(3) a").text("Mga Coronet&Remarkables na Renta ng Niyebe");
      $(".footer-container:nth-child(2) li:nth-child(4) a").text("Pagrenta Jet Boat");
      $(".footer-container:nth-child(2) li:nth-child(5) a").text("Kumain & inumin");
      $(".footer-container:nth-child(3) li:nth-child(1) a").text("Hiking at Tramping");
      $(".footer-container:nth-child(3) li:nth-child(2) a").text("Naglalakad");
      $(".footer-container:nth-child(3) li:nth-child(3) a").text("Nagbibisikleta");
      $(".footer-container:nth-child(3) li:nth-child(4) a").text("Renta ng Helicopter");
      $(".footer-container:nth-child(3) li:nth-child(5) a").text("Milford&Glenorchy Plane");
      $(".footer-container:nth-child(4) li:nth-child(1) a").text("Hotel");
      $(".footer-container:nth-child(4) li:nth-child(2) a").text("Arkilahan ng Kotse");
      $(".footer-container:nth-child(4) li:nth-child(3) a").text("Lodge");
      $(".footer-container:nth-child(4) li:nth-child(4) a").text("Backpackers&Trampers");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(1) a").text("Bahay");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(2) a").text("Tungkol sa");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(3) a").text("Mga serbisyo");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(4) a").text("Pagpepresyo");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(5) a").text("Blog");
      $(".text-center").text("Copyright ©2022 | Queenstown Guide by Ethan Mendoza")
    });
  });

  // chinese
  $(function() {
    $(".zh").click(function() {
      // Nav
      $(".nav-items li").children().eq(0).text("社区");
      $(".nav-items li").children().eq(1).text("地图");
      $(".nav-items li").children().eq(2).text("目的地");
      $(".nav-items li").children().eq(3).text("帮助");
      $(".selected-lang").text("中文");
      $(".selected-lang").addClass("change-zh");
      $(".selected-lang").removeClass("change-en");
      $(".selected-lang").removeClass("change-fil");
      $(".selected-lang").removeClass("change-ru");
      $(".selected-lang").removeClass("change-fr");
      $(".selected-lang").removeClass("change-es");
      $(".en").text("英语")
      $(".fil").text("他加禄语")
      $(".zh").text("中文")
      $(".ru").text("俄语")
      $(".es").text("西班牙语")
      $(".fr").text("法语")
      $(".inputtranslate").attr('placeholder', '搜索城镇..');
      //section
      $(".kiaora").text("“保持健康，这是您的皇后镇指南")
      $(".qttranslate").text("皇后镇")
      $(".qtptranslate").text("皇后镇坐落在壮观的高山山脉中的瓦卡蒂普湖岸边。据传，淘金者被周围山脉和河流的壮丽美景所吸引，为这座如今国际化的小镇命名。")
      $(".artranslate").text("箭镇")
      $(".arptranslate").text("箭镇迷人而古怪，是一个令人愉快的淘金村，坐落在波光粼粼的箭河旁，位于壮丽的山峰之下。距皇后镇机场仅 20 分钟路程，是您探索该地区时的理想下榻之所。箭镇是一个充满特色的繁荣社区——以及该国一些最好的餐饮和购物场所。您会被历史悠久的主要街道和美丽的步行道和自行车道迷住。这是新西兰的宝藏！")
      $(".gltranslate").text("格伦诺基")
      $(".glptranslate").text("格伦诺基距皇后镇仅 45 分钟路程，坐落在瓦卡蒂普湖北岸，是通往远足小径和中土™ 魔法的门户。")
      $(".watranslate").text("瓦纳卡")
      $(".waptranslate").text("瓦纳卡是一座充满无忧无虑的热闹小镇，风景如画的完美位置和前往户外的便捷通道使其成为您度假的终极基地。")
      $(".crtranslate").text("克伦威尔")
      $(".crptranslate").text("克伦威尔是由淘金者建立的，但现在它的宝藏是核果。探索附近的鬼城，沉浸在宁静的湖畔风光中。")
      // footer
      $(".footer-container:nth-child(1) h5:nth-child(1)").text("找到我们");
      $(".footer-container:nth-child(2) h5:nth-child(1)").text("计划和去");
      $(".footer-container:nth-child(3) h5:nth-child(1)").text("探索");
      $(".footer-container:nth-child(4) h5:nth-child(1)").text("预订");
      $(".footer-container:nth-child(2) li:nth-child(1) a").text("厄恩斯劳");
      $(".footer-container:nth-child(2) li:nth-child(2) a").text("旅游优惠");
      $(".footer-container:nth-child(2) li:nth-child(3) a").text("Coronet&Remarkables 雪地出租");
      $(".footer-container:nth-child(2) li:nth-child(4) a").text("喷射快艇出租");
      $(".footer-container:nth-child(2) li:nth-child(5) a").text("饮食");
      $(".footer-container:nth-child(3) li:nth-child(1) a").text("远足和流浪");
      $(".footer-container:nth-child(3) li:nth-child(2) a").text("步行");
      $(".footer-container:nth-child(3) li:nth-child(3) a").text("骑自行车");
      $(".footer-container:nth-child(3) li:nth-child(4) a").text("直升机租金");
      $(".footer-container:nth-child(3) li:nth-child(5) a").text("Milford&Glenorchy 飞机");
      $(".footer-container:nth-child(4) li:nth-child(1) a").text("酒店");
      $(".footer-container:nth-child(4) li:nth-child(2) a").text("汽车出租");
      $(".footer-container:nth-child(4) li:nth-child(3) a").text("小屋");
      $(".footer-container:nth-child(4) li:nth-child(4) a").text("背包客和流浪者");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(1) a").text("家");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(2) a").text("关于");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(3) a").text("服务");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(4) a").text("价钱");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(5) a").text("博客");
      $(".text-center").text("版权所有©2022 |伊桑·门多萨 (Ethan Mendoza) 的皇后镇指南")
    });
  });

  // russian //
  $(function() {
    $(".ru").click(function() {
      // Nav
      $(".nav-items li").children().eq(0).text("Сообщества");
      $(".nav-items li").children().eq(1).text("карта");
      $(".nav-items li").children().eq(2).text("Направления");
      $(".nav-items li").children().eq(3).text("Помощь");
      $(".selected-lang").text("Русский");
      $(".selected-lang").removeClass("change-fil");
      $(".selected-lang").addClass("change-ru");
      $(".selected-lang").removeClass("change-zh");
      $(".selected-lang").removeClass("change-en");
      $(".selected-lang").removeClass("change-fr");
      $(".selected-lang").removeClass("change-es");
      $(".en").text("английский")
      $(".fil").text("тагальский")
      $(".zh").text("китайский")
      $(".ru").text("русский")
      $(".es").text("испанский")
      $(".fr").text("французский")
      $(".inputtranslate").attr('placeholder', 'Искать города..');
      //section
      $(".kiaora").text("БУДЬТЕ ЗДОРОВЫ, ЭТО ВАШ ПУТЕВОДИТЕЛЬ ПО КВИНСТАУНУ")
      $(".qttranslate").text("Квинстаун")
      $(".qtptranslate").text("Квинстаун расположен на берегу озера Вакатипу среди впечатляющих альпийских хребтов. Ходят слухи, что золотоискатели, очарованные величественной красотой окрестных гор и рек, дали название этому ныне космополитическому городу.")
      $(".artranslate").text("Эрроутаун")
      $(".arptranslate").text("Эрроутаун очаровательный и причудливый, восхитительная деревня золотой лихорадки, расположенная рядом со сверкающей рекой Эрроу и ниже великолепных пиков. Всего в 20 минутах езды от аэропорта Квинстауна, это идеальное место для проживания во время изучения региона. Эрроутаун — это процветающее сообщество со своим характером, а также одними из лучших ресторанов и магазинов в стране. Вы будете очарованы исторической главной улицей и красивыми пешеходными и велосипедными дорожками. Это сокровище Новой Зеландии!")
      $(".gltranslate").text("Гленорчи")
      $(".glptranslate").text("Всего в 45 минутах езды от Квинстауна, Гленорчи расположен на северном берегу озера Вакатипу и является воротами к пешеходным тропам и магии Средиземья™.")
      $(".watranslate").text("Ванака")
      $(".waptranslate").text("Оживленный город, наполненный беззаботным духом, идеальное расположение Ванаки и легкий доступ к улице делают его идеальной базой для вашего отпуска.")
      $(".crtranslate").text("Кромвель")
      $(".crptranslate").text("Кромвель был основан золотоискателями, но теперь его сокровище — косточковые плоды. Исследуйте близлежащие города-призраки и насладитесь умиротворяющими пейзажами на берегу озера.")
      // footer
      $(".footer-container:nth-child(1) h5:nth-child(1)").text("Найди нас");
      $(".footer-container:nth-child(2) h5:nth-child(1)").text("Планируй и иди");
      $(".footer-container:nth-child(3) h5:nth-child(1)").text("Исследования");
      $(".footer-container:nth-child(4) h5:nth-child(1)").text("Бронирование");
      $(".footer-container:nth-child(2) li:nth-child(1) a").text("Эрнслоу");
      $(".footer-container:nth-child(2) li:nth-child(2) a").text("Туристические предложения");
      $(".footer-container:nth-child(2) li:nth-child(3) a").text("Аренда снега Coronet&Remarkables");
      $(".footer-container:nth-child(2) li:nth-child(4) a").text("Аренда катера");
      $(".footer-container:nth-child(2) li:nth-child(5) a").text("Еда и напитки");
      $(".footer-container:nth-child(3) li:nth-child(1) a").text("Пешие прогулки и походы");
      $(".footer-container:nth-child(3) li:nth-child(2) a").text("Ходьба");
      $(".footer-container:nth-child(3) li:nth-child(3) a").text("Езда на велосипеде");
      $(".footer-container:nth-child(3) li:nth-child(4) a").text("Аренда вертолета");
      $(".footer-container:nth-child(3) li:nth-child(5) a").text("Милфорд и Гленорчи Плэйн");
      $(".footer-container:nth-child(4) li:nth-child(1) a").text("Отель");
      $(".footer-container:nth-child(4) li:nth-child(2) a").text("Прокат автомобилей");
      $(".footer-container:nth-child(4) li:nth-child(3) a").text("Лодж");
      $(".footer-container:nth-child(4) li:nth-child(4) a").text("Пешие туристы и бродяги");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(1) a").text("Дом");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(2) a").text("об условиях");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(3) a").text("Услуги");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(4) a").text("Цены");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(5) a").text("Блог");
      $(".text-center").text("Copyright ©2022 | Путеводитель по Квинстауну от Ethan Mendoza")
    });
  });

  // spanish //
  $(function() {
    $(".es").click(function() {
      // Nav
      $(".nav-items li").children().eq(0).text("Comunidades");
      $(".nav-items li").children().eq(1).text("Mapa");
      $(".nav-items li").children().eq(2).text("Destinos");
      $(".nav-items li").children().eq(3).text("Ayuda");
      $(".selected-lang").text("Español");
      $(".selected-lang").removeClass("change-fil");
      $(".selected-lang").addClass("change-es");
      $(".selected-lang").removeClass("change-zh");
      $(".selected-lang").removeClass("change-ru");
      $(".selected-lang").removeClass("change-fr");
      $(".selected-lang").removeClass("change-en");
      $(".en").text("Inglés")
      $(".fil").text("Tagalo")
      $(".zh").text("Chino")
      $(".ru").text("Ruso")
      $(".es").text("Español")
      $(".fr").text("Francés")
      $(".inputtranslate").attr('placeholder', 'Buscar pueblos..');
      //section
      $(".kiaora").text("SÉ SALUDABLE, ESTA ES TU GUÍA DE QUEENSTOWN")
      $(".qttranslate").text("Queenstown")
      $(".qtptranslate").text("Queenstown se asienta en la orilla del lago Wakatipu entre impresionantes cadenas alpinas. Se rumorea que los buscadores de oro, cautivados por la majestuosa belleza de las montañas y los ríos circundantes, dieron su nombre a esta ciudad ahora cosmopolita.")
      $(".artranslate").text("Arrowtown")
      $(".arptranslate").text("Arrowtown es encantador y peculiar, un encantador pueblo de la fiebre del oro ubicado junto al resplandeciente río Arrow y debajo de magníficos picos. A solo 20 minutos del aeropuerto de Queenstown, es el lugar perfecto para hospedarse mientras explora la región. Arrowtown es una comunidad próspera llena de carácter, así como algunos de los mejores restaurantes y tiendas del país. Te encantará la calle principal patrimonial y los hermosos senderos para caminar y andar en bicicleta. ¡Es un tesoro de Nueva Zelanda!")
      $(".gltranslate").text("Glenorchy")
      $(".glptranslate").text("A solo 45 minutos de Queenstown, Glenorchy se encuentra en la orilla norte del lago Wakatipu y es la puerta de entrada a las rutas de senderismo y la magia de la Tierra Media™.")
      $(".watranslate").text("Wanaka")
      $(".waptranslate").text("Wanaka, una ciudad animada repleta de un espíritu despreocupado, la ubicación perfecta y el fácil acceso al aire libre la convierten en la base ideal para sus vacaciones.")
      $(".crtranslate").text("Cromwell")
      $(".crptranslate").text("Cromwell fue fundado por mineros de oro, pero ahora su tesoro es la fruta de hueso. Explora los pueblos fantasmas cercanos y empápate del tranquilo paisaje junto al lago.")
      // footer
      $(".footer-container:nth-child(1) h5:nth-child(1)").text("Encuéntranos");
      $(".footer-container:nth-child(2) h5:nth-child(1)").text("Planificar y seguir");
      $(".footer-container:nth-child(3) h5:nth-child(1)").text("Exploraciones");
      $(".footer-container:nth-child(4) h5:nth-child(1)").text("Reserva");
      $(".footer-container:nth-child(2) li:nth-child(1) a").text("Earnslaw");
      $(".footer-container:nth-child(2) li:nth-child(2) a").text("Ofertas de viajes");
      $(".footer-container:nth-child(2) li:nth-child(3) a").text("Alquiler de nieve en Coronet y Remarkables");
      $(".footer-container:nth-child(2) li:nth-child(4) a").text("Alquiler de lanchas motoras");
      $(".footer-container:nth-child(2) li:nth-child(5) a").text("Comer y beber");
      $(".footer-container:nth-child(3) li:nth-child(1) a").text("Senderismo y Tramping");
      $(".footer-container:nth-child(3) li:nth-child(2) a").text("Caminando");
      $(".footer-container:nth-child(3) li:nth-child(3) a").text("Ciclismo");
      $(".footer-container:nth-child(3) li:nth-child(4) a").text("Alquiler de helicóptero");
      $(".footer-container:nth-child(3) li:nth-child(5) a").text("Avión Milford&Glenorchy");
      $(".footer-container:nth-child(4) li:nth-child(1) a").text("Hotel");
      $(".footer-container:nth-child(4) li:nth-child(2) a").text("Alquiler de coches");
      $(".footer-container:nth-child(4) li:nth-child(3) a").text("Presentar");
      $(".footer-container:nth-child(4) li:nth-child(4) a").text("Mochileros y vagabundos");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(1) a").text("Hogar");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(2) a").text("Acerca");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(3) a").text("Servicios");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(4) a").text("Precios");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(5) a").text("Blog");
      $(".text-center").text("Copyright ©2022 | Queenstown Guide by Ethan Mendoza")
    });
  });

  // french //
  $(function() {
    $(".fr").click(function() {
      // Nav
      $(".nav-items li").children().eq(0).text("Communautés");
      $(".nav-items li").children().eq(1).text("Carte");
      $(".nav-items li").children().eq(2).text("Destinations");
      $(".nav-items li").children().eq(3).text("Aider");
      $(".selected-lang").text("Français");
      $(".selected-lang").removeClass("change-fil");
      $(".selected-lang").addClass("change-fr");
      $(".selected-lang").removeClass("change-zh");
      $(".selected-lang").removeClass("change-ru");
      $(".selected-lang").removeClass("change-es");
      $(".selected-lang").removeClass("change-en");
      $(".en").text("Anglais")
      $(".fil").text("Philippine")
      $(".zh").text("Chinois")
      $(".ru").text("Russe")
      $(".es").text("Espagnol")
      $(".fr").text("Français")
      $(".inputtranslate").attr('placeholder', 'Rechercher des villes..');
      //section
      $(".kiaora").text("KIA ORA, THIS IS YOUR QUEENSTOWN GUIDE")
      $(".qttranslate").text("Queenstown")
      $(".qtptranslate").text("Queenstown se trouve sur la rive du lac Wakatipu parmi des chaînes alpines spectaculaires. On raconte que des chercheurs d'or - captivés par la beauté majestueuse des montagnes et des rivières environnantes - ont donné son nom à cette ville désormais cosmopolite.")
      $(".artranslate").text("Arrowtown")
      $(".arptranslate").text("Arrowtown est charmant et original, un charmant village de la ruée vers l'or niché à côté de la rivière Arrow scintillante et sous de magnifiques sommets. À seulement 20 minutes de l'aéroport de Queenstown, c'est l'endroit idéal où séjourner pendant que vous explorez la région. Arrowtown est une communauté florissante pleine de caractère, ainsi que certains des meilleurs restaurants et boutiques du pays. Vous serez enchanté par la rue principale patrimoniale et les magnifiques sentiers pédestres et cyclables. C'est un trésor néo-zélandais !")
      $(".gltranslate").text("Glenorchy")
      $(".glptranslate").text("À seulement 45 minutes de Queenstown, Glenorchy est nichée sur la rive nord du lac Wakatipu et est la porte d'entrée des sentiers de randonnée et de la magie de la Terre du Milieu™.")
      $(".watranslate").text("Wanaka")
      $(".waptranslate").text("Une ville animée animée d'un esprit insouciant, l'emplacement parfait de Wanaka et l'accès facile à l'extérieur en font la base ultime pour vos vacances.")
      $(".crtranslate").text("Cromwell")
      $(".crptranslate").text("Cromwell a été créé par des chercheurs d'or, mais maintenant son trésor est le fruit à noyau. Explorez les villes fantômes à proximité et imprégnez-vous du paysage paisible au bord du lac.")
      // footer
      $(".footer-container:nth-child(1) h5:nth-child(1)").text("Trouve nous");
      $(".footer-container:nth-child(2) h5:nth-child(1)").text("Planifiez et partez");
      $(".footer-container:nth-child(3) h5:nth-child(1)").text("Explorations");
      $(".footer-container:nth-child(4) h5:nth-child(1)").text("Réservation");
      $(".footer-container:nth-child(2) li:nth-child(1) a").text("Earnslaw");
      $(".footer-container:nth-child(2) li:nth-child(2) a").text("Offres de voyage");
      $(".footer-container:nth-child(2) li:nth-child(3) a").text("Coronet&Remarkables Snow Rentals");
      $(".footer-container:nth-child(2) li:nth-child(4) a").text("Location de bateaux à réaction");
      $(".footer-container:nth-child(2) li:nth-child(5) a").text("Manger et boire");
      $(".footer-container:nth-child(3) li:nth-child(1) a").text("Randonnée et Piétinement");
      $(".footer-container:nth-child(3) li:nth-child(2) a").text("En marchant");
      $(".footer-container:nth-child(3) li:nth-child(3) a").text("Cyclisme");
      $(".footer-container:nth-child(3) li:nth-child(4) a").text("Location d'hélicoptère");
      $(".footer-container:nth-child(3) li:nth-child(5) a").text("Milford&Glenorchy Avion");
      $(".footer-container:nth-child(4) li:nth-child(1) a").text("Hôtel");
      $(".footer-container:nth-child(4) li:nth-child(2) a").text("Location de voitures");
      $(".footer-container:nth-child(4) li:nth-child(3) a").text("Loge");
      $(".footer-container:nth-child(4) li:nth-child(4) a").text("Routards et Vagabonds");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(1) a").text("Maison");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(2) a").text("À propos de");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(3) a").text("Prestations de service");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(4) a").text("Tarification");
      $(".footer .container:nth-child(2) ul:nth-child(1) li:nth-child(5) a").text("Blog");
      $(".text-center").text("Copyright ©2022 | Queenstown Guide by Ethan Mendoza")
    });
  });
  </script>

  <div class="cookie-content">
      <h1>Allow Cookies</h1>
      <p>By clicking terms and conditions you agree to our policy.</p>
      <button class="cookiebtn">Accept</button>
  </div>

  <section class="topcontainerbtmtext">
      <img src="Images/Otagoimage.jpg" alt="otago">
      <div class="datetime">
        <p class="kiaora">KIA ORA, THIS IS YOUR QUEENSTOWN GUIDE</p>
        <div class="date">
          <span id="dayname">Day</span>,
          <span id="month">Month</span>
          <span id="daynum">00</span>,
          <span id="year">Year</span>
        </div>
        <div class="time">
          <span id="hour">00</span>:
          <span id="minutes">00</span>:
          <span id="seconds">00</span>
          <span id="period">AM</span>
        </div>
      </div>
      <a class="weatherwidget-io" href="https://forecast7.com/en/n45d03168d66/queenstown/" data-label_1="QUEENSTOWN" data-label_2="WEATHER" data-mode="Current" data-theme="original" >QUEENSTOWN WEATHER</a>
  </section>

  <section class="sectcontainer">
    <div class="slider-frame" data-direction="left">
      <div class="slide-images">
        <div class="img-container">
          <img src="Images/queenstownimgnight.jpg" alt="queenstown">
        </div>
        <div class="img-container">
          <img src="Images/queenstowndaylight.jpg" alt="queenstown">
        </div>
        <div class="img-container">
          <img src="Images/queenstowngardenlake.jpg" alt="queenstown">
        </div>
      </div>
    </div>
    <a href="queenstown.html" class="qttranslate" data-direction="right">Queenstown</a>
    <p class="qtptranslate" data-direction="right">Queenstown sits on the shore of Lake Wakatipu among dramatic alpine ranges. It’s rumoured that gold prospectors - captivated by the majestic beauty of the surrounding mountains and rivers - gave this now cosmopolitan town its name.</p>
  </section>

  <section class="sectcontainer">
    <div class="slider-frame">
      <div class="slide-images">
        <div class="img-container">
          <img src="Images/arrowtownimage.jpg" alt="downtownarrowtown">
        </div>
        <div class="img-container">
          <img src="Images/arrowtownimg2.jpg" alt="arrowtown">
        </div>
        <div class="img-container">
          <img src="Images/arrowtownimg3.jpg" alt="arrowtown">
        </div>
      </div>
    </div>
   <a href="arrowtown.html" class="artranslate">Arrowtown</a>
   <p class="arptranslate">Arrowtown is charming and quirky, a delightful gold rush village nestled beside the sparkling Arrow River and below magnificent peaks. Just 20 minutes from Queenstown Airport, it's the perfect place to stay while you're exploring the region. Arrowtown is a thriving community that is packed with character – as well as some of the best dining and shopping in the country. You’ll be enchanted by the heritage main street and the beautiful walking and biking trails. It's a New Zealand treasure!</p>
 </section>

 <section class="sectcontainer">
   <div class="slider-frame">
     <div class="slide-images">
       <div class="img-container">
         <img src="Images/glenorchyimage.jpeg" alt="glenorchy">
       </div>
       <div class="img-container">
         <img src="Images/glenorchyimg2.jpg" alt="glenorchy">
       </div>
       <div class="img-container">
         <img src="Images/glenorchyimg3.jpg" alt="glenorchy">
       </div>
     </div>
   </div>
   <a href="glenorchy.html" class="gltranslate">Glenorchy</a>
   <p class="glptranslate">Just 45 minutes from Queenstown, Glenorchy is nestled on the northern shores of Lake Wakatipu & is the gateway to hiking trails and Middle‑earth™ magic.</p>
 </section>

 <section class="sectcontainer">
   <div class="slider-frame">
     <div class="slide-images">
       <div class="img-container">
         <img src="Images/wanakaimg1.jpg" alt="wanakatree">
       </div>
       <div class="img-container">
         <img src="Images/wanakaimg2.jpg" alt="wanakaviewfrommountain">
       </div>
       <div class="img-container">
         <img src="Images/wanakalavenderfarm.jpg" alt="laventerfarmwanaka">
       </div>
     </div>
   </div>
   <a href="wanaka.html" class="watranslate">Wanaka</a>
   <p class="waptranslate">A lively town buzzing with a carefree spirit, Wanaka’s picture-perfect location and easy access to the outdoors makes it the ultimate base for your holiday.</p>
 </section>

  <!--footer starts from here-->
<footer class="footer">
  <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row mt-4">
        <!--Grid column-->
        <div class="footer-container col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Find us</h5>
          <ul class="list-unstyled mb-0">
            <li><i class="fa fa-location-arrow"></i> Frankton, Queenstown, NZ, 9300 </li>
            <li><i class="fa fa-phone"></i>  +64273941923  </li>
            <li class="bbb"><i class="fa fa fa-envelope"></i> terrenceethan10mendoza@gmail.com  </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="footer-container col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Plan&Go</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-decoration-none">Earnslaw</a></li>
            <li><a href="#" class="text-decoration-none">Travel Deals</a></li>
            <li><a href="#" class="text-decoration-none">Coronet&Remarkables Snow Rentals</a></li>
            <li><a href="#" class="text-decoration-none">Jet Boat Rent</a></li>
            <li><a href="#" class="text-decoration-none">Eat&Drinks</a></li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="footer-container col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Explorations</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-decoration-none">Hiking & Tramping</a></li>
            <li><a href="#" class="text-decoration-none">Walking</a></li>
            <li><a href="#" class="text-decoration-none">Biking</a></li>
            <li><a href="#" class="text-decoration-none">Helicopter Rent</a></li>
            <li><a href="#" class="text-decoration-none">Milford&Glenorchy Plane</a></li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="footer-container col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Booking</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-decoration-none">Hotel</a></li>
            <li><a href="#" class="text-decoration-none">Car Rent</a></li>
            <li><a href="#" class="text-decoration-none">Lodge</a></li>
            <li><a href="#" class="text-decoration-none">Backpackers & Trampers</a></li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
  <div class="container">
    <ul class="foote_bottom_ul_amrc">
      <li><a href="mainweb.html" class="text-decoration-none">Home</a></li>
      <li><a href="help.html" class="text-decoration-none">About</a></li>
      <li><a href="#" class="text-decoration-none">Services</a></li>
      <li><a href="#" class="text-decoration-none">Pricing</a></li>
      <li><a href="#" class="text-decoration-none">Blog</a></li>
    </ul>
    <!--foote_bottom_ul_amrc ends here-->
    <p class="text-center">Copyright &copy;2022 | Queenstown Guide by Ethan Mendoza</p>
    <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Chien3136/" role="button"><i class="fab fa-facebook-f"></i></a>

          <!-- Twitter -->
          <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/ethanmendoza999" role="button"><i class="fab fa-twitter"></i></a>

          <!-- Youtube -->
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/channel/UCHi-yjiwvVEGGG6rOjduDYg" role="button"><i class="fa-brands fa-youtube"></i></a>

          <!-- Instagram -->
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/ethan.mendoza999/" role="button"><i class="fab fa-instagram"></i></a>

          <!-- Tiktok -->
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.tiktok.com/@ethan.mendoza999" role="button"><i class="fa-brands fa-tiktok"></i></a>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->
    <!--social_footer_ul ends here-->
  </div>
</footer>
<script src="mainweb.js"></script>

<!-- Transition navbar on scroll -->
<script>
  function changewp(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 1){
      navbar.classList.remove('navColor');
    }
    else{
      navbar.classList.add('navColor');
    }
  }

  window.addEventListener('scroll', changewp);
</script>

<!-- Phones, Tablets nav -->
<script>
  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const menuBtn = document.querySelector(".menu-icon");
  const form = document.querySelector(".searchbar");
  menuBtn.onclick = ()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
  cancelBtn.onclick = ()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.style.color = "$ff3d00";
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
  }
  searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
</script>

<!-- Suggestions search bar input -->
<script>
    let suggestions = [
      "Map",
      "Communities",
      "Help",
      "Queenstown",
      "Cromwell",
      "Wanaka",
      "Glenorchy",
      "Arrowtown",
      "Mapa",
      "Mga Komunidad",
      "Tulong",
      "Queenstown",
      "Cromwell",
      "Wanaka",
      "Glenorchy",
      "Arrowtown",
      "Карта",
      "Сообщества",
      "Помощь",
      "Квинстаун",
      "Кромвель",
      "Ванака",
      "Гленорчи",
      "Эрроутаун",
      "Carte",
      "Communautés",
      "Aide", "Queenstown",
      "Cromwell",
      "Wanaka",
      "Glenorchie",
      "Ville fléchée",
      "Mapa",
      "Comunidades",
      "Ayuda", "Queenstown",
      "Cromwell",
      "wanaka",
      "Glenorquía",
      "Pueblo de las flechas",
    ];
  </script>

  <script>
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".autocom-box");

    inputBox.onkeyup = (e)=>{
      let userData = e.target.value;
      let emptyArray = [];
      if(userData){
        emptyArray = suggestions.filter((data)=>{
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
          return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++){
          allList[i].setAttribute("onclick", "select(this)");
        }
      }else{
        searchWrapper.classList.remove("active");
      }
    }

    function select(element){
      let selectUserData = element.textContent;
      inputBox.value = selectUserData;
      searchWrapper.classList.remove("active");
    }

    function showSuggestions(list){
      let listData;
      if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
      }else{
        listData = list.join('');
      }
      suggBox.innerHTML = listData;
    }
  </script>

<!-- Javascript for responsive navbar -->
<script>
  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const form = document.querySelector(".search-input");
  menuBtn.onclick = ()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
  cancelBtn.onclick = ()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    cancelBtn.style.color = "blue";
    form.classList.remove("active");
  }
  searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
</script>

<!-- Cookies -->
<script>
const cookieContainer = document.querySelector(".cookie-content")
const cookieButton = document.querySelector(".cookiebtn")

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed"))
  cookieContainer.classList.add("active");
}, 2000);
</script>
</body>
