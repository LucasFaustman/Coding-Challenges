// 733. Flood Fill
// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

// Constraints:

// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    //recursive function

    //define og pixel 

    const original = image[sr][sc];

    function recurse  (image,sr,sc)  {
        //check boundaries
            if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 || image[sr][sc] !== original || image[sr][sc] === color) {
                return image;
            }
            //update pixel to the color
            image[sr][sc] = color;
            //recurse in 4 diff directions, up down, left right
            recurse(image,sr + 1,sc);
            recurse(image,sr - 1,sc);
            recurse(image,sr,sc + 1);
            recurse(image,sr,sc - 1);

            return image;
    }

    return recurse(image,sr,sc);
};


//4 Params here. First will be an image represents by an m x n integer grid. image[i][j] represents pixel value of image

//m === image.length
//n === image[i].length

//1 <= m, n <= 50

//also given 3 intrs. sr, sc, and color. always will be integers.

//return a modified image after performing a flood fill

//a flood fill, consider the starting pixed, plus any pixels 4-directionally to the starting point of pixel of the same color of starting pixel, plus any pixels connected 4 directionally to those pixels, and so on

//replace the color of all pixels that fall within those params^^ with color

//E: Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.