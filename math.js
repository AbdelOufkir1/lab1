
    const math = {};

    math.add = (arr) => {

        let sum = 0;
        for (let i = 0; i < arr.length; i++ ){
            let num = parseInt(arr[i],10);
            if (arr[i] == num) {
                sum += num;
            }
            else {
                return null;
            }
        }
        return sum;
    }


    math.multiply = (arr) => {
        let product = 1;
        for (let i = 0; i < arr.length; i++ ){
            let num = parseInt(arr[i], 10);
            if (num == arr[i]) {
                 product *= num;
            }
            else {
                return null;
            }
        }
        return product;
    }

    module.exports = math;