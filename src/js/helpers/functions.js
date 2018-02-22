export default {

    methods: {

        contains(string, arr) {
            let matchCount = 0;
            for (let l = 0; l < arr.length; l++) {
                if (string.indexOf(arr[l]) > -1) {
                    matchCount++;
                }
            }

            return matchCount;
        },

    }
};