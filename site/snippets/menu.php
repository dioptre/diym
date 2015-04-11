<!-- ******HEADER****** -->
<header id="header" class="header">
    <div class="container">
        <h1 class="logo">
            <a href="/"><span class="text"><img src="/assets/Logo.png"></span></a>
        </h1><!--//logo-->
        <nav class="main-nav navbar-right" role="navigation">
            <div class="navbar-header">
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button><!--//nav-toggle-->
            </div><!--//navbar-header-->
            <div id="navbar-collapse" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <?php foreach($pages->visible() as $p): ?>
                      <?php if($p->hasVisibleChildren()): ?>
                        <?php if(false): ?>
                          <li class="dropdown">
                            <a class="dropdown-toggle <?php e($p->isOpen(), ' active') ?>" href="<?php echo $p->url() ?>" data-toggle="dropdown">
                              <?php echo html($p->title()) ?>
                              <b class="caret"></b>
                            </a>

                            <ul class="dropdown-menu">
                              <?php foreach($p->children()->visible() as $p): ?>
                                <?php if (!in_array($p->template(), array('title','section','divider'))): ?>
                                  <li>
                                    <a href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
                                  </li>
                                <?php endif ?>
                              <?php endforeach ?>
                            </ul>
                          </li>
                        <?php else: ?>
                          <li class="nav-item <?php e($p->isOpen(), ' active') ?>">
                            <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
                          </li>
                        <?php endif ?>
                      <?php else: ?>
                        <li class="nav-item <?php e($p->isOpen(), ' active') ?>">
                          <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a>
                        </li>
                      <?php endif ?>

                    <?php endforeach ?>
<!--                         <li class="active nav-item"><a href="index.html">Home</a></li>
                    <li class="nav-item"><a href="features.html">Features</a></li>
                    <li class="nav-item"><a href="pricing.html">Pricing</a></li>
                    <li class="nav-item dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Pages <i class="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="download.html">Download Apps</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                            <li><a href="blog-category.html">Blog Category</a></li>
                            <li><a href="blog-archive.html">Blog Archive</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </li><!--//dropdown-->
                    <!-- <li class="nav-item"><a href="http://lvrs.uservoice.com/knowledgebase" target="_blank">FAQ</a></li> -->
                    <li class="nav-item"><a href="<?php echo html($site->loginurl()) ?>">Log in</a></li>
                    <li class="nav-item nav-item-cta last"><a class="btn btn-cta btn-cta-secondary" href="<?php echo html($site->signupurl()) ?>">Sign Up</a></li>
                </ul><!--//nav-->
            </div><!--//navabr-collapse-->
        </nav><!--//main-nav-->
    </div><!--//container-->
</header><!--//header-->