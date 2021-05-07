package main

import "fmt"

func main() {
	dividend := 600851475143
	divisor := 2

	largestPrime := largestPrime(dividend, divisor)

	fmt.Printf("LARGEST PRIME FACTOR OF %d IS: %d\n", dividend, largestPrime)
}

func largestPrime(dividend int, divisor int) int {
	if dividend == divisor {
		return dividend
	} else if dividend%divisor == 0 {
		return largestPrime(dividend/divisor, divisor)
	} else {
		return largestPrime(dividend, divisor + 1)
	}
}
