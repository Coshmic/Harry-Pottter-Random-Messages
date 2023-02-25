const msgRandom = () => {
    //RANDOM NUMBER <10
    const numRandom = () => {
        return Math.floor(Math.random() * 10)
    };
    //PERSONAJES Y SUS DIALOGOS
    const charDialog = [
        {personaje: 'Harry Potter', dialogo: '“Nunca se irá del todo, no mientras haya quien le guarde lealtad.”'},
        {personaje: 'Dobby', dialogo: '“Dobby no mata, sólo mutila o hiere de gravedad.”'},
        {personaje: 'Hagrid', dialogo: '“Eres un mago, Harry.”'},
        {personaje: 'Albus Dumbledore', dialogo: '“Las palabras son, en mí no tan humilde opinión, nuestra más inagotable fuente de magia, capaces de infringir daño y de remediarlo.”'},
        {personaje: 'Severus Snape', dialogo: '“Siempre.”'},
        {personaje: 'Luna Lovegood', dialogo: '“Lo que perdemos al final siempre vuelve a nosotros... aunque a veces no del modo que esperamos.”'},
        {personaje: 'Hermione Granger', dialogo: '"Es leviósa. No leviosá"'},
        {personaje: 'Slughorn', dialogo: '"No hay luz sin oscuridad. Y yo siempre procuro que entre la luz"'},
        {personaje: 'Dolores Umbridge', dialogo: '"No se deben decir mentiras"'},
        {personaje: 'Lord Voldemort', dialogo: '“El niño que sobrevivió viene a morir.”'},
    ];
    //Hechizos
    const hechizos = ['Avada Kedavra!', 'Crucio!', 'Imperio!', 'Accio!', 'Alohomora!', 'Expecto Patronum!', 'Expelliarmus!', 'Petrificus Totalus!', 'Riddikulus!', 'Wingardium Leviosa!'];

    let indexNum = numRandom();
    let indexHechizo = numRandom();
    let char = charDialog[indexNum].personaje;
    let dial = charDialog[indexNum].dialogo;
    console.log(char);
    console.log(dial);
    return console.log(hechizos[indexHechizo]);
}

console.log(msgRandom());