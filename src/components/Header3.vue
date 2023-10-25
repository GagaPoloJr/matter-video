<template>
    <div>
        <!--Main Menu/ Mobile Menu Section-->
        <section class="menu-section-area">
            <!-- Navigation -->
            <b-navbar v-b-scrollspy:list-of-sections v-b-scrollspy="20" class="navbar navbar-expand-lg fixed-top d-none d-sm-none d-md-block d-lg-block d-xl-block" id="mainNav">
                <div class="container">
                    <router-link class="navbar-brand js-scroll-trigger" to="/">
                    <b-img :src="require('../assets/img/home-3-img/logo-3.png')" img-alt="RATH Logo" class="img-fluid"></b-img>
                    </router-link>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-capitalize ml-auto">
                            <li class="nav-item dropdown"><a href="#home" class="nav-link js-scroll-trigger dropdown-toggle" data-toggle="dropdown">Home<i class="fas fa-angle-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li><router-link to="/">Home Default</router-link></li>
                                    <li><router-link to="/home2">Home Style 2</router-link></li>
                                    <li><router-link to="/home3">Home Style 3</router-link></li>
                                    <li><router-link to="/home4">Home Style 4</router-link></li>
                                    <li><router-link to="/home5">Home Style 5</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#about" target="_self">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#screenshots" target="_self">Screenshots</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#reviews" target="_self">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#team" target="_self">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#faq" target="_self">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#contact" target="_self">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger theme-button" href="#download" target="_self">Download</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </b-navbar>
            <!-- Navigation -->

            <!-- Mobile Menu Start -->  
            <b-navbar toggleable="lg" v-b-scrollspy:list-of-sections v-b-scrollspy="20" class="mobile_menu fixed-top hidden d-none" id="mainNavMobile">
                <b-container fluid>
                    <b-navbar-brand to="/"><b-img :src="require('../assets/img/home-3-img/logo-3.png')" img-alt="RATH Logo" class="img-fluid mobile-logo "></b-img></b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse">
                        <template v-slot:default="{ expanded }">
                            <b-icon v-if="expanded" icon="x"></b-icon>
                            <b-icon v-else icon="list"></b-icon>
                        </template>
                    </b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item-dropdown to="/" text="Home" no-caret class="fas fa-angle-down">
                                <b-dropdown-item to="/">Home Default</b-dropdown-item>
                                <b-dropdown-item to="/home2">Home Style 2</b-dropdown-item>
                                <b-dropdown-item to="/home3">Home Style 3</b-dropdown-item>
                                <b-dropdown-item to="/home4">Home Style 4</b-dropdown-item>
                                <b-dropdown-item to="/home5">Home Style 5</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item href="#about">About</b-nav-item>
                            <b-nav-item href="#screenshots">Screenshots</b-nav-item>
                            <b-nav-item href="#reviews">Reviews</b-nav-item>
                            <b-nav-item href="#team">Team</b-nav-item>
                            <b-nav-item href="#faq">FAQ</b-nav-item>
                            <b-nav-item href="#download"><span class="theme-button">Download</span></b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>

                </b-container>
            </b-navbar>
            <!-- Mobile Menu End -->
        </section>
        <!--Main Menu/ Mobile Menu Section-->
    </div>
</template>

<script>

export default {
  name: 'Header3',

    mounted: function () {
    
    // Menu Js
    this.$nextTick(function () {

      window.onscroll = function() {myFunction()};

      var header = document.getElementById("mainNav");
      var sticky = header.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("navbar-shrink");
        } else {
          header.classList.remove("navbar-shrink");
        }
      }
      
    })
    // Menu End
  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* Mobile Dropdown CSS */
.menu-section-area #mainNavMobile.navbar {
	background-color: #fff;
	box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
	padding: 0 1rem;
}
#mainNavMobile .navbar-nav {
	background: #2c303a;
}
#mainNavMobile .navbar-toggler {
	color: rgba(0, 0, 0, 1);
	border-color: transparent;
	font-size: 34px;
	padding: 0.25rem 0;
}
#mainNavMobile .navbar-nav li.nav-item {
	z-index: 9;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, .4);
}
#mainNavMobile .navbar-nav li.nav-item:hover, #mainNavMobile .navbar-nav li.nav-item.active {
    background-color: #2ca6ef;
}
#mainNavMobile .navbar-nav li:last-child:hover {
	background-color: transparent;
}
#mainNavMobile .navbar-nav .nav-link {
	color: #fff;
	padding: 16px 15px 18px;
	line-height: 15px;
}
.menu-section-area .nav-item.dropdown::before {
	position: absolute;
	right: 15px;
	top: 15px;
	font-size: 20px;
	z-index: -1;
	color: #fff;
}
.menu-section-area .nav-item .nav-link, ul.dropdown-menu .dropdown-item{
    font-weight: normal;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
}
#mainNavMobile .navbar-nav li:last-child span {
	width: auto;
	text-align: center;
	padding: 11px 27px 16px;
}
#mainNavMobile .navbar-nav li .dropdown-item {
	padding: 16px 15px 18px;
}
#mainNavMobile .navbar-nav ul.dropdown-menu li:hover {
    background-color: #2ca6ef;
}
#mainNavMobile .dropdown-item:hover, #mainNavMobile .dropdown-item:focus {
	color: #fff;
	background-color: transparent;
}
</style>
