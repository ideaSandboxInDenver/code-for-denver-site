(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['projects.hbs'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<p>\n  A few projects the brigade has worked on:\n</p>\n<div class=\"row\">\n  <div class=\"col-md-9 project-highlight\">\n    <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\" data-pause=\"hover\">\n      <!-- Indicators -->\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"3\"></li>\n        <li data-target=\"#carousel-example-generic\" data-slide-to=\"4\"></li>\n      </ol>\n\n      <!-- Wrapper for slides -->\n      <div class=\"carousel-inner\" role=\"listbox\">\n\n        <div class=\"item active\">\n          <img src=\"img/CutePetsDenver.png\" alt=\"...\">\n          <div class=\"carousel-custom-caption\">\n            <h3>CutePetsDenver</h3>\n            <p>\n              Twitter bot that posts adoptable pets in your city\n            </p>\n            Partnership with <a href=\"#\">Denver Code for America Fellows</a> |\n            <a href=\"https://twitter.com/cutepetsdenver\">Twitter</a> |\n            <a href=\"https://github.com/codeforamerica/cutepets\">Source</a>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <img src=\"img/streetsweeping.png\" alt=\"Denver Street Sweeping\">\n          <div class=\"carousel-custom-caption\">\n            <h3>Denver Street Sweeping</h3>\n            <p>\n              Find street sweeping information for an address in Denver\n            </p>\n            Partnership with <a href=\"#\">Denver Code for America Fellows</a> |\n            <a href=\"http://streetsweep.co/\">streetsweep.co</a> |\n            <a href=\"https://github.com/codeforamerica/denver-schedules\">Source</a>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <img src=\"img/sparkhelp.png\" alt=\"SparkHelp\">\n          <div class=\"carousel-custom-caption\">\n            <h3>SparkHelp</h3>\n            <p>\n              disaster relief made simple for people and groups\n            </p>\n            <a href=\"https://sparkhelp.org/\">sparkhelp.org</a> |\n            Partnership with <a href=\"http://www.wearespark.org/\">Spark</a>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <img src=\"img/sparktime.png\" alt=\"SparkTime\">\n          <div class=\"carousel-custom-caption\">\n            <h3>SparkTime</h3>\n            <p>\n              people and groups record volunteer time by text message\n            </p>\n            <a href=\"http://sparktime.org/\">sparktime.org</a> |\n            Partnership with <a href=\"http://www.wearespark.org/\">Spark</a>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <img src=\"img/sparkfund.png\" alt=\"SparkFund\">\n          <div class=\"carousel-custom-caption\">\n            <h3>SparkFund</h3>\n            <p>\n              a unified system for funding and reporting disaster recovery\n            </p>\n            <a href=\"http://spark.fund/\">spark.fund</a> |\n            Partnership with <a href=\"http://www.wearespark.org/\">Spark</a>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- Controls -->\n      <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 project-list\">\n    <ul class=\"projects\">\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\">\n        CutePetsDenver\n      </li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\">\n        Denver Street Sweeping\n      </li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\">\n        SparkHelp\n      </li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"3\">\n        SparkTime\n      </li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"4\">\n        SparkFund\n      </li>\n    </ul>\n  </div>\n</div>\n";
},"useData":true});
})();