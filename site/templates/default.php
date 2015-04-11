<?php snippet('header') ?>

<?php snippet('menu') ?>

<div class="sections-wrapper">
    <?php
        foreach($page->children()->visible() as $section) {
            snippet($section->template(), array('data' => $section));
        }
    ?>
</div>

<?php echo html($page->text()) ?>

<?php snippet('footer') ?>