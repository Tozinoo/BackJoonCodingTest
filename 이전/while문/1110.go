package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()
	var N, result, cycle int
	fmt.Fscan(reader, &N)

	result = N
	for {
		var sum int
		cycle++
		if result/10 == 0 {
			sum = result //
		} else {
			sum = add(result)
		}
		result = div(result)*10 + sum
		if N == result {
			break
		}
	}
	fmt.Fprint(writer, cycle)

}

func div(num int) int {
	return num % 10
}
func add(num int) int {
	return (num/10 + num%10) % 10
}
