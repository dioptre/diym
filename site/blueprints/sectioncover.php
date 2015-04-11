<?php if(!defined('KIRBY')) exit ?>

title: Section Cover
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
  coversubtitle:
    label: Cover Subtitle
    type: textarea
  coverbtn:
    label: Cover Button Text
    type: text
  coverbtnlink:
    label: Cover Button Link
    type: text
  coverpic:
    label: Cover Picture
    type: select
    options: images