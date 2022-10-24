function maxLength(arr) {
    let maxLen = 0;
    arr = arr.filter(isUnique);
    const mem = {};
    maxLen = dfs(arr, "", 0, maxLen, mem);
    function dfs(arr, path, i, maxLen, mem) {
        if (mem[path]) return mem[path];
        let pathIsUnique = isUnique(path);
        if (pathIsUnique) {
            maxLen = Math.max(path.length, maxLen);
        }
        if (i === arr.length || !pathIsUnique) {
            mem[path] = maxLen;
            return maxLen;
        }
        for (let j = i; j < arr.length; j++) {
            maxLen = dfs(arr, path + arr[j], j + 1, maxLen, mem);
        }


        mem[path] = maxLen;
        return maxLen;
    }

    function isUnique(str) {
        const set = new Set(str);
        return set.size === str.length
    }
    return maxLen;
}