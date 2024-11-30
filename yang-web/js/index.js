var s = skrollr.init();
document.body.id = "skrollr-body"


//首頁第一個主選單預設 focus
// window.addEventListener('DOMContentLoaded', function () {
//     removeFocusFromMenuItems(menuItems);
//     var firstMenuItem = document.querySelector('#cssmenu ul li:first-child a');
//     firstMenuItem.parentNode.classList.add('focus');
// });
//往下滑動至當前 div 時，主選單加上 focus 狀態樣式
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY + 100;  // 加上適當的偏移量，根據需要調整

    var menuItems = document.querySelectorAll('#cssmenu ul li a');

    menuItems.forEach(function (item) {
        var sectionId = item.getAttribute('href').substring(1);
        var section = document.getElementById(sectionId);

        // 檢查是否在該 section 內
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            removeFocusFromMenuItems(menuItems);
            item.parentNode.classList.add('focus');
        } else {
            item.parentNode.classList.remove('focus');
        }
    });
});

// 移除所有選單項目的焦點樣式
function removeFocusFromMenuItems(menuItems) {
    menuItems.forEach(function (item) {
        item.parentNode.classList.remove('focus');
    });
}



//錨點滑動

$(document).ready(function () {
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash; //抓取網頁#錨點
            console.log(hash);
            $("html,body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });
});




//錨點滑動 

$(document).ready(function () {
    // 初始化 skrollr
    var s = skrollr.init({
        smoothScrolling: true,
        smoothScrollingDuration: 3500,
        forceHeight: false,
        mobileDeceleration: 0.004,
    });

    // 在視窗滾動時刷新 skrollr
    $(window).on('scroll', function () {
        s.refresh();
    });

    // 處理錨點連結的點擊事件
    $("a").on("click", function (event) {
        console.log("Link clicked");
        if (this.hash !== "") {
            // 阻止預設的錨點跳轉行為
            event.preventDefault();

            // 獲取錨點目標的位置
            var hash = this.hash;
            var targetOffset = $(hash).offset().top;

            // 滑動至目標位置，並在動畫完成後刷新 skrollr
            $("html, body").animate(
                {
                    scrollTop: targetOffset
                },
                800,
                function () {
                    s.refresh();
                }
            );
        }
    });
});




//go to top
$(function () {
    $("#gotop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});

//手機板選單
$(document).ready(function () {
    $(".btn_menu-m").click(function () {
        $("#header-m").slideToggle(300);
    });
});

$(document).ready(function () {
    $("#btn-area-m li").click(function () {
        $("#header-m").css("display", "none");
    });
});



// 取得 .open_text 和 .open_text_en 元素
const openText = document.querySelector('.open_text');
const openTextEn = document.querySelector('.open_text_en');

// 監聽滑鼠移動事件
document.addEventListener('mousemove', function (event) {
    const x = event.clientX / window.innerWidth;  // 取得滑鼠在畫面寬度中的比例
    const y = event.clientY / window.innerHeight; // 取得滑鼠在畫面高度中的比例

    // 根據滑鼠的比例調整 .open_text 的位置
    openText.style.transform = `translate(${(x - 0.5) * 50}px, ${(y - 0.5) * 50}px)`;

    // 根據滑鼠的比例調整 .open_text_en 的位置
    openTextEn.style.transform = `translate(${(x - 0.5) * 30}px, ${(y - 0.5) * 30}px)`;  // 增加移動幅度
});



document.addEventListener("DOMContentLoaded", function() {
    const elementsToChange = document.querySelectorAll("#cssmenu > ul > li > a, #logo a");

    // 定義顏色變更的函數
    function changeColor(color) {
        elementsToChange.forEach(element => {
            element.style.color = color;
        });
    }

    // 建立 IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 當滾動到指定區域，選單和 Logo 變成深色
                changeColor("#1c1c1c");
            } else {
                // 回到原本的白色
                changeColor("#ffffff");
            }
        });
    });

    // 監聽這兩個區塊
    const sections = [document.querySelector("#tool_bg"), document.querySelector("#trait_bg")];

    // 觀察目標元素
    sections.forEach(section => observer.observe(section));
});
