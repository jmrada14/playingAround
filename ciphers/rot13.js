const rot13 = (string) => {
    return (string ? string : this).split('').map(function(_)
    {
        if (!_.match(/[A-Za-z]/)) return _;
        character = Math.floor(_.charCodeAt(0) / 97);
        code = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
        return String.fromCharCode(code + ((character == 0) ? 64 : 96));
    }).join('');
};

console.log((rot13("hello world")));
