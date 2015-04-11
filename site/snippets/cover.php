<?php function startsWith($haystack, $needle)
{
    return !strncmp($haystack, $needle, strlen($needle));
} ?>

<div id="hero" style="background-image:url('<?php foreach($page->images() AS $img):if (startsWith($img->name(),"cover-background")){ echo $img->url(); break; }; endforeach ?>')">
  <div class="container">
    <h1 class="hero-text animated fadeInDown"><?php echo html($page->coverhero()) ?></h1>
    <p class="sub-text animated fadeInDown"><?php echo html($page->covertext()) ?></p>
    <div class="cta animated fadeInDown"><?php echo html($page->coverbtn()) ?></div>
    <!-- Do check here for ne empty var (if not set show what's below)) -->
    <?php if (html($page->coverpic()) == '') { ?>
        <div class="img" style="background-image:url('<?php foreach($page->images() AS $img):if (startsWith($img->name(),"cover-hero")){ echo $img->url();}; endforeach ?>')"></div>
    <?php } else { ?>
        <?php echo html($page->coverpic()) ?>
    <?php } ?>


  </div>
</div>



