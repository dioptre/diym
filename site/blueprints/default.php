<?php if(!defined('KIRBY')) exit ?>

title: Page
pages:
  template:
    - section
    - divider
    - title
files: true
fields:
  title:
    label: Title
    type:  text
  bodyid:
    label: ID (This will be applied to the <body> element)
    type: text
  coverhero:
    label: Cover Hero
    type: text
  covertext:
    label: Cover Text
    type: text
  text:
    label: Page Content (html)
    type: textarea