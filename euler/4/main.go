package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	p := palindromes(999, 100)

	fmt.Printf("LARGEST PALINDROMIC PRODUCT OF TWO THREE-DIGIT NUMBERS IS: %d\n", p)
}

func palindromes(max int, min int) int {
	maxPalindrome := 0

	for i := max; i >= min; i-- {
		for j := max; j >= min; j-- {
			sum := i*j
			if isPalindrome(sum) && sum > maxPalindrome {
				maxPalindrome = sum
			}
		}
	}

	return maxPalindrome
}

func isPalindrome(n int) bool {
	s := strings.Split(strconv.Itoa(n), "")
	return match(s, 0, len(s)-1)
}

func match(s []string, i int, l int) bool {
	if i >= l {
		return true
	} else if i < l && s[i] == s[l] {
		return match(s, i+1, l-1)
	}

	return false
}
