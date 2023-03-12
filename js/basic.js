let backURL = "http://localhost:8888/developer/";
let frontURL = "http://localhost:5500/html/"; 
 //http://192.168.0.20 학원
 //http://192.168.219.100 집
 //http://192.168.0.13학원와이파이

//바꿔야함 맞춰서 다시

//--[회원] 로그인상태의 메뉴들 보여주기 함수 START--
    function showMenuAtMemberLogined() {
        $('nav>ul>li.lesson').show()
        $('nav>ul>li.studycafe').show()
        $('nav>ul>li.community').show();
        $('nav>ul>li.signup').hide();
        $('nav>ul>li.login').hide();
        $('nav>ul>li.logout').show();
        $('nav>ul>li.tutorAdd').show();
        $('nav>ul>li.myPage').show();
    }
//--[회원] 로그인상태의 메뉴들 보여주기 함수 END--

//--[호스트] 로그인상태의 메뉴들 보여주기 함수 START--
    function showMenuAtHostLogined() {
        $('nav>ul>li.logout').show();
        $('nav>ul>li.myPage').hide();
    }
//--[호스트] 로그인상태의 메뉴들 보여주기 함수 END--

//--로그아웃상태의 메뉴들 보여주기 함수 START--
    function showMenuAtLogouted() {
        $('nav>ul>li.lesson').show()
        $('nav>ul>li.studycafe').show()
        $('nav>ul>li.community').show();
        $('nav>ul>li.signup').show();
        $('nav>ul>li.login').show();
        $('nav>ul>li.logout').hide();
        $('nav>ul>li.tutorAdd').hide();
        $('nav>ul>li.myPage').hide();
    }
//--로그아웃상태의 메뉴들 보여주기 함수 END--

//--현재 로그인/로그아웃 상태를 요청하는 함수 START--
function userCheckLogined() {
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        url: backURL + 'users/checklogined',
        success: function (responseObj) {
            if (responseObj.status == 1) {
                showMenuAtHostLogined();
            } else {
                showMenuAtLogouted();
            }
        },
    });
}
//--현재 로그인상태인지 로그아웃상태인가를 요청하는 함수 END--

//--5초간격으로 로그인여부확인하기 함수 START--    
    function userCheckIntervalLogined() {
        userCheckLogined();
        window.setInterval(userCheckLogined, 5000);
    }
 //--5초간격으로 로그인여부확인하기 함수 END--


 $(()=>{
    //--메뉴가 클릭되었을 때 할 일 START--
    $('header>nav>ul>li').click((e) => {
        $('header>nav>ul>li').css('background-color', '#fff').css('color', '#000')

        $(e.target).css('background-color', '#2C2A29').css('color', '#fff')
        let menu = $(e.target).attr('class')
        switch (menu) {
            case 'lesson':
                $('section').load('./lesson.html')
                break;
            case 'studycafe':
                $('section').load('./studycafe.html')
                break;
            case 'community':
                $('section').load('./community.html')
                break;
            case 'signup':
                location.href = frontURL + 'signup/userCheckEmail.html'
                console.log( frontURL + 'users/login.html')
                break;   
            case 'login' :
                location.href = frontURL + 'users/login.html'
                console.log( frontURL + 'users/login.html')
                break;     
            case 'logout':
                alert("로그아웃클릭됨")
                $.ajax({
                    xhrFields: {
                        withCredentials: true
                    },
                    url: backURL + 'host/logout',
                    success: function(){
                        showMenuAtLogouted()
                        location.href = frontURL
                    }
                })
                break;    
            case 'tutorAdd' :
                $('section').load('./tutorAdd.html')
                break;         
            case 'myPage' :
                $('section').load('./myPage.html')
                break;         
        }
        return false
    })
    //--메뉴가 클릭되었을 때 할 일 END--

    //--로고가 클릭되었을 때 할 일 START--
    $('header>div.headerImg').click(() => {
        location.href = frontURL
    })
    //--로고가 클릭되었을 때 할 일 END--
})