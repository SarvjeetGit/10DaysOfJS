function getMaxLessThanK(n, k) {
    let ma = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if ((i & j) > ma && (i & j) < k) ma = i & j;
        }
    }
    return ma;
}
