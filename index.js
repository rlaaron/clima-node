require('colors');
const { inquirerMenu,
        pausa,
        leerinput, 
        } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() => {

    const busquedas = new Busquedas();
    let opt = "";
    do {
        //imprimir menu
        opt = await inquirerMenu();

        switch (opt) {
            case 1://Buscar ciudad
                const lugar = await leerinput('Ciudad: ');
                await busquedas.ciudad( lugar );
                //buscar los lugares

                //Seleccionar el lugar

                //clima

                //Mostrar resultado
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:');
                console.log('Lat:');
                console.log('Lng');
                console.log('Temperatura');
                console.log('Minima:');
                console.log('Maxima:');
            break;
        
            case 2:
                //Historial
                console.log('historial');
            break;
            
            case 0:
                //Historial
                console.log('Salir');
            break;
        }

        

        if( opt !== 0 ) await pausa();
    } while ( opt !== 0 );


}

main();