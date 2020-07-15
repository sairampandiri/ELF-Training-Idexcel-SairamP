function rps(sai, ram) {
    if (sai ===ram) {
        return "It's a draw";
    }
    if (sai === 'Rock') {
        if (ram === 'Paper') {
            return 'The winner is ram';
        }
    }
    if (sai === 'Paper') {
        if (ram === 'Scissors') {
            return 'The winner is ram';
        }
    }
    if (sai === 'Scissors') {
        if (ram === 'Rock') {
            return 'The winner is ram';
        }
    }
    return 'The winner is sai';
}
var res=rps('Rock','Papet')
console.log(res);
