package main

import "fmt"

func main() {
	sum := 0
	for i := 1; i < 1000; i++ {
		if isMultipleOfThreeOrFive(i) {
			sum += i
		}
	}

	fmt.Printf("THE SUM IS: %d\n", sum)
}

func isMultipleOfThreeOrFive(number int) bool {
	return number%3 == 0 || number%5 == 0
}
