## Welcome to the pages of Marco Morley

You can use the [editor on GitHub](https://github.com/morleymarco/morleymarco.github.io/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

These are my learning pages.  I have a long ways to go and hopefully can use this page as a place to get help, as well as demonstrate
work that I am trying to accomplish.

### 

T

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/morleymarco/morleymarco.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

            </div>
                <div class="stage-wrapper clearfix">
        <div class="stage clearfix">
            <div class="stage-container">
                <div class="jcarousel-wrapper">
                    <div class="jcarousel">
                        <ul class="clearfix">
                            <li><img src="assets/img/pic/img1.jpg" width="748" height="300" alt=""></li>
                            <li><img src="assets/img/pic/img2.jpg" width="748" height="300" alt=""></li>
                            <li><img src="assets/img/pic/img3.jpg" width="748" height="300" alt=""></li>
                        </ul>
                    </div>

                    <p class="photo-credits">
                        Photos by <a href="http://www.mw-fotografie.de">Marc Wiegelmann</a>
                    </p>

                    <a href="#" class="jcarousel-control-prev">&lsaquo;</a>
                    <a href="#" class="jcarousel-control-next">&rsaquo;</a>

                    <p class="jcarousel-pagination"></p>
                </div>
            </div>
        </div>
    </div>
            <div class="nav-wrapper clearfix">
                <nav class="nav clearfix">
                    <ul>
                        <li><a href="docs/">Documentation</a></li>
                        <li><a href="examples/">Examples</a></li>
                        <li><a href="contributing.html">Contributing</a></li>
                        <li><a href="https://github.com/jsor/jcarousel">GitHub</a></li>
                        <li class="download"><a href="dist/">Download</a></li>
                    </ul>
                </nav>
            </div>
            <div class="content-wrapper">
                <div class="content">
                        <p>jCarousel is a jQuery plugin for controlling a list of items in horizontal or vertical order.</p>
    <p>It provides a full-featured and flexible toolset for navigating any HTML based content in a carousel-like fashion.</p>
                </div>
            </div>
            <div class="footer-wrapper">
                <div class="footer teaser clearfix">
                    <h3>Checkout my other projects</h3>
                    <a href="http://sorgalla.com/lity/" class="teaser-box">
                        <h3>Lity</h3>
                        <p>A lightweight responsive lightbox.</p>
                    </a>
                    <a href="http://sorgalla.com/gee/" class="teaser-box">
                        <h3>gee</h3>
                        <p>A minimalistic grid system framework.</p>
                    </a>
                </div>
            </div>
            <div class="footer-wrapper">
                <footer class="footer clearfix">
                    <p>Copyright (c) 2006-<script>document.write(new Date().getFullYear());</script> <a href="http://sorgalla.com">Jan Sorgalla</a>. Released under the <a href="https://github.com/jsor/jcarousel/blob/master/LICENSE">MIT license</a>. <a href="http://sorgalla.com/impressum">Impressum</a>.</p>
                </footer>
            </div>
        </div>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="dist/jquery.jcarousel.min.js"></script>
    <script>
        $(function () {
            var jcarousel = $('.jcarousel');

            jcarousel
                    .on('jcarousel:reload jcarousel:create', function () {
                        jcarousel.jcarousel('items').width(jcarousel.innerWidth());
                    })
                    .jcarousel({
                        wrap: 'circular',
                        transitions: Modernizr.csstransitions ? {
                            transforms:   Modernizr.csstransforms,
                            transforms3d: Modernizr.csstransforms3d,
                            easing:       'ease'
                        } : false
                    });

            $('.jcarousel-control-prev')
                    .on('jcarouselcontrol:active', function() {
                        $(this).removeClass('inactive');
                    })
                    .on('jcarouselcontrol:inactive', function() {
                        $(this).addClass('inactive');
                    })
                    .jcarouselControl({
                        target: '-=1'
                    });

            $('.jcarousel-control-next')
                    .on('jcarouselcontrol:active', function() {
                        $(this).removeClass('inactive');
                    })
                    .on('jcarouselcontrol:inactive', function() {
                        $(this).addClass('inactive');
                    })
                    .on('click', function(e) {
                        e.preventDefault();
                    })
                    .jcarouselControl({
                        target: '+=1'
                    });

            $('.jcarousel-pagination')
                    .on('jcarouselpagination:active', 'a', function() {
                        $(this).addClass('active');
                    })
                    .on('jcarouselpagination:inactive', 'a', function() {
                        $(this).removeClass('active');
                    })
                    .on('click', function(e) {
                        e.preventDefault();
                    })
                    .jcarouselPagination({
                        item: function(page) {
                            return '<a href="#' + page + '">' + page + '</a>';
                        }
                    });
        });
    </script>
    </body>
</html>
