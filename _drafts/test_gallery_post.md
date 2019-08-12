---
title: GTM 홈페이지 개설
author: GTM
layout: post
layouts_gallery:
  - url: /assets/images/mm-layout-splash.png
    image_path: /assets/images/mm-layout-splash.png
    alt: "splash layout example"
  - url: /assets/images/mm-layout-single-meta.png
    image_path: /assets/images/mm-layout-single-meta.png
    alt: "single layout with comments and related posts"
  - url: /assets/images/mm-layout-archive.png
    image_path: /assets/images/mm-layout-archive.png
    alt: "archive layout example"
gallery_2:
  - url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
  - url: /assets/images/unsplash-gallery-image-2.jpg
    image_path: assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
  - url: /assets/images/unsplash-gallery-image-3.jpg
    image_path: assets/images/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 3"
feature_row:
  - image_path: /assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
    title: "Placeholder 1"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
  - image_path: /assets/images/unsplash-gallery-image-3-th.jpg
    title: "Placeholder 3"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
---

GTM 홈페이지가 아직 작성중입니다.  
정식 오픈 이후 첫 포스팅이 작성될 예정입니다.

## 이건 figure_row 테스트입니다.
{% include feature_row %}

## 아래는 갤러리 테스트용 이미지입니다.
{% include gallery id="gallery_2" caption="This is a sample gallery to go along with this case study." %}

{% include gallery id="layouts_gallery" caption="Examples of included layouts `splash`, `single`, and `archive`." %}

![무슨그림인지보자](/assets/images/unsplash-image-4.jpg)

<div class="row">
  <div class="item">
    <a href="#" class="image fit"><img src="{{ 'assets/images/pic02.jpg' | relative_url }}" alt="Ipsum Feugiat" /></a>
    <header>
      <h3>Ipsum Feugiat</h3>
    </header>
  </div>
  <div class="item">
    <a href="#" class="image fit"><img src="{{ 'assets/images/pic03.jpg' | relative_url }}" alt="Rhoncus Semper" /></a>
    <header>
      <h3>Rhoncus Semper</h3>
    </header>
  </div>
  <div class="item">
    <a href="#" class="image fit"><img src="{{ 'assets/images/pic04.jpg' | relative_url }}" alt="Magna Nullam" /></a>
    <header>
      <h3>Magna Nullam</h3>
    </header>
  </div>
</div>

<div class="row">
  <div class="4u 12u$(mobile)">
    <div class="item">
      <a href="#" class="image fit"><img src="{{ 'assets/images/pic02.jpg' | relative_url }}" alt="Ipsum Feugiat" /></a>
      <header>
        <h3>Ipsum Feugiat</h3>
      </header>
    </div>
    <div class="item">
      <a href="#" class="image fit"><img src="{{ 'assets/images/pic03.jpg' | relative_url }}" alt="Rhoncus Semper" /></a>
      <header>
        <h3>Rhoncus Semper</h3>
      </header>
    </div>
  </div>
  <div class="4u 12u$(mobile)">
    <div class="item">
      <a href="#" class="image fit"><img src="{{ 'assets/images/pic04.jpg' | relative_url }}" alt="Magna Nullam" /></a>
      <header>
        <h3>Magna Nullam</h3>
      </header>
    </div>
    <div class="item">
      <a href="#" class="image fit"><img src="{{ 'assets/images/pic05.jpg' | relative_url }}" alt="Natoque Vitae" /></a>
      <header>
        <h3>Natoque Vitae</h3>
      </header>
    </div>
  </div>
  <div class="4u 12u$(mobile)">
    <div class="item">
      <a href="#" class="image fit"><img src="{{ 'assets/images/pic06.jpg' | relative_url }}" alt="Dolor Penatibus" /></a>
      <header>
        <h3>Dolor Penatibus</h3>
      </header>
    </div>
    <div class="item">
      <a href="#" class="image fit"><img src="{{ 'assets/images/pic07.jpg' | relative_url }}" alt="Orci Convallis" /></a>
      <header>
        <h3>Orci Convallis</h3>
      </header>
    </div>
  </div>
</div>

## 표 관련 테스트

1번|2번
:---:|:---:
뭔가의|테이블
왜|이러냐
일케|나왔었나?
잘좀|
|나와봐라


## 이미지 정렬 테스트

![image-left](/assets/images/unsplash-gallery-image-1.jpg){: .align-left}

나머지는 어떻게 나올까?
이미지를 좀더 작게 해볼까?