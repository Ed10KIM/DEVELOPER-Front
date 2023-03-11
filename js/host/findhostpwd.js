$(() => {
   
    $('div.findHostPwd-find-content>div.input-email>button#email-submit').click(function () {

        let hostId = $('div.findHostPwd-find-content>div.input-email>input#hostId').val();
        let hostEmail = $('div.findHostPwd-find-content>div.input-email>input#hostEmail').val();

        console.log(hostId)
        console.log(hostEmail)

        let url = backURL + 'host/searchpwd'

        if (hostId == "" || hostEmail == "") {
            alert('정보를 입력해주세요')
        } else {

            $.ajax({
                xhrFields: {
                    withCredentials: true //크로스오리진을 허용!
                },
                url: url,
                method: 'post',
                data: {
                    email: hostEmail,
                    hostId: hostId
                },
                dataType: 'json',
                success: function (result) {
                    console.log(result)
                    if (result == true) {
                        alert('임시 비밀번호가 발송되었습니다. 메일을 확인해주세요.')
                        //window.location.reload()
                        //location.href = frontURL + 'index.html'
                    } else {
                        alert('잘못된 정보입니다. 올바른 ID와 Email을 입력해주세요.')
                    }
                },
                error: function (xhr) {
                    alert(xhr.status)
                }
            })
        }
    })
})
