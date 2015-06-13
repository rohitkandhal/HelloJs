 // Longest common subsequence problem

window.dp = window.dp || {};

(function(ns) {
    
    ns.lcs = lcs;
    
    
    function lcs(str1, str2) {
        // Given two strings, return their longest common subsequence
        var result;
        
        var subProblemMatrix = generateSubproblemMatrix(str1, str2);
        var result = getLCS(subProblemMatrix, str1);
        return result;
    }
    
    function generateSubproblemMatrix(str1, str2) {
        var arr1, arr2, len1, len2, i, j, mat;
        arr1 = str1.split('');
        arr2 = str2.split('');

        // Added 1 for base cases when string is empty
        len1 = arr1.length + 1;
        len2 = arr2.length + 1;
        
        mat = Array.matrix(len1, len2); // Solution matrix

        // If one string is of length 0 then LCS is ''
        for (i = 0; i < len1; i++) {
            mat[i][0] = 0;
        }
        for (j = 0; j < len2; j++) {
            mat[0][j] = 0;
        }

        // Build solution using dynamic programming
        for (i = 1; i < len1; i++) {
            for (j = 1; j < len2; j++) {
                if (arr1[i - 1] === arr2[j - 1]) {
                    mat[i][j] = mat[i - 1][j - 1] + 1;
                } 
                else if (mat[i - 1][j] >= mat[i][j - 1]) {
                    mat[i][j] = mat[i - 1][j];
                } 
                else {
                    mat[i][j] = mat[i][j - 1];
                }
            }
        }
        
        return mat;
    }
    
    function getLCS(mat, str1) {
        // Given a subproblem solution matrix, generates LCS
        var lcs = [];
        var arr1 = str1.split('');
        
        var callBack = function(charIndex) {
            // Add character to final LCS. as we're running from end to start use unshift
            lcs.unshift(str1[charIndex]);
        }
        
        getLCSInternal(mat, mat.length - 1, mat[0].length - 1, callBack);
        
        return lcs.join('');
    }
    
    function getLCSInternal(mat, row, col, callBack) {
        
        if (row === 0 || col === 0) {
            return;
        }
        // See page 396
        if (mat[row][col] === mat[row - 1][col - 1] + 1) {

            callBack(row-1);  // Send index of common character in string1
            // Sending row-1 because actual string starts at index 1 in matrix
            getLCSInternal(mat, row - 1, col - 1, callBack);
        } 
        else if (mat[row - 1][col] >= mat[row][col - 1]) {
            getLCSInternal(mat, row - 1, col, callBack);
        } 
        else {
            getLCSInternal(mat, row, col - 1, callBack);
        }
    }
    
    Array.matrix = function(row, col) {
        // Returns a two dimensional array
        var i, j, mat = [];
        
        for (i = 0; i < row; i++) {
            mat[i] = [];
            
            for (j = 0; j < col; j++) {
                mat[i][j] = undefined;
            }
        }
        return mat;
    };

}(window.dp));


var testStr1 = 'ABCBDAB';
var testStr2 = 'BDCABA'


var testStr3 = 'ROHIT';
var testStr4 = 'jlkjlkRsafdasdfOasdfasdfIasfasdfasfdsT';    // LCS: "ROIT"

window.dp.lcs(testStr1, testStr2);
