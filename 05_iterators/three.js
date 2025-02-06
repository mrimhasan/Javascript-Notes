//for each loop on object array

const my_object_array =[
    {
        language_name : "javascript",
        file_name : "js"
    },

    {
        language_name : "java",
        file_name : "java"
    },

    {
        language_name : "python",
        file_name : "py"
    }
]

my_object_array.forEach(element => {
    // console.log(element.language_name)
    // console.log(element.file_name)
    console.log(setInterval(element,1000))
})

// for (const val of my_object_array) {
//     console.log(val.language_name)
// }

// for (const key in my_object_array) {
//     console.log(my_object_array[key].file_name)
// }
