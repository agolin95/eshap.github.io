$( document ).ready(function() {
   $(function(){
     $("#footer").load("footer.html");
   });

});
$(function() {
    $('.emailButton').click(function() {
        window.location.href = ('mailto:eshapiro@eshap.tv');
    });
    
    $('.twitterButton').click(function() {
       window.open("https://twitter.com/eshap?lang=en", "_blank");
    });
    
    $('#joinUs').click(function() {
       window.open("contact.html", "_self");
    });
	
	$('.articleBox').hover(
        function() {
          $(this).find(".readOn").css("color", "#f08071");
          $(this).find(".articleImg").css("border-color", "#f08071");
	    },
        function() {
          $(this).find(".readOn").css("color", "#bbbbbb");
          $(this).find(".articleImg").css("border-color", "white");
	    }
   );
   
   $('.vimeo').click(function() {
      window.open("https://vimeo.com/ondemand/bartlett/", '_blank');
   });
   $('.amazon').click(function() {
      window.open("https://www.amazon.com/dp/B0798CJFDW", '_blank');
   });
   
   
   $('#variety').click(function() {
      window.open("http://variety.com/2017/tv/news/evan-shapiro-troy-miller-eshap-tv-eat-your-words-pilot-1202537738/", '_blank');
   });
   $('#sebastian').click(function() {
      window.open("http://variety.com/2017/tv/news/sebastian-wakes-up-pop-sebastian-conelli-pilot-order-1202599592/", '_blank');
   });
   $('#broadcasting').click(function() {
      window.open("http://www.broadcastingcable.com/news/programming/evan-shapiro-launches-comedy-series-bartlett-vimeo/170991", '_blank');
   });
   $('#deadline').click(function() {
      window.open("http://deadline.com/2018/01/evan-shapiro-on-producing-in-a-digital-world-adapting-youtube-material-and-reteaming-with-lin-manuel-miranda-1202274178/", '_blank');
   });
   $('#tubefilter').click(function() {
      window.open("https://www.tubefilter.com/2018/01/31/bartlett-evan-shapiro-lin-manuel-miranda/", '_blank');
   });
   $('#thewrap').click(function() {
      window.open("https://www.thewrap.com/peak-tv-arms-race-evan-shapiro-shaping-way-make-sell-watch-guest-blog/", '_blank');
   });
   $('#billboard').click(function() {
      window.open("https://www.billboard.com/articles/business/8214723/the-hard-times-matt-saincome-spotlight-interview", '_blank');
   });
});