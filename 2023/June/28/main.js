// 832. Flipping an Image

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// Constraints:

// n == image.length
// n == image[i].length
// 1 <= n <= 20
// images[i][j] is either 0 or 1.


/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    //loop through image normally

    for (let i= 0; i < image.length; i++) {
        //with 2 pointers, swap first and last value of image[i]
        let right = image[i].length - 1;
        let left = 0;
        //while loop
        while (left < right) {
            [image[i][left], image[i][right]] = [image[i][right], image[i][left]]
            left++
            right--
            }
        }
    //second loop that inverts the image
    for (let row in image) {
        for (let col in image[row]) {
            if (image[row][col] === 1) {
                image[row][col] = 0;
            } else {
                image[row][col] = 1;
            }
        }
    }
    return image
    
};

//WIll be a two dimensial array. array will always have a valid length of a atleast one. image[i][j] will always be 0 or 1

//Return the 2 dimensional array, image, flipped horozontally and inverted

//to flip an image horozontally, each row of image is reversed

//to invert image, each 0 is replaced with 1 and vice versa

//Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]