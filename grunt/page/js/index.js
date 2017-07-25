$(document).ready(function () {
    // 各地城市轮播
    var mySwiper = new Swiper('.swiper-container-1', {
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // loop: true
    })
    $('.arrow-left').on('click', function (e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.arrow-right').on('click', function (e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
    // 各地城市tab选项卡
    var firstHrW = $('.tabs>p').eq(0).width()
    var twoHrL = $('.two .tabs>p').eq(0).position().left
    $('.two .tab-cursor').css({
        width: firstHrW,
        left: twoHrL
    })
    var threeHrL = $('.three .tabs>p').eq(0).position().left
    $('.three .tab-cursor').css({
        width: firstHrW,
        left: threeHrL
    })
    $('.nanjing .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.nanjing .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.nanjing .tabs-content').css({
            visibility: 'hidden'
        })
        $('.nanjing .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.hefei .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.hefei .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.hefei .tabs-content').css({
            visibility: 'hidden'
        })
        $('.hefei .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.wuhan .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.wuhan .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.wuhan .tabs-content').css({
            visibility: 'hidden'
        })
        $('.wuhan .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.jinan .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.jinan .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.jinan .tabs-content').css({
            visibility: 'hidden'
        })
        $('.jinan .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.shenyang .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.shenyang .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.shenyang .tabs-content').css({
            visibility: 'hidden'
        })
        $('.shenyang .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.shijiazhuang .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.shijiazhuang .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.shijiazhuang .tabs-content').css({
            visibility: 'hidden'
        })
        $('.shijiazhuang .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.suzhou .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.suzhou .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.suzhou .tabs-content').css({
            visibility: 'hidden'
        })
        $('.suzhou .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.xuzhou .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.xuzhou .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.xuzhou .tabs-content').css({
            visibility: 'hidden'
        })
        $('.xuzhou .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.wuxi .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.wuxi .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.wuxi .tabs-content').css({
            visibility: 'hidden'
        })
        $('.wuxi .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    $('.changzhou .tabs>p').on('click', function (e) {
        var hrW = $(this).width()
        var hrL = $(this).position().left
        $('.changzhou .tab-cursor').width(hrW).css({
            left: hrL
        })
        var current = $(this).index() - 1
        $('.changzhou .tabs-content').css({
            visibility: 'hidden'
        })
        $('.changzhou .tabs-content').eq(current).css({
            visibility: 'visible'
        })
    })
    // 弹出城市
    $('.address').on('click', function () {
        $('.bg-bigcity').css({
            animation: 'flyUp 0.5s forwards'
        })
    })
    $('.city>li').on('click', function () {
        var tex = $(this).text()
        $('.address>span').text(tex)
        $('.city').css({
            animation: 'flyDown 0.5s forwards'
        })
        $('.city>li').removeClass('checked')
        $(this).addClass('checked')
    })
    $('.bg-bigcity').on('click', function () {
        $('.bg-bigcity').css({
            animation: 'flyDown 0.5s forwards'
        })
    })
    // 弹出导航
    $('.nav-logo').on('click', function () {
        $('.bg-big').css({
            animation: 'flyUp 0.5s forwards'
        })
    })
    $('.bg-big').on('click', function () {
        $('.bg-big').css({
            animation: 'flyDown 0.5s forwards'
        })
    })
    $('.nav-tab>li').on('click', function () {
        var currentIndex = $(this).index() - 1
        var currentWeb = $('section').eq(currentIndex)
        $('.nav-tab>li').removeClass('checked')
        $(this).addClass('checked')
        $('html,body').animate({
            scrollTop: currentWeb.offset().top
        }, 800)
    })
    // 联系我们轮播
    var swiper = new Swiper('.swiper-container-2', {
        pagination: '.swiper-pagination',
        slidesPerView: 4.5,
        paginationClickable: true,
        spaceBetween: 2,
        freeMode: true
    });
    // 联系我们选项卡
    $('.swiper-container-2 .swiper-slide').eq(0).css({
        'background-color': 'rgb(229,93,67)'
    })
    $('.swiper-container-2 .swiper-slide').on('click', function () {
        var current = $(this).index()
        $('.swiper-container-2 .swiper-slide').css({
            'background-color': 'rgb(151,152,153)'
        })
        $('.swiper-container-2 .swiper-slide').eq(current).css({
            'background-color': 'rgb(229,93,67)'
        })
        $('.contact-text').css({
            'display': 'none'
        })
        $('.contact-text').eq(current).css({
            'display': 'block'
        })
    })
    // 关注楼事小道
    $('.guanzhu').on('click', function () {
        $('.xiaodao-bg').css({
            display: 'block'
        })
    })
    $('.xiaodao-bg').on('click', function () {
        $('.xiaodao-bg').css({
            display: 'none'
        })
    })
})