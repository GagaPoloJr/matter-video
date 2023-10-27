<template>
  <div>
    <!-- Footer Start -->

    <footer class="footer-area">
      <div class="container">
        <div class="row justify-content-center justify-content-md-start align-items-center text-center text-md-left">
          <div class="col-md-12">
            <img
              class="footer-logo"
              :src="require('@/assets/icon/logo-white.svg')"
              alt=""
            />
          </div>
        </div>
        <div class="row alt-nav">
          <ul class="alt-nav-wrapper">
            <li v-for="(nav, index) in navItems" :key="index">
              <a :href="nav.link">{{ nav.title }}</a>
            </li>
          </ul>
          <div class="footer-info">
            <h1 class="footer-heading">{{ footerHeading }}</h1>
            <ul class="footer-social">
              <li v-for="(social, index) in socialIcons" :key="index">
                <a target="_blank" :href="social.link"
                  ><i :class="social.icon"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer End -->
  </div>
</template>

<script>
export default {
  name: "FooterMatter",
  data() {
    return {
      footerHeading: "#EverythingMatter",
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
      socialIcons: [
        {
          link: "https://x.com",
          icon: "fab fa-twitter",
        },
        {
          link: "https://telegram.com",
          icon: "fab fa-telegram-plane",
        },
        {
          link: "https://instagram.com",
          icon: "fab fa-instagram",
        },
        {
          link: "https://medium.com",
          icon: "fab fa-medium-m",
        },
        {
          link: "https://github.com",
          icon: "fab fa-github",
        },
        {
          link: "https://reddit.com",
          icon: "fab fa-reddit-alien",
        },
      ],
    };
  },
};
</script>

<style scoped>
i.fab {
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0 0 2px #ffffff21;
  padding: 0.5em 0.6em;
  color: #fff;
}
.footer-area {
  background: linear-gradient(
    98deg,
    #f801c8 -6.35%,
    #0100ff 46.86%,
    #01a9ed 101.19%
  );
  padding: 90px 0;
}

.alt-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
}

.alt-nav-wrapper {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.alt-nav-wrapper li a {
  color: #fff;
}

.footer-heading {
  color: #fff;
  font-size: 36px;
  font-weight: 300;
}
.footer-social {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: end;
}

@media screen and (max-width: 768px) {
  .footer-logo{
    width: 50%;
  }

  .alt-nav{
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap:80px;
  }

  .footer-heading{
    font-size: 20px;
  }
}
</style>
