'use strict';
const btn = document.getElementById('btn1');
const lightbtn = document.querySelector('.light');
btn.addEventListener('click', function () {
    btn.classList.toggle('btnad');
    lightbtn.classList.toggle('lighton');
});
