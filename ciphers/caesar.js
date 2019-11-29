const caesarCipher = (string, shift) => {
     return String.fromCharCode(
        ...string.split('').map(character => ((character.charCodeAt() - 97 + shift) % 26) + 97)
    );
};
console.log(caesarCipher("hello", 5));
