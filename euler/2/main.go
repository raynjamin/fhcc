package main

import "fmt"

func main() {
	sum := 0
	i := 0
	for {
		i++
		val := fibonacci(i)
		if val >= 4000000 {
			break
		} else if val%2 == 0 {
			sum += val
		}
	}

	fmt.Printf("SUM IS THIS THING: %d\n", sum)
}

func fibonacci(n int) int {
	if n == 1 {
		return 1
	} else if n == 2 {
		return 2
	} else {
		return fibonacci(n-1) + fibonacci(n-2)
	}
}
