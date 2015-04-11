<!-- Sections are never used as visible pages at this point -->

<!-- ******Steps Section****** -->
<section class="steps section">
    <div class="container">
        <h2 class="title text-center" style="margin-bottom:0px;"><?php echo html($data->title())?></h2>
        <p class="intro text-center"><?php echo html($data->subtitle())?></p>
        <div class="row">
             <div class="comparison text-center col-md-6 col-sm-6 col-xs-12">
                <?php echo kirbytext($data->left())?>
             </div><!--//step-->
             <div class="comparison text-center col-md-6 col-sm-6 col-xs-12">
                <?php echo kirbytext($data->right())?>
             </div><!--//step-->
        </div><!--//row-->

        <div class="text-center text-below">
            <?php echo html($data->below())?>
        </div>

    </div><!--//container-->
</section><!--//steps-->


