package main

import "fmt"

func Main10950() {
	var A, B int
	var input int
	var result []int

	fmt.Scanf("%d %c", &input)

	for i := 0; i < input; i++ {
		fmt.Scanf("%d %d %c", &A, &B)
		result = append(result, A+B)
	}
	for i := 0; i < len(result); i++ {
		fmt.Println(result[i])
	}

}
