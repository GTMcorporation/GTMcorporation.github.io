---
title: Contact
subtitle: 연락처와 찾아오시는 길
layout: "page"
icon: fa-address-card
order: 5
---

<p>Elementum sem parturient nulla quam placerat viverra
mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.</p>

메일주소  
전화번호  
지도

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
