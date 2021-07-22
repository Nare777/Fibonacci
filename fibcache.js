function F(n, cache = []) {

    if (n <= 1){
        return n;
    }
    if (cache[n]) {
        return cache[n];
    }
    return cache[n] = F(n - 1, cache) + F(n - 2, cache);
}
