$(function() {
    $('.emailButton').click(function() {
        window.location.href = ('mailto:eshapiro@eshap.tv');
    });
    
    $('.twitterButton').click(function() {
       window.open("https://twitter.com/eshap?lang=en", "_blank");
    });
	
	$('.articleBox').hover(
        function() {
		    $(this).css("background-color", "#939BB4");
          $(this).find(".readOn").css("color", "#B21414");
	    },
        function() {
		    $(this).css("background-color", "#181E33");
          $(this).find(".readOn").css("color", "#bbbbbb");
	    }
   );
   
   $('#variety').click(function() {
      window.open("http://variety.com/2017/tv/news/evan-shapiro-troy-miller-eshap-tv-eat-your-words-pilot-1202537738/", '_blank');
   });
   $('#sebastian').click(function() {
      window.open("http://variety.com/2017/tv/news/sebastian-wakes-up-pop-sebastian-conelli-pilot-order-1202599592/", '_blank');
   });
});