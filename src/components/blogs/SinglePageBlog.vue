<template>
  <div id="content">
    <!-- Block 1-->
    <div class="block-1">
      <div class="card">
        <img :src="image" :alt="altText">
        <div class="card-body">
          <h2 class="card-title">{{title}}</h2>
          <div class="card-footer d-flex">
            <div class="card-footer-box d-flex">
              <div class="author-box"><span>By {{publishBy}}</span></div>
              <div class="blog-date"><i class="far fa-calendar-alt"></i> {{publishDate}}</div>
              <div class="card-footer-share">
                <i class="far fa-comments"></i> {{commentNumber}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>{{content1}}</p>

      <blockquote class="position-relative">
        <p>{{quoteText}}</p>
      </blockquote>

      <p>{{content2}}</p>

        <div class="blog-content-with-media">
          <div class="blog-media-content">
            <h6 class="blog-content-with-media-title">{{mediaTitle}}</h6>
            <p>{{content3}}</p>
            <p>{{content4}}</p>
          </div>

          <div class="blog-media-box d-inline-flex justify-content-center align-items-center position-relative">
            <img :src="mediaImage" :alt="mediaAltText">
          </div>

        </div>

    </div>
    <!-- Block 1-->

    <!-- Block 2-->
    <div class="block-2">
      <div class="share-article d-flex justify-content-between">
        <div class="share-box para-color"><i class="fas fa-tag"></i>
          <PopularTag v-for="tag in tags" :key="tag.id" :tagTitle="tag.tagTitle" />
        </div>

        <div class="share-box"><button><i class="fas fa-share-alt"></i> <span>{{shareText}}</span></button></div>
      </div>
      <div class="about-author d-flex justify-content-between align-items-center">
        <div class="author-img"><router-link to="#!"><img :src="authorAvatar" alt="avatar"></router-link></div>
        <div class="author-details">
          <h4 class="author-name color-orange">{{authorName}}</h4>
          <p>{{aboutAuthor}}</p>
          <div class="author-social">
            <AuthorSocialLinkItem v-for="icon in icons" :key="icon.id" :iconClass="icon.iconClass" />
          </div>
        </div>
      </div>
    </div>
    <!-- Block 2-->

    <!-- Block 3-->
    <div class="block-3">
      <!-- Leave a Comment Area-->
      <div class="leave-comment-area">
        <h2 class="para-color">Leave a Comment</h2>

        <form action="#">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                  <label for="cus_name">Full Name <span>*</span></label>
                  <input type="text" class="form-control" id="cus_name" required>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                  <label for="cus_email">Email <span>*</span></label>
                  <input type="email" class="form-control" id="cus_email" required>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                  <label for="cus_website">Website</label>
                  <input type="text" class="form-control" id="cus_website">
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group nessage-text">
                  <label for="cus_comment">Write Comment <span>*</span></label>
                  <textarea name="message" rows="3" class="form-control" id="cus_comment" required></textarea>
              </div>
              <div class="contact-sub-btn">
                  <button type="button" class="btn theme-button text-capitalize">Submit Comment</button>
              </div>
            </div>
          </div>
        </form>        
      </div>
      <!-- Leave a Comment Area-->

    </div>
    <!-- Block 3-->
</div>
</template>

<script>
import PopularTag from '@/components/blogs/PopularTag'
import AuthorSocialLinkItem from '@/components/blogs/AuthorSocialLinkItem'

export default {
  name: 'SinglePageBlog',
  
  components: {
    PopularTag,
    AuthorSocialLinkItem
  },

  data() {
    return {
      image: require('../../assets/img/blog-page-img/blog-page-img-1.jpg'),
      altText: 'Blog Thumb',
      title: 'Silly Mistakes People Do Starting a Startup',
      publishBy: 'Admin',
      publishDate: '06 Sep, 2019',
      commentNumber: '07 Comments ',
      content1: 'Nulla quntum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos.',
      quoteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation ulla.',
      content2: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolor em ipsum quia dolor sit amet, consectetur adipisci velit sed.',
      content3: 'Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam ali quam quaerat vo luptatem. Ut enim ad minima veniam, quis nostrum exerci tationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
      content4: 'Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vo luptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint oc caecati cupiditate non provident, similique sunt in culpa qui officia deserunt molli tia animi, id est laborum et dolorum fuga.',
      mediaImage: require('../../assets/img/blog-page-img/blog-details-media-img1.jpg'),
      mediaAltText: 'blog media',
      mediaTitle: 'Neque porro quisquam est',
      
      tags: [
        {id: 1, tagTitle: 'Agency,'},
        {id: 2, tagTitle: 'Branding,'},
        {id: 3, tagTitle: 'UX,'},
        {id: 4, tagTitle: 'App,'},
        {id: 5, tagTitle: 'Article'}
      ],
      
      shareText: 'Share this article',
      authorAvatar: require('../../assets/img/blog-page-img/blogger.jpg'),
      authorName: 'Jennifer Lee',
      aboutAuthor: 'Ut enim ad minima veniam, quis nostrum exerci tationem ullam corporis suscipit den ser mori ten laboriosam, nisi ut aliquid ex ea commodi consequatur.',

      icons: [
        {id: 1, iconClass: 'fab fa-facebook-f'},
        {id: 2, iconClass: 'fab fa-twitter'},
        {id: 3, iconClass: 'fab fa-linkedin-in'},
        {id: 4, iconClass: 'fab fa-pinterest"'}
      ],

    }
  }
}
</script>