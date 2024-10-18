// variables y funciones 

// let interMiami: number  = 11;
// let fcDallas: number = 11;
// let messi: number = 1;
// let juegaMessi: boolean = true

// let palabras: string = ' me emocione al verlo a Messi'

// function jugar (equipo1: number, equipo2: number, juegaMessi: boolean){
//     let motivo: string = ''

//     if (juegaMessi){
//         equipo1 += messi
//         motivo = ' porque juega Messi'
//     }
//     if(equipo1 > equipo2){
//         console.log(`gana interMiami ${motivo} `)
//     }
//     if(equipo1 == equipo2){
//         console.log("Empate")
//     }
//     if (equipo1 < equipo2){
//         console.log("Gana el equipo 2")
// }
// }
// jugar (interMiami, fcDallas, juegaMessi)



//arrays 

// let arregloNumeros: number[] = [1, 2, 3, 4, 5, 6]

// let arregloTexto: string[]  = ['hola', 'adios', 'chau']

// arregloTexto[0].indexOf('hola')


 // OBJECTO y TYPE PERSONALIZADO

// type Programador = {
//     nombre: string,
//     tecnologia : string[],
//     tomaMate:  boolean | null
// }

// let programador1:  Programador = {
//     nombre: 'Juan',
//     tecnologia : ['Reat',  'Python', 'Java'],
//     tomaMate:  true,
// }
// let programador2:  Programador = {
//     nombre: 'Juan',
//     tecnologia : ['Reat',  'Css', 'Java'],
//     tomaMate:  null,
// }

// INTERFACES 

// interface Programador {
//     nombre:string,
//     tecnologia:string[],
//     tomaMate?:boolean | null
// }
// let dev1:Programador = {
//     nombre: 'Juan',
//     tecnologia : ['Reat',  'Python', 'Java'],
//     tomaMate:  true,
// }
// interface dev {
//     nombre: string,
//     apellido: string,
//     tecnologia : string[],
//     tomaMate: boolean | null,
// }
// let dev2:dev = {
//     nombre: 'Juan',
//     apellido: 'Perez',
//     tecnologia:  ['Reat', 'Python', 'Java'],
//     tomaMate: true,

// }

// function enviarCurriculum1(dev2: dev){
//     console.log(`Este curriclum es de ${dev2.nombre} ${dev2.apellido}`)
// }
// function enviarCurriculum2(programador: Programador){
//     console.log(`Este curriculom es de ${dev1.nombre} `)
// }

// enviarCurriculum1(dev2)
// enviarCurriculum2(dev1)


// 1) CLASES PROGRAMACION POO

// class Pelicula {
//     nombre?: string;
//     duracion?: number;
//     protagonistas?: string[];
//     actores?: string[];

//     proyectarEnCine(){
//         console.log(`la pelicula ${this.nombre} esta siendo proyectada, tiene una duracion de ${this.duracion} minutos `)
//     }
//     constructor(nombre: string, duracion: number,  protagonistas: string[], actores: string[]) {
//         this.nombre = nombre,
//         this.duracion = duracion,
//         this.protagonistas = protagonistas,
//         this.actores = actores
//     }
// }

// const pelicula1 = new Pelicula('stiven',  120, ['Juan', 'Pedro'], ['Juan', 'Pedro']);
// console.log(pelicula1);
// pelicula1.proyectarEnCine();
// const pelicula2 = new Pelicula('Dabinson',   90, ['Juan', 'Pedro'], ['Juan', 'Pedro']);
// console.log(pelicula2);
// pelicula2.proyectarEnCine()


// CLASES DE ENCAPSULAMIENTO Y GENERICOS 

// class Sorteo<T>{
//     private ticket?: T ;

//     constructor(
//         private nombre :  string
//     ){}
//     setTicket(ticket:T){
//         this.ticket = ticket
//     }
//     getTicket(ticket:T){
//         return this.ticket
//     }
//     public sortear(){
//         return `para ${this.nombre} el ticket es ${this.ticket}`
//     }
// }

// let sorteo = new Sorteo<number>('stiven felix');
// sorteo.setTicket(3883)
// console.log(sorteo.sortear());



