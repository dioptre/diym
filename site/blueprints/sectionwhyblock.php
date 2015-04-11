<?php if(!defined('KIRBY')) exit ?>

title: Section Why Block
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
  desc:
    label: Description
    type:  textarea
  testimonial:
    label: Testimonial
    type:  textarea
  testimonialauthor:
    label: Testimonial Author
    type:  text
    help: Should look this this - @LisaW, Bristol
  testimonialauthorpic:
    label: Testimonial Author Picture
    type:  select
    options: images
    help: Picture resolution needs to be 70px by 70px
  figure:
    label: Image
    type: select
    options: images
  caption:
    label: Image Caption
    type: text
    help: Optional caption text