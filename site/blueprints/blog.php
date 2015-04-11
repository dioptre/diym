<?php if(!defined('KIRBY')) exit ?>

title: Page
pages:
  template:
    - article
files: true
fields:
  title:
    label: Title
    type:  text
  cover:
    label: Cover Text
    type:  text
  subcover:
    label: Sub Cover Text
    type:  text
  coverpic:
    label: Cover Picture
    type: select
    options: images