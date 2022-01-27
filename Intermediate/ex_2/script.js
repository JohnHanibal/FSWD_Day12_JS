function avGrade (math, physics, english) {
    sum = math + physics + english;
    average = sum / 3;
    return (`Sum: ${sum}\nAverage: ${average}`)
}

console.log(avGrade(3,4,5));