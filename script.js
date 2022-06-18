/*------------　アニメーション ------------*/
	
 //1つめの動き
 $('.pulseTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__pulse');//クラス名が付与
    }
  });   

 //2つめの動き
$('.fadeInTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeIn');//クラス名が付与
    }
  }); 

/*------------　ヘッダーの色を白に変化 ------------*/

  var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 1024){
			window.addEventListener("scroll", function () {
				// ヘッダーを変数の中に格納する
				const header = document.querySelector("header");
				// 1500px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
				header.classList.toggle("scroll-nav", window.scrollY >= 1500);
			  });

		} else {
			window.addEventListener("scroll", function () {
				// ヘッダーを変数の中に格納する
				const header = document.querySelector("header");
				// 1px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
				header.classList.toggle("scroll-nav", window.scrollY >= 1);
			  });
		}

/*------------　  グローバルナビゲーション -クリックしたらナビが右から左に出現-  ------------*/

  $(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
	$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

/*------------　MV画像のスクロール ------------*/

//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 599){
			var responsiveImage = [//PC用の画像
				{ src: './img/mv1.jpg'},
				{ src: './img/mv2.jpg'},
                { src: './img/mv3.jpg'},
			];
		} else {
			var responsiveImage = [//スマホサイズ（599px）以下用の画像
				{ src: './img/spmv1.jpg'},
				{ src: './img/spmv2.jpg'},
                { src: './img/spmv3.jpg'},
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		
		transition: 'fade',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 5000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		//animation: 'kenburnsUp',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
	});

/*------------　productのスライダー ------------*/

if (matchMedia('only screen and (max-width: 599px)').matches) {
	$('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		speed: 800,//スライドのスピード。初期値は300。
		slidesToShow: 1,//スライドを画面に1枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更	
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		//centerMode: true,//要素を中央ぞろえにする
		//variableWidth: true,//幅の違う画像の高さを揃えて表示
		dots: true,//下部ドットナビゲーションの表示
	});

	} else if (matchMedia('only screen and (max-width: 1024px)').matches){
		$('.slider').slick({
			autoplay: true,//自動的に動き出すか。初期値はfalse。
			infinite: true,//スライドをループさせるかどうか。初期値はtrue。
			speed: 800,//スライドのスピード。初期値は300。
			slidesToShow: 2,//スライドを画面に3枚見せる
			slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
			nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
			centerMode: true,//要素を中央ぞろえにする
			//variableWidth: true,//幅の違う画像の高さを揃えて表示
			dots: true,//下部ドットナビゲーションの表示
		});

		} else {
		$('.slider').slick({
			autoplay: true,//自動的に動き出すか。初期値はfalse。
			infinite: true,//スライドをループさせるかどうか。初期値はtrue。
			speed: 800,//スライドのスピード。初期値は300。
			slidesToShow: 3,//スライドを画面に3枚見せる
			slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
			nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
			centerMode: true,//要素を中央ぞろえにする
			//variableWidth: true,//幅の違う画像の高さを揃えて表示
			dots: true,//下部ドットナビゲーションの表示
		});

	}

/*------------　ページトップリンク -ページの指定の高さを超えたら下から出現- ------------*/

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
