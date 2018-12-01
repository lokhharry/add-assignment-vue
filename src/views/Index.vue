<template>
  <div>
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container box_1620">
            <!-- Brand and toggle get grouped for better mobile display -->
            <a class="navbar-brand logo_h" href="index.html">
              <img src="img/logo.png" alt>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about-us.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="properties.html">Properties</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="agents.html">Team</a>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Pages</a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="elements.html">Elements</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Blog</a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="single-blog.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                  <a href="#" class="search">
                    <i class="lnr lnr-magnifier"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <section class="home_banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div class="banner_content">
            <h5>It depends on the value of your property and where it’s located.</h5>
            <h3>The Costs of Buying a Home</h3>
            <a class="main_btn" href="#">Learn More</a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="advanced_search">
          <div class="search_title"><i class="fa fa-search" aria-hidden="true"></i> Search Properties by</div>
          <div class="search_select">
            <div>
              <label>District:</label>
              <select class="s_select" v-on:change="getEstate()" v-model="selectedDistrict">
                <option
                  :value="district.ID"
                  v-for="(district, key) in districts"
                  :key="key"
                >{{district.Name}}</option>
              </select>
            </div>
            <div>
              <label>Estate:</label>
              <select class="s_select" v-on:change="getProperty()" v-model="selectedEstate">
                <option
                  :value="estate.ID"
                  v-for="(estate, key) in estates"
                  :key="key"
                >{{estate.Name}}</option>
              </select>
            </div>
            <div>
              <label>Type:</label>
              <select class="s_select" v-model="selectedType">
                <option :value="t" v-for="(t, key) in types" :key="key">{{t}}</option>
              </select>
            </div>
            <!-- <select class="s_select">
              <option value="1">Bathrooms</option>
              <option value="2">Property Type</option>
              <option value="4">Bedrooms</option>
            </select>-->
          </div>
          <!-- <div class="search_range">
            <div class="range_item">
              <h5>Price Range</h5>
              <div id="slider-range"></div>
              <span class="d_text">$200</span>
              <input type="text" id="amount" readonly style="border:0;" class="amount">
            </div>
            <div class="range_item">
              <h5>property Area</h5>
              <div id="slider-range2"></div>
              <span class="d_text2">50sqm</span>
              <input type="text" id="amount2" readonly style="border:0;" class="amount2">
            </div>
          </div>-->
          <!--<button type="submit" value="submit" class="btn submit_btn">Search</button>-->
          <a class="main_btn" href="#jump_to">View</a>
        </div>
      </div>
    </section>
    <section class="properties_area" id="jump_to">
      <div class="container">
        <div class="main_title">
          <font size="66">{{filteredProperties.length}} RECOMMENDED PROPERTIES</font>
          <!-- <p>123</p> -->
        </div>
        <div class="row properties_inner">
          <div class="col-lg-4" v-for="(property, key) in filteredProperties" :key="key">
            <div class="properties_item">
              <div class="pp_img">
                <div class="sale_btn img_tag" v-if="property.SellingPrice != null">Sale</div>
                <div class="rental_btn img_tag" v-if="property.RentalPrice != null">Rental</div>
                <img :src="`img/properties/pp-${property.ID}.jpg`" :key="key" class="img-fluid" alt>
              </div>
              <div class="pp_content">
                <a href="#">
                  <h4>
                    <i class="fa fa-map-marker-alt" aria-hidden="true"></i>
                    {{property.EstateName}}
                  </h4>
                  <p>Floor {{property.Floor}}, {{property.EstateName}}, {{property.DistrictName}}</p>
                </a>
                <div class="tags">
                  <a href="#" v-if="property.CarParkProvided">
                    <i class="fa fa-car" aria-hidden="true"></i>Car Park
                  </a>
                  <a href="#">
                    <i class="fa fa-bed" aria-hidden="true"></i>
                    {{property.NumberOfBedrooms}} bedroom(s)
                  </a>
                  <a href="#">{{property.GrossFloorArea}} ft</a>
                </div>
                <div class="pp_footer">
                  <h6 class="selling_price" v-if="property.SellingPrice != null">Selling Price: ${{formatCurrency(property.SellingPrice)}}</h6>
                  <h6 class="rental_price" v-if="property.RentalPrice != null">Rental Price: ${{formatCurrency(property.RentalPrice)}}</h6>
                  <div class="type_area">
                    <a class="main_btn" href="#">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      {{property.Agent[0].Name}} at {{property.Agent[0].PhoneNumber}}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer-area p_120">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6 class="footer_title">About Us</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6 class="footer_title">Newsletter</h6>
              <p>Stay updated with our latest trends</p>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  class="subscribe_form relative"
                >
                  <div class="input-group d-flex flex-row">
                    <input
                      name="EMAIL"
                      placeholder="Email Address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email Address '"
                      required
                      type="email"
                    >
                    <button class="btn sub-btn">
                      <span class="lnr lnr-arrow-right"></span>
                    </button>
                  </div>
                  <div class="mt-10 info"></div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget instafeed">
              <h6 class="footer_title">Instagram Feed</h6>
              <ul class="list instafeed d-flex flex-wrap">
                <li>
                  <img src="img/instagram/Image-01.jpg" alt>
                </li>
                <li>
                  <img src="img/instagram/Image-02.jpg" alt>
                </li>
                <li>
                  <img src="img/instagram/Image-03.jpg" alt>
                </li>
                <li>
                  <img src="img/instagram/Image-04.jpg" alt>
                </li>
                <li>
                  <img src="img/instagram/Image-05.jpg" alt>
                </li>
                <li>
                  <img src="img/instagram/Image-06.jpg" alt>
                </li>
                <li>
                  <img src="img/instagram/Image-07.jpg" alt>
                </li>
                <li>
                  <img src="img/instagram/Image-08.jpg" alt>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget f_social_wd">
              <h6 class="footer_title">Follow Us</h6>
              <p>Let us be social</p>
              <div class="f_social">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i class="fa fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.advanced_search {
  background-color: black;
}
.search_title{  
  font-size: 18px;
  color: white;
  float: left;
  padding-bottom: 10px;
}
.pp_img {
  position: relative;
}
.img_tag {
  margin-right: -6px;
  margin-bottom: 0px;
  overflow: hidden;
  display: inline-block;
  padding: 0px 20px;
  line-height: 34px;
  border-radius: 3px;
  font-size: 16px;
  color: black;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  border-radius: 5px;
}
.sale_btn {
  position: absolute;
  bottom: 8px;
  left: 16px;
  border: 1px solid white;
  background: white;
  opacity: 0.8;
  color: red;
}
.rental_btn {
  position: absolute;
  bottom: 8px;
  right: 16px;
  border: 1px solid green;
  background: green;
  opacity: 0.8;
  color: white;
}
.type_area {
  padding-bottom: 12px;
  padding-top: 40px;
}
.pp_content {
  min-height: 200px;
}
.container {
  max-width: 1185px;
}
.search_select {
  display: flex;
  flex-wrap: wrap;
}
.search_select > div > label {
  margin-bottom: 0;
  margin-right: 10px;
  width: 100px;
  text-align: left;
}
.search_select > div {
  flex: 1 0 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.selling_price {
position: relative;
float: left;
color: red;
}
.rental_price {
position: relative;
float: right;
color: green;
}
</style>



<script>
import axios from "axios";
import numeral from "numeral";

export default {
  data() {
    return {
      districts: [],
      selectedDistrict: 0,
      estates: [],
      selectedEstate: 0,
      propertys: [],
      types: ["All", "Sale", "Rental"],
      selectedType: "All"
    };
  },
  methods: {
    getDistrict: function() {
      let self = this;
      axios({
        url: "/data/get-district",
        method: "get",
        responseType: "json"
      }).then(function(response) {
        self.districts = response.data;
        self.districts.push({ ID: 0, Name: "All" });
      });
    },
    getEstate: function() {
      let self = this;
      axios({
        url: `/data/get-estate/${this.selectedDistrict}`,
        method: "get",
        responseType: "json"
      }).then(function(response) {
        self.estates = response.data;
        self.estates.push({ ID: 0, Name: "All" });
      });
    },
    getProperty: function() {
      let self = this;
      axios({
        url: `/data/get-property-by-estate/${this.selectedEstate}`,
        method: "get",
        responseType: "json"
      }).then(function(response) {
        self.propertys = response.data;
      });
    },
    formatCurrency: function(amount) {
      return numeral(amount).format("0.0a");
    }
  },
  computed: {
    filteredProperties: function() {
      let self = this;
      switch (this.selectedType) {
        case "All":
          return this.propertys;
        case "Sale":
          return this.propertys.filter(p => {
            return p.SellingPrice != null;
          });
        case "Rental":
          return this.propertys.filter(p => {
            return p.RentalPrice != null;
          });
      }
    }
  },
  mounted: function() {
    this.getProperty();
    this.getDistrict();
    this.getEstate();
  }
};
</script>
