console.log("Merhaba kodlama.io")

//JS type safe degildir.
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}
console.log(dolarDun)


const euroDun = 11.2

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i=0; i<konutKredileri.length; i++) {
    console.log("<li>" +konutKredileri[i]+"</li>")
    
}
console.log("</ul>")

{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)

//var, let, const
let sayi1 = 10
sayi1 = "giity"
let student = {id:1 , name:"Yigit"}

console.log(student)

function save(puan=10, ogrenci) {
    console.log(ogrenci.name + ":" + puan)
}
save(undefined, student);

let students = ["Engin Demiroğ" , "Yigit Yalcin" , "Halit Kalaycı" , "Büşra "]

console.log(students)

let students2 = [student, {id: 2 ,name:"Halit"}, "Ankara", {city:"İstanbul"}]

console.log(students2)

//REST
//C# karşılığı params
//Java karşılığı varArgs
let showProducts = function name(id,...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10,"Elma","Armut","Karpuz")

//SPREAD-Ayrıştırmak
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D",..."EFG", "H")

//DESTRUCTURING !!! - bir obje veya bir array icinden her bir elemanin alinip bir degisken icine kaydedilmesi.

let populations = [10000, 20000, 30000, [40000,10000]]
let [small, medium, high,[veryHigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)    
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)








