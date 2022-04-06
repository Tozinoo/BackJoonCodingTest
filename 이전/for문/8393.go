package main

import "fmt"

func Main8393() {

	var input int
	fmt.Scanf("%d", &input)

	fmt.Print(add(input))

}

func add(inputNum int) int {
	if inputNum < 0 {
		return 0
	}
	if inputNum == 1 {
		return 1
	}

	return inputNum + add(inputNum-1)
}
