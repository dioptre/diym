<!-- This is a blog with nested content -->
<section id="why" class="section why">
     <div class="container">
        <h2 class="title text-center">
            <?php echo html($data->title()) ?>
        </h2>
        <p class="intro text-center">
            <?php echo html($data->subtitle()) ?>
        </p>

        <!-- Render sub templates -->
        <?php
            foreach($data->children()->visible() as $section) {
                snippet($section->template(), array('data' => $section));
            }
        ?>

        <!--
        <div class="feature-lead text-center">
            <h4 class="title">Want to discover all the features?</h4>
            <p><a class="btn btn-cta btn-cta-secondary" href="features.html">Take a Tour</a></p>
        </div>-->
    </div>
</section>