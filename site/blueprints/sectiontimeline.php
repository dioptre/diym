<?php if(!defined('KIRBY')) exit ?>

title: Section Timeline
pages:
  template:
    - sectiontimelineblock
    - sectiontimelineblocksimple
files: true
fields:
  title:
    label: Title
    type:  text
    text: >
      To create a sub section please click add pages. Make sure to make the page **visible**!!!
  description:
    label: Subtitle
    type:  textarea