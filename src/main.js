$(".navbar-toggler").click(function () {
    // 當點擊上述被選擇的元素後，要執行的流程
    console.log("點到按鈕了!!")
    // 小駝峰命名法 signInWithGoogle && signInWithEmailAndPassword
    // 選.navbar-list 並為它「切換」 class="active"
    // addClass() 新增class
    $(".navbar-list").toggleClass("active")
    $(".header").toggleClass("active")
    $(".line").toggleClass("rotate")
})

window.addEventListener('scroll', function () {
    console.log("enter scroll")
    const y = window.scrollY ;
  
        console.log("446",top)
        if (y > 1) {
            $(".navbar-list").removeClass("active")
            $(".header").removeClass("active")
            $(".line").removeClass("rotate")
        };
});