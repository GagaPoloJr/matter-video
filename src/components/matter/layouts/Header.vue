<template>
  <div>
    <!--Main Menu/ Mobile Menu Section-->
    <section class="menu-section-area">
      <!-- Navigation -->
      <b-navbar
        v-b-scrollspy:list-of-sections
        v-b-scrollspy="20"
        class="navbar navbar-expand-lg fixed-top d-none d-sm-none d-md-block d-lg-block d-xl-block"
        id="mainNav"
      >
        <div class="container">
          <div
            style="width: 100%"
            class="row justify-content-between align-items-center"
          >
            <router-link class="navbar-brand js-scroll-trigger" to="/">
              <b-img
                :src="logo"
                img-alt="matter Logo"
                class="img-fluid"
              ></b-img>
            </router-link>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-capitalize ml-auto">
                <li
                  class="nav-item"
                  v-for="(nav, index) in navItems"
                  :key="index"
                >
                  <a
                    :href="nav.link"
                    target="_self"
                    class="nav-link js-scroll-trigger"
                    >{{ nav.title }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-capitalize ml-auto">
                <li class="nav-item">
                  <a class="btn-outline-default" href="">Sign In</a>
                  <cta-button text="Download" size="large" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-navbar>
      <!-- Navigation -->

      <!-- Mobile Menu Start -->
      <b-navbar
        toggleable="lg"
        v-b-scrollspy:list-of-sections
        v-b-scrollspy="20"
        class="mobile_menu fixed-top hidden d-none"
        id="mainNavMobile"
      >
        <b-container fluid>
          <b-navbar-brand to="/"
            ><b-img
              :src="logo"
              img-alt="matter Logo"
              class="img-fluid mobile-logo"
            ></b-img
          ></b-navbar-brand>

          <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
          <b-navbar-toggle target="nav-collapse">
            <template v-slot:default="{ expanded }">
              <b-icon v-if="expanded" icon="x"></b-icon>
              <b-icon v-else icon="list"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item
                v-for="(nav, index) in navItems"
                :key="index"
                :href="nav.link"
                >{{ nav.title }}</b-nav-item
              >
              <b-nav-item href="#download"
                ><span class="theme-button">Download</span></b-nav-item
              >
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
import CtaButton from "@/components/matter/components/CtaButton.vue";
export default {
  name: "HeaderMatter",
  components: {
    CtaButton,
  },
  data() {
    return {
      logo: require("@/assets/icon/logo-blue.png"),
      navItems: [
        {
          link: "#home",
          title: "Home",
        },
        {
          link: "#feature",
          title: "Feature",
        },
        {
          link: "#pricing",
          title: "Pricing",
        },
        {
          link: "#contact-us",
          title: "Contact Us",
        },
      ],
    };
  },
  mounted: function () {
    // Menu Js
    this.$nextTick(function () {
      window.onscroll = function () {
        myFunction();
      };

      var header = document.getElementById("mainNav");
      var sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("navbar-shrink");
        } else {
          header.classList.remove("navbar-shrink");
        }
      }
    });
    // Menu End
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*            added style                */

/* button */
.btn-outline-default {
  border-radius: 50px;
  border: 1px solid #01a9ed;
  padding: 10px 30px;
  color: #01a9ed;
  margin-right: 20px;
  font-size: 14px;
}

/* Mobile Dropdown CSS */
.mobile-logo {
  height: unset;
  padding: 20px 0;
}
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}
#mainNavMobile .navbar-nav li.nav-item:hover,
#mainNavMobile .navbar-nav li.nav-item.active {
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
.menu-section-area .nav-item .nav-link,
ul.dropdown-menu .dropdown-item {
  font-weight: normal;
  font-family: "Lato", sans-serif;
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
#mainNavMobile .dropdown-item:hover,
#mainNavMobile .dropdown-item:focus {
  color: #fff;
  background-color: transparent;
}



/*         replace the deafult style css           */



#mainNav {
  background: #fff;
}
#mainNav .navbar-nav .nav-item .nav-link {
  color: #01a9ed;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
</style>
