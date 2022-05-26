const active = true;

/* if(activo){
    const msg = `active`;
}else{
    const msg = `inactive`;
} */

// una mejor forma de hacerlo es con operador ternario
//const msg = (active) ? `active` : `inactive`;

// otra forma mas simplificada
const msg = (active) && `active`;