---
id: introduction_to_generics _go
title: Introduction To Generics In Go
tags: [partner, peer_to_peer, update]
category: [farming, cloud, foundation, aci, twin]
image: ./go_logo.png
image_caption: go logo
excerpt: Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum dicta a magnam.
authors: [Ahmed_Thabet]
created: 2021-08-11
---


## Create a new project


```
mkdir golanggenrics && cd golanggenerics
```

## Initialize the project

```
golanggenerics ~> go mod init codescalers/golanggenerics
go: creating new go.mod: module codescalers/golanggenerics

```

## Launch your editor 

open the project in your favorite IDE/editor



## The problem 
we will be addressing generics gently in go, describing what have been used in the go community and what became available since generics landed in golang


### printing a slice of ints

What we want to do now is writing a simple function that only prints a slice of integers 

let's create a `main.go` file
```go
package main

import "fmt"

func printInts(ints []int) {
	for _, v := range ints {
		fmt.Printf("value %v\n", ints[v])
	}
}

func main() {
	
	ints := []int{1, 2, 3, 4}
	printInts(ints)
}
```

run it with `go run main.go` and the output should be something like

```
value 1
value 2
value 3
value 4
```
Very cool, so now we managed to write a function that prints the items in an int slice. What if we wanted to do the same for a slice of floats? We can write another function `printFloats` as follows

```go
package main

import "fmt"

func printInts(ints []int) {
	for _, v := range ints {
		fmt.Printf("value %v\n", ints[v])
	}
}
func printFloats(floats []float32) {
	for _, v := range floats {
		fmt.Printf("value %v\n", v)
	}
}

func main() {
	fmt.Println("printInts")
	ints := []int{1, 2, 3, 4}
	printInts(ints)
	fmt.Println("printFloats")
	floats := []float32{1.4, 2.1, 3.6, 4.21}
	printFloats(floats)

}
```
``

the output 

```
printInts
value 1
value 2
value 3
value 4
printFloats
value 1.4
value 2.1
value 3.6
value 4.21
```

so now we can print slices of ints and slices of floats! we managed to do so by some code duplication, code still simple, and maintainable,.. etc


Is there another way we can make it work using just one function, instead of defining a function per type? Well.. we can move to interfaces and type assertions as follows

```go
func printAnything(aslice interface{}) {
	switch slice := aslice.(type) {
	case []int:
		for _, v := range slice {
			fmt.Printf("value: %v\n", v)
		}
	case []float32:
		for _, v := range slice {
			fmt.Printf("value: %v\n", v)
		}
	}
}
func main() {
	ints := []int{1, 2, 3, 4}
	floats:= []float32{4.11, 2.52, 3.29, 4.0}
	fmt.Println("printAnything: ints")
	printAnything(ints)
	fmt.Println("printAnything: floats")
	printAnything(floats)

}

```
while this function now accepts the empty interface, we have embedded the code from `printInts` and `printFloats` into it and handled each type case 


the output will be
```go
printAnything: ints
value: 1
value: 2
value: 3
value: 4
printAnything: floats
value: 4.11
value: 2.52
value: 3.29
value: 4

```

At least now the API seems to be smaller, just one function `printAnything` can replace both `printInts` and `printFloats`

Still one more problem though, we can pass other data types to `printAnything` function without providing the right implementation, at least when we had `printInts` or `printFloats` the user had an idea what is actually supported! Fine! let's add a panic to it.

```go
func printAnything(aslice interface{}) {
	switch slice := aslice.(type) {
	case []int:
		for _, v := range slice {
			fmt.Printf("value: %v\n", v)
		}
	case []float32:
		for _, v := range slice {
			fmt.Printf("value: %v\n", v)
		}
	default:
		panic("what??")
	}
}
```

One problem with our current code is we literally embedded the code of `printInts` and `printFloats`, we can do another improvment here by using reflection in golang

```go
func printAnything(aslice interface{}) {
	slice := reflect.ValueOf(aslice)
	if slice.Kind() != reflect.Slice {
		panic("what??")
	}
	for i := 0; i < slice.Len(); i++ {
		fmt.Printf("value %v \n", slice.Index(i).Interface())
	}
}
func main() {
	fmt.Println("printAnything: ints")
	printAnything([]int{1, 2, 3, 4})
	fmt.Println("printAnything: floats")
	printAnything([]float32{4.11, 2.52, 3.29, 4.0})
	fmt.Println("printAnything: string")
	printAnything("hello")
}

```

Here we removed the code duplication of the cases of `[]int` and `[]float` and now it even works for any slice e.g including strings and `float32` as well, but will  for any data type other than slices e.g `printAnything("hello")` will cause a panic.


Output

```text
printAnything: ints
value 1 
value 2 
value 3 
value 4 
printAnything: floats
value 4.11 
value 2.52 
value 3.29 
value 4 
panic: what??
```

Always remember you are sacrificing the typesafety when using the empty interface, and reflections always comes with an overhead.

There're other solutions including code generation, but it can get quite hairy 


```go
func printGeneric[T any](slice []T) {
	for _, v := range slice {
		fmt.Printf("value %v\n", v)
	}
}
```
Here we defined a function `printGeneric` that takes a slice of type `T`, T is a type, that needs to be defined or your go project needs to know about, and here we immediately defined it after the function name between the brackets `[T any]`

Hint:

try removing the brackets and see go complaining with `undeclared name T`. Another way is defining T separately with 
```go
type T any
func printGeneric(slice []T) {
	for _, v := range slice {
		fmt.Printf("value %v\n", v)
	}
}
```
However, for convenience we can define T immediately after the function name  to be `func printGeneric[T any](slice []T)`

update your `main.go` to be 
```go
package main

func main() {
	printGeneric([]int{1, 2, 3, 4})
	printGeneric([]float32{4.11, 2.52, 3.29, 4.0})
}
```
Now what happens if we decided to pass a string instead of the slice? (which was allowed in all of the previous versions)? the code won't compile


## Building a Box

Imagine that we want to create a new type representing a container that has just one value. Let's call it `Box`. With what we learned so far we can build customized types `IntBox`, `FloatBox`, .. etc

```go

type IntBox struct {
	obj int
}

  
func (b IntBox) GetObject() int {
	return b.obj
}

type FloatBox struct {
	obj float32
}

func (b FloatBox) GetObject() float32 {
	return b.obj
}
func main() {
	mybox5 := IntBox{obj: 5}
	fmt.Println(mybox5)
	fmt.Println(mybox5.GetObject())
	mybox3dot5 := FloatBox{obj: 3.5}
	fmt.Println(mybox3dot5)
	fmt.Println(mybox3dot5.GetObject())
}
```

Output
```
{5}
5
{3.5}
3.5
```

Still too much manual work that can be exhausting if you needed to support more types, we can go back to use the empty interface 
```go
package main

import "fmt"

type Box struct {
	obj interface{}
}

func (b Box) GetObject() interface{} {
	return b.obj
}

func main() {
	mybox5 := Box{obj: 5}
	fmt.Println(mybox5)
	fmt.Println(mybox5.GetObject())
	myboxHello := Box{obj: "hello"}
	fmt.Println(myboxHello)
	fmt.Println(myboxHello.GetObject())
}
```
Output 
```
{5}
5
{hello}
hello
```

Now our Box supports ints, floats and by luck also strings, that wasn't really intended. How can generics help us improving our code? and maybe adding some more constraints to make it work for certain types? e.g having NumberBox that can work for `int32`, `int64`, `float32`, `float64` only?

Let's do the GenericBox first and then do the constraints
```go

type GenericBox[T any] struct {
	obj T
}

func (gb GenericBox[T]) GetObject() T {
	return gb.obj
}

func main() {
	mygbox5 := GenericBox[int32]{obj: 5}
	fmt.Println(mygbox5)

	mygbox3dot2 := GenericBox[float32]{obj: 3.2}
	fmt.Println(mygbox3dot2)

	mygboxstring := GenericBox[string]{obj: "hello"}
	fmt.Println(mygboxstring)
}

```
It helps a lot to reason about `GenericBox` as a type awaiting an argument to construct a new type. So for instance in the case of `GenericBox[int32]{obj:5}` as if `GenericBox` was a function that generates a new type `GenericBoxInt32` that can have more parameters to initialize

Output
```
{5}
{3.2}
{hello}
```

Let's add the constraints for numbers box only `NumberBox`

```go
type NumberBox[T Number] struct {
	obj T
}
  
func (nb NumberBox[T]) GetObject() T {
	return gb.obj
}
```
but wait a second, where does that `Number` type come from?  `Number` is an interface that we can declare as follows

```go
type Number interface {
    int32 | int64 | float32 | float64
}
```

Our main.go looks like this now 

```go
package main
import "fmt"


type Number interface {
	int32 | int64 | float32 | float64
}

type NumberBox[T Number] struct {
	obj T
}

  

func (nb NumberBox[T]) GetObject() T {
	return gb.obj
}

func main() {

	nbox5 := NumberBox[int32]{obj: 5}
	fmt.Println(nbox5)
	
	nbox3dot2 := NumberBox[float32]{obj: 3.2}
	fmt.Println(nbox3dot2)

	// nboxstring := NumberBox[string]{obj: "hello"}
	// fmt.Println(nboxstring)

}
```
So now we have a generic code for a Box that works on int32, float32, int64, float64 only, and if you try to make it work against `string`, you should see an error like 
```
string does not implement Number
```


Resources:
- [generics tutorial](https://go.dev/doc/tutorial/generics)
- [generics proposal](https://go.googlesource.com/proposal/+/refs/heads/master/design/43651-type-parameters.md)
- [ardanlabs generics series](https://www.ardanlabs.com/blog/2020/07/generics-01-basic-syntax.html)

Written by: 
- Ahmed Thabet

Reviewer:
- Rawda Fawzy