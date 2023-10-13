function range(...nums){
    let array = []
    if(nums.length == 1){
        for(let i = 1; i < nums[0]; i++){
            array.push(i)
        }
        
        array.push(nums[0])
        console.log(array)

    }else if(nums.length == 2 && nums[0] < nums[1]){
        let array = []
        for(let i = nums[0]; i < nums[1]; i++){
            array.push(i)
        }
        array.push(nums[1])
        console.log(array)

    }else if(nums.length == 3 && nums[0] < nums[1]){
        let array = []
        for(let i = nums[0]; i < nums[1]; i += nums[2]){
            array.push(i)
        }
        console.log(array)

    }else if(nums.length == 2 && nums[0] > nums[1]){
        let array = []
        for(let i = nums[0]; i >= nums[1]; i--){
            array.push(i)
        }

        console.log(array)

    }else if(nums.length == 3 && nums[0] > nums[1]){
        for(i = nums[0]; i > nums[1]; i -= nums[2]){
            array.push(i)
        }

        console.log(array)
    }
}

range(5)
range(6, 11)
range(10, 19, 2)
range(6, 2)
range(8, -3, 4)