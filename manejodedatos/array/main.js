const array1 = ["diego", "karen", "leonardo", "santy"];
const object1=[
{name: "leonardo",
edad: "31",
altura: "186",},
{
name: "santiago",
edad: "21",
altura: "184",},
{
name: "samy",
edad: "1",
altura: "60"
}]
    
// metodo map
const respuesta = array1.map((name)=> name.slice(0,3));// devuelve un array con las 3 primeras letras del nombre
console.log(respuesta);
const respuesta2 = object1.map((index)=>{ return index.altura});// devuelve  un array con las alturas
console.log(respuesta2.sort((a,b)=>a-b))

// metodo filter
const resp3 = array1.filter((len)=> len.length ===5) //devuelve array con los que tengan longitud igual a 5
console.log(resp3)
const resp4 = object1.filter((index)=>{ return index.altura >= 100}); //devuelve un objeto con la condicion que su altura sea mayor que 100
console.log(resp4.sort((a,b)=>a-b))

// metodo foreach
array1.forEach((index => console.log(index)))// delvuelve uno a uno los elementos correspondientes 
object1.forEach((index)=>console.log(index.name))// devuelve uno a uno los elementos nombre del objeto

// metodo reduce
const resp5 = array1.reduce((acum, a)=> acum + a);// devulve un solo elemento concatenado
console.log(resp5)
const resp6 = object1.map((index)=>{ return index.altura}).reduce((acum, a)=> Number(acum) + Number(a))// la suma total de las alturas de los objetos
console.log(resp6)



class myArray{
    constructor(){
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.data
    }
    pop(){
      const Item = this.data[this.length -1]
      delete this.data[this.length -1]
      this.length--
      return Item
    }
    shift(){
        const Item = this.data[0]
        delete this.data[0]
        this.length--
        return Item
    }
    unshift(item){
        let nuevoArray = {}
       for (let i in this.data) {
         nuevoArray[0] = item
         nuevoArray[1+ +i]= this.data[i]
       }
       this.length++
       return this.data = nuevoArray
    }
}
const array = new myArray()



