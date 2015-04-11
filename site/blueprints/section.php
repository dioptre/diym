<?php if(!defined('KIRBY')) exit ?>

title: Section
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
  imgposition:
    label: Image postion
    type:  radio
    options:
        - key: left
          value: Links
        - key: right
          value: Rechts
  text:
    label: Text
    type:  textarea