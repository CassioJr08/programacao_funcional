function range(...nums){
    let array = []
    if(nums.length == 1){
        for(let i = 1; i <= nums[0]; i++){
            array.push(i)
        }
        return array

    }else if(nums.length == 2 && nums[0] < nums[1]){
        let array = []
        for(let i = nums[0]; i <= nums[1]; i++){
            array.push(i)
        }
        return array

    }else if(nums.length == 3 && nums[0] < nums[1]){
        let array = []
        for(let i = nums[0]; i < nums[1]; i += nums[2]){
            array.push(i)
        }
        return array

    }else if(nums.length == 2 && nums[0] > nums[1]){
        let array = []
        for(let i = nums[0]; i >= nums[1]; i--){
            array.push(i)
        }

        return array

    }else if(nums.length == 3 && nums[0] > nums[1]){
        for(i = nums[0]; i > nums[1]; i -= nums[2]){
            array.push(i)
        }

        return array
    }
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))