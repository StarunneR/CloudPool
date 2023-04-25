! function () {
    const Waline = require('@waline/vercel');
    module.exports = Waline({
        async avatarUrl(comment) {
            const reg = new RegExp('(\\d+)@qq\\.com$', 'i');
            const mail = comment.mail;
            if (reg.test(mail)) {
                const q = mail.replace(/@qq\.com/i, '').toLowerCase();
                return 'https://q1.qlogo.cn/headimg_dl?dst_uin=' + q + '&spec=4';
            }
        },
    });
}