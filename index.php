<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D'Alexander Bar Coctel 🍹</title>

    <!--Imports-->
    <link rel="stylesheet" href="assets/css/core.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

</head>
<body>
    <div class="preloading">
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
   <main class="w-100 d-none ">
    
    <?php include 'src/php/menu_tab.php'; ?>

    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <?php include 'src/php/pages/home.php'; ?>
        </div>
        <div class="tab-pane fade " id="pills-about-me" role="tabpanel" aria-labelledby="pills-about-me-tab">
            <?php include 'src/php/pages/about_me.php'; ?>
        </div>
        <div class="tab-pane fade " id="pills-bar-services" role="tabpanel" aria-labelledby="pills-bar-services-tab">
            <?php include 'src/php/pages/bar_services.php'; ?>
        </div>
        <div class="tab-pane fade " id="pills-cocktail" role="tabpanel" aria-labelledby="pills-cocktail-tab">
            <?php include 'src/php/pages/cocktail_menu.php'; ?>
        </div>
        <div class="tab-pane fade " id="pills-bar-calendar" role="tabpanel" aria-labelledby="pills-bar-calendar-tab">
            <?php include 'src/php/pages/bar_calendar.php'; ?>
        </div>
        <div class="tab-pane fade " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <?php include 'src/php/pages/contact.php'; ?>
        </div>
        
    </div>
    
    <?php include 'src/php/footer.php'; ?>    
   </main>
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="assets/js/slider.js"></script>
    <script src="assets/js/reviews_slider_services.js"></script>

    <script src="assets/js/reviews_slider.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="assets/js/animations.js"></script>
    <script src="assets/js/loading_page.js"></script>
</body>
</html>