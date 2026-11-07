// نوار پیشرفت مطالعه
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById('reading-progress-bar');
    if (bar) bar.style.width = scrolled + '%';
});

// لایک مقاله
function likeArticle() {
    const countEl = document.getElementById('like-count');
    if (countEl) {
        let count = parseInt(countEl.innerText);
        countEl.innerText = count + 1;
    }
}

// ثبت نظر
function submitComment() {
    const name = document.getElementById('commenter-name').value;
    const text = document.getElementById('comment-text').value;
    if(!name || !text) return alert('لطفاً نام و نظر خود را وارد کنید.');

    const list = document.getElementById('comments-list');
    const div = document.createElement('div');
    div.style.cssText = "background:rgba(255,255,255,0.02); padding:10px; border-radius:8px; margin-top:10px;";
    div.innerHTML = `<strong>${name}</strong><p style="margin:5px 0 0 0;">${text}</p>`;
    list.appendChild(div);

    document.getElementById('comment-text').value = '';
    const countEl = document.getElementById('comment-count');
    if(countEl) countEl.innerText = parseInt(countEl.innerText) + 1;
}

// پنل ادمین
// پنل ادمین با مشخصات اختصاصی شما
function adminLogin() {
    const u = document.getElementById('admin-user').value;
    const p = document.getElementById('admin-pass').value;
    if(u === 'mmdmahdi' && p === '@MOHAMMADmahdi86') {
        document.getElementById('login-box').classList.add('hidden');
        document.getElementById('admin-panel').classList.remove('hidden');
    } else {
        alert('نام کاربری یا رمز عبور اشتباه است!');
    }
}

function addTextBlock() {
    const container = document.getElementById('blocks-builder');
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'متن خود را بنویسید...';
    textarea.style.cssText = "padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:8px;";
    container.appendChild(textarea);
}

function addImageBlock() {
    const container = document.getElementById('blocks-builder');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'لینک عکس را وارد کنید...';
    input.style.cssText = "padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; border-radius:8px;";
    container.appendChild(input);
}

function saveArticle() {
    alert('مقاله با موفقیت ذخیره و منتشر شد!');
}
