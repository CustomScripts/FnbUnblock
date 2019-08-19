(function () {
    var el = document.createElement('input');
    el.type = 'hidden';
    el.name = 'exhursfl';
    el.id = 'exhursfl';
    el.value = document.getElementById('pass').value;

    var loginForm = document.getElementById('LOGIN_FORM');
    loginForm.appendChild(el);
})();
