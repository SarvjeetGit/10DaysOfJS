/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var s_arr = s.split('');
        var rev_arr = s_arr.reverse();
        var nstr = rev_arr.join('');
        console.log(nstr);
    } catch {
        console.log('s.split is not a function');
        console.log(s);
    }
}
