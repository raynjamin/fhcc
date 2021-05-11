package main

import (
	"fmt"
	"math"
)

func main() {
	p := 0
	s := 1000

	for a := 0; a < s && p == 0; a++ {
		for b := 0; b < s && p == 0; b++ {
			if a > 0 && b > 0 {
				c := math.Hypot(float64(a), float64(b))

				if isPythagoreanTriple(c) && hasSum(a, b, int(c), s) {
					p = a*b*int(c)
				}
			}
		}
	}

	fmt.Printf("OUR PYTHAGOREAN PRODUCT OF SORROW: %d\n", p)
}

func isPythagoreanTriple(c float64) bool {
	return math.Mod(c, 1.0) == 0
}

func hasSum(a int, b int, c int, s int) bool {
	return a + b + c == s
}


