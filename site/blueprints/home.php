<?php if(!defined('KIRBY')) exit ?>

title: Page
pages:
  template:
    - section
    - sectionwhy
    - sectiontimeline
    - sectioncomparison
    - sectioncover
    - sectioncoverquote
    - section3steps
    - sectionhtml
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
  covertitle:
    label: Cover Title
    type: text
  coversubtitle:
    label: Cover Subtitle
    type: text
  coverbtn:
    label: Cover Button Text
    type: text
  coverbtnlink:
    label: Link Cover button Uses
    type: text
  coverpic:
    label: Cover Picture
    type: select
    options: images