const input = document.querySelector('.palindrome-input');
const button = document.querySelector('.palindrome-btn');
const result = document.querySelector('.results-div');

const checkPalindrome = () => {    
    let originalWord = input.value;
    let word = input.value.replace(/[ \s~`!@ #$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLowerCase();
    let reversedWord = word.split('').reverse().join('');
    let palindrome = false;
    
    if(word == '') {
        alert('Please input a value');
        return;
    }
    
    if(word === reversedWord) {
        palindrome = true;
    }

    result.innerHTML = (palindrome)
    ? '<b>' + originalWord + '</b> is a palindrome.'
    : '<b>' + originalWord + '</b> is not a palindrome.';

    result.classList.remove('hidden');
    input.value = '';

    console.log(originalWord, word, reversedWord, palindrome);
}

button.addEventListener('click', checkPalindrome);