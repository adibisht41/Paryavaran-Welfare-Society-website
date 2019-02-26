jQuery(function($) {
	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});
	
	//navHeight calc
	var navHeight =  $('.navbar-header').height();
	
	
	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);
	
	$(window).resize(function(){
		slideHeight = $(window).height();
		$('#home-slider .item').css('height',slideHeight);
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		var navHeight1=$('.main-nav').height();
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 0.5*navHeight1}, 1000);
		return false;
	});

	//Initiat WOW JS
	new WOW().init();

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success" style="color:#fff;">Thank you for contacting us. We will contact you as early as possible.</p>').delay(3000).fadeOut();
		});
	});

	// raise pws logo when navbar uncollapse
	//.logo for index.html && .hide-nav-logo img for image_gallery.html
	
	$('.navbar-header button').click(function(){			
			if(!($('.navbar-collapse').hasClass('collapse in'))){
				displaceLogo(0);
			}
			else{
				displaceLogo(1);
				}
	});
	
	
	$(window).resize(function(){
		if($(window).width()>768){
			displaceLogo(1);
		}
		else if(($('.navbar-collapse').hasClass('collapse in'))){
				displaceLogo(0);
			}
	});
	
	//offset for scrollspy
	
	$('body').attr('data-offset',navHeight);
	$(window).resize(function(){
		navHeight =  $('.navbar-header').height();
		$('body').attr('data-offset',navHeight);		
	});
	
	
function displaceLogo(v1){
	if(v1==1){
		$('.logo2,.hide-nav-logo img').css('height','77px');
		$('.logo2,.hide-nav-logo img').css('width','77px');
		$('.navbar-brand').removeClass('raise-logo-1');
	}
	else{
		$('.logo2,.hide-nav-logo img').css('height',navHeight);
		$('.logo2,.hide-nav-logo img').css('width',navHeight);
		$('.navbar-brand').addClass('raise-logo-1');
	}
}
		
	//For youtube video embed
	
    $(".youtube1").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
		// Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));
    
        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
    
            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': '100%', 'height': '100%' })
    
            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
		
		
    });
	//uncollapse navbar on clicking anywhere in page but only on click of left mouse button
	
	$(document).click(function(event){
		var $navbar = $(".navbar-collapse"); 
		var mouseButton=event.button;
		if ($navbar.hasClass("in")&& mouseButton!=2 ) {      
			$navbar.collapse('hide');
			displaceLogo(1);
		}
	});
	
	$('.scroll a').click(function(){                  
			$(".navbar-collapse").collapse('hide');
			displaceLogo(1);
	});
	
	var aoh=$(window).width();
	
	if(aoh<850 && aoh>767){
		$('#hide-aoh').css('display','none');
	}
	else
		$('#hide-aoh').css('display','');
	
	$(window).resize(function(){
		aoh=$(window).width();
			
		if(aoh<850 && aoh>767){
			$('#hide-aoh').css('display','none');
		}
		else
			$('#hide-aoh').css('display','');
	});
	//to resize gallery images
	var tempEvent1=$('#temp-event-1').height();
	$('#temp-event-2').css('height',tempEvent1);
	$(window).resize(function(){
		tempEvent1=$('#temp-event-1').height();
		$('#temp-event-2').css('height',tempEvent1);
	});
	
	var environDay=$('#envir-day-2').height();
	$('#envir-day-1').css('height',environDay);
	$(window).resize(function(){
		environDay=$('#envir-day-2').height();
		$('#envir-day-1').css('height',environDay);
	});
	
	var polCheck=$('#Pol-check').height();
	$('.Pol-check').css('height',polCheck);
	$(window).resize(function(){
		polCheck=$('#Pol-check').height();
		$('.Pol-check').css('height',polCheck);
	});
	
	var solidWaste=$('#solid-waste').height();
	$('.solid-waste').css('height',solidWaste);
	$(window).resize(function(){
		polCheck=$('#solid-waste').height();
		$('.solid-waste').css('height',solidWaste);
	});
	
	var graffiti=$('#graffiti').height();
	$('.graffiti').css('height',graffiti);
	$(window).resize(function(){
		graffiti=$('#graffiti').height();
		$('.graffiti').css('height',graffiti);
	});
	
	var bus_stop_clean=$('#bus-stop-clean').height();
	$('.bus-stop-clean').css('height',bus_stop_clean);
	$(window).resize(function(){
		bus_stop_clean=$('#bus-stop-clean').height();
		$('.bus-stop-clean').css('height',bus_stop_clean);
	});

	var treePaint=$('#tree-paint').height();
	$('.tree-paint').css('height',treePaint);
	$(window).resize(function(){
		treePaint=$('#tree-paint').height();
		$('.tree-paint').css('height',treePaint);
	});
	
	//up-down navigation using keyboard for chrome

	const scrollDown = (h) => {
	  let i = h || 0;
	  if (i < 50) {
		setTimeout(() => {
		  window.scrollTo(window.scrollX, window.scrollY+10);
		  scrollDown(i + 10);
		}, 10);
	  }
	}

	const scrollUp = (h) => {
	  let i = h || 0;
	  if (i < 50) {
		setTimeout(() => {
		  window.scrollTo(window.scrollX, window.scrollY-10);
		  scrollUp(i + 10);
		}, 10);
	  }
	}
	
	if(typeof window.chrome == "object"){
		window.addEventListener('keydown', function( e ) { 
			if( e.keyCode == 40 ) {
				scrollDown();
			}
			if( e.keyCode == 38 ) { 
				scrollUp();
			} 
		});
	}
	
});//end of $(function(){});


//Team selection
function randomMember(max) {
  return Math.floor(Math.random() * max);
}

const team = [
	{'Joint Secretary':['Prakhar Gupta','Saakshi']},
	{'Technical Head':['Karteek Kandhari','Jasjot']},
	{'Creativity Head':['Swati Kothari','Tanya Bansal']},
	{'Publicity Head':['Amiteshwar Kaur','Ravneet','Saloni Goyal']},
	{'Logistics Head':['Shantnu Bishnoi','Ishan Gupta']},
	{'other':[['Saksham Handa','Documentation Head'],['Anand Mohan','Finance Head']]},
	{'other1':[['Nandappa Machkanur','Media Head'],['Kartik Aggarwal','Editor-In-Chief']]}
]

//pics path are in same order as team members

const pics = [
	['images/Team/Prakhar.jpeg','images/Team/Saakshi.jpeg'], //secretary
	['images/Team/Karteek.jpg','images/Team/dummy-male.png'],	//Technical
	['images/Team/Swati.jpg','images/Team/dummy-female.png'],	//Creativity
	['images/Team/amiteshwar.png','images/Team/dummy-female.png','images/Team/dummy-female.png'],	//Publicity
	['images/Team/shantnu.jpeg','images/Team/Ishan.jpg'],	//Logistics
	['images/Team/Saksham.jpeg','images/Team/Aanand.jpeg'],	//Other
	['images/Team/Sid.jpeg','images/Team/Kartik Aggarwal.png'],	//Other1
]

// let secretary=randomMember(2);

// document.getElementById("secretary").querySelector("h3").innerHTML=team[0]['Joint Secretary'][secretary];
// document.getElementById("secretary").querySelector("img").src=pics[0][secretary];

let technical=randomMember(2);
technical=0;
document.getElementById("technical").querySelector("h3").innerHTML=team[1]['Technical Head'][technical];
document.getElementById("technical").querySelector("img").src=pics[1][technical];

let creativity=randomMember(2);
creativity=0;
document.getElementById("creativity").querySelector("h3").innerHTML=team[2]['Creativity Head'][creativity];
document.getElementById("creativity").querySelector("img").src=pics[2][creativity];

let publicity=randomMember(3);
publicity=0;
document.getElementById("publicity").querySelector("h3").innerHTML=team[3]['Publicity Head'][publicity];
document.getElementById("publicity").querySelector("img").src=pics[3][publicity];

let logistic=randomMember(2);
logistic=1;
document.getElementById("logistic").querySelector("h3").innerHTML=team[4]['Logistics Head'][logistic];
document.getElementById("logistic").querySelector("img").src=pics[4][logistic];
let other=randomMember(2);
other=1;
document.getElementById("other-mem").querySelector("h3").innerHTML=team[5]['other'][other][0];
document.getElementById("other-mem").querySelector("h4").innerHTML=team[5]['other'][other][1];
document.getElementById("other-mem").querySelector("img").src=pics[5][other];

// let other1=randomMember(2);
// document.getElementById("other1").querySelector("h3").innerHTML=team[6]['other1'][other1][0];
// document.getElementById("other1").querySelector("h4").innerHTML=team[6]['other1'][other1][1];
// document.getElementById("other1").querySelector("img").src=pics[6][other1];