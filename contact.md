---
title: Contact
subtitle: 아래 연락처들을 통해 GTM으로 연락, 방문하실 수 있습니다.
layout: splash
icon: fa-address-card
order: 4
permalink: /contact/
cover-photo: assets/images/banner.jpg
cover-photo-alt: assets/images/banner.jpg
---



## 유선 연락처
전화 : **[062-955-3366](tel:062-955-3366)**  
팩스 : **[062-955-3367](tel:062-955-3367)**
{: .notice--info}
---
## 찾아오시는 길

**광주광역시 광산구 진곡산단중앙로 114번길 지티엠(주)**
{: .notice--info}

<div class="mobile_map">
  <!-- * 카카오맵 - 지도퍼가기 -->
  <!-- 1. 지도 노드 -->
  <div id="daumRoughmapContainer1561592650522" class="root_daum_roughmap root_daum_roughmap_landing"></div>

  <!--
    2. 설치 스크립트
    * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
  -->
  <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

  <!-- 3. 실행 스크립트 -->
  <script charset="UTF-8">
    new daum.roughmap.Lander({
      "timestamp" : "1561592650522",
      "key" : "u48k",
      "mapWidth" : "640",
      "mapHeight" : "420"
    }).render();
  </script>

  <style>
  .mobile_map .root_daum_roughmap {width:100%!important;}
  </style>
</div>

---
## 온라인
메일주소 : **<gtmcorp@hanmail.net>** , **<GTM.corp.kr@gmail.com>**
{: .notice--info}

---
아래 폼을 통해서 직접 메일을 보낼 수도 있습니다.
<form method="post" action="https://formspree.io/{{ site.email }}">
  <div class="row">
    <div class="6u 12u$(mobile)"><input type="text" name="name" placeholder="Name" /></div>
    <div class="6u$ 12u$(mobile)"><input type="text" name="email" placeholder="Email" /></div>
    <div class="12u$">
      <textarea name="message" placeholder="Message"></textarea>
    </div>
    <div class="1u$">
      <input type="submit" value="Send Message" />
    </div>
  </div>
</form>