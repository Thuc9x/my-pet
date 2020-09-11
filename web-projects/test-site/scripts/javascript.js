document.querySelector('html').style.backgroundColor = 'yellow';

const contacts = ['Cho:1', 'Meo:2', 'Chim:3'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
    //   var result = str.link("file:///Users/admin/Desktop/web-projects/test-site/dog.html");
    //   document.getElementById("demo").innerHTML = result;
      break;
    } else {
        $.mobile.changePage("file:///Users/admin/Desktop/web-projects/test-site/dog.html");
        //var result = str.link("file:///Users/admin/Desktop/web-projects/test-site/dog.html");
        //document.getElementById("demo").innerHTML = result;
      para.textContent = 'Kết quả tìm kiếm sai';
    }
  }
});

const form = document.querySelector('form');
const name = document.getElementById('text');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const test = document.querySelector('p');

form.onsubmit = function(e) {
    if (fname.value === '' || lname.value === '') {
      e.preventDefault();
      para.textContent = 'You need to fill in both names!';
    }
  }