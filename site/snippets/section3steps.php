<!-- Sections are never used as visible pages at this point -->

<!-- ******Steps Section****** -->
<section class="steps section">
    <div class="container">
        <h2 class="title text-center" style="margin-bottom:0px;"><?php echo html($data->title())?></h2>
        <p class="intro text-center"><?php echo html($data->subtitle())?></p>
        <div class="row">
             <div class="step text-center col-md-4 col-sm-4 col-xs-12">
                 <h3 class="title"><span class="number">1</span><br /><span class="text"><?php echo html($data->step1title())?></span></h3>
                 <p><?php echo html($data->step1subtitle())?></p>
             </div><!--//step-->
             <div class="step text-center col-md-4 col-sm-4 col-xs-12">
                 <h3 class="title"><span class="number">2</span><br /><span class="text"><?php echo html($data->step2title())?></span></h3>
                 <p><?php echo html($data->step2subtitle())?><p>
             </div><!--//step-->
             <div class="step text-center col-md-4 col-sm-4 col-xs-12">
                 <h3 class="title"><span class="number">3</span><br /><span class="text"><?php echo html($data->step3title())?></span></h3>
                 <p><?php echo html($data->step3subtitle())?></p>
             </div><!--//step-->
        </div><!--//row-->

        <div class="text-center"><a class="btn btn-cta btn-cta-primary" href="<?php echo html($data->buttonurl())?>"><?php echo html($data->button())?></a></div>

    </div><!--//container-->
</section><!--//steps-->