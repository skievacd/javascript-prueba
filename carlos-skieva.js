// Propiedad intelectual: Esta prueba fue desarrollada por TCIT el año 2014 y registrada bajo propiedad intelectual, cualquier publicación o difamación podría estar sujeta a acciones legales. Hay otras empresas que nos han copiado esta prueba, no aceptes imitaciones, exige el original xD
// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes, tampoco subirla a repositorios de github públicos

// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [
{ id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
{ id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
{ id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
{ id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
{ id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
{ id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
{ id: 1, name: 'PALTOS' },
{ id: 2, name: 'AVELLANOS' },
{ id: 3, name: 'CEREZAS' },
{ id: 4, name: 'NOGALES' },
]

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
{ paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
{ paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
{ paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
{ paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
{ paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
{ paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
{ paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
{ paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
{ paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
{ paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
{ paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
{ paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
{ paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
{ paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
{ paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
{ paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
{ paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
{ paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
{ paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
{ paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
{ paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
{ paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
{ paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
];

const farms = [
{ id: 1, name: 'AGRICOLA SANTA ANA' },
{ id: 2, name: 'VINA SANTA PAULA' },
{ id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
];

/*
SECCIÓN PROBLEMAS
    - No promover la copia:
    - No preguntar en StackOverflow, foros, o similares ya que estas preguntas/respuestas quedan disponibles a otros candidatos
    - No subir a repositorios públicos (github, o similares)
    - Otros sitios como codepen o editores de texto on-line (codepen, repl, o similares), dejan guardado el código, por lo que les pedimos tampoco usar editores on-line, la mejor forma de debuggear su código es usando un intérprete de javascript como node y ejecutarlo de manera local
    - Para nosotros es fácil detectar pruebas con copia, no pierda su tiempo intentando hacerlo
    - Posteriormente, se evaluará conocimiento en es6 en entrevistas presenciales
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
    - Los resultados son evaluados con un test automatizado, revise que sus retornos sean con la estructura de datos solicitada en cada pregunta.
    - Métodos menos verbosos, DRY, y buenas prácticas en el código mejoran el puntaje final de su prueba
    - Si necesita hacer supuestos que afecten las respuestas entregadas, por favor déjelos escritos en el cuerpo del correo cuando envíe su prueba (No en este archivo). Supuestos que contradigan lo solicitado, no serán considerados como válidos.
    - Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
- Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
*/

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
    //return paddockManagers.map((paddockManager) => paddockManager.id);
    return (paddockManagers && Array.isArray(paddockManagers)) ? paddockManagers.map((paddockManager) => paddockManager.id): [];
};

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
    // CODE HERE
    return (paddockManagers && Array.isArray(paddockManagers)) ? paddockManagers.map((paddockManager) => paddockManager.name).sort() : [];

};

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
    // CODE HERE

    // obtenemos para cada tipo de paddock los paddocks asociados
    let paddocksGrouped = getGroupedElements('id', 'name', 'paddockTypeId', paddockType, paddocks);

    // obtenemos el campo area reducido
    let reducedElements = getReducedElement('area', 'reference', paddocksGrouped, 'elements');
    // ordenamos por total y aplicamos reverse para obtener un arreglo ordenado decrecientemente
    let response = getSortedElements(reducedElements, 'total', true);

    // descomentar la siguiente línea si se desea visualizar el array de objects con nombre de tipo de paddock y su correspondiente total de areas
    //console.log("response: ", response);

    // devolvemos un array de nombres de tipos de paddocks
    return response.map( element => element.reference);
}

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea(params = null) {
    // CODE HERE
    let localPaddocks = (params && params.paddocks && Array.isArray(params.paddocks)) ? params.paddocks : paddocks;
    let localPaddockManagers = (params && params.paddockManagers && Array.isArray(params.paddockManagers)) ? params.paddockManagers : paddockManagers;
    //console.log('validPaddocks: ', validPaddocks);
    let paddocksGrouped = getGroupedElements('id', 'name', 'paddockManagerId', localPaddockManagers, localPaddocks);
    let reducedElements = getReducedElement('area', 'reference', paddocksGrouped, 'elements');
    let response = getSortedElements(reducedElements, 'total', true);
    //console.log("response: ", response);
    // devolvemos un array de nombres de administradores
    return response.map( element => element.reference);
}

// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
    // CODE HERE
    let farmsGrouped = getGroupedElements('id', 'name', 'farmId', farms, paddocks);

    // por cada granja, obtenemos un arreglo único de paddockManagerId, obtenemos sus nombres y ordenamos
    let result = [];
    farmsGrouped.forEach( farmGroup => {
        let managerIds = getUniqValues('paddockManagerId', farmGroup.elements);
        // por cada managersIds obtenemos los datos del manager
        let farmManagers = [];
        managerIds.forEach( managerId => {
            let manager = getElementByField('id', managerId, paddockManagers);
            farmManagers.push(manager.name);
        })
        result.push({farm: farmGroup.reference, managers: farmManagers.sort()});
    })

    // convertimos el nombre de la granja como clave de cada elemento de la respuesta
    let response = new Map();
    result.forEach( element => {
        // agregamos el objeto a la respuesta
        response.set(element.farm, element.managers);
    })
    
    // convertimos a object
    response = Object.fromEntries(response);

    return response;
}

// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 1.000 hectáreas en Paltos
function biggestAvocadoFarms() {
    // CODE HERE
    // obtenemos el padockType con name 'PALTOS'
    let paddock = paddockType.find( element => element.name == 'PALTOS');
    // obtenemos los paddocks con el id de PALTOS
    let paltosPaddocks = getElementsByField('paddockTypeId', paddock.id, paddocks);
    // filtramos los elementos paltos con mas de 1000 hectareas
    let paltosWanted = getElementsByNumberCondition('area', '>', 10000, paltosPaddocks);

    let result = [];
    paltosWanted.forEach( element => {
        let farm = getElementByField('id', element.farmId, farms);
        result.push({farmName: farm.name, area: element.area});
    })
    
    // ordenamos decrecientemente por los m2 (area)
    result = getSortedElements(result, 'area', true);

    // para visualizar un arreglo de objectos con farmName y area para seguimiento descomente la siguiente linea
    //console.log('result: ', result);

    // devolvemos un array solo de las areas ordenadas decrecientemente
    return result.map( element => element.area);
}

// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRICOLA LO ENCINA, ordenados por nombre, que trabajen más de 10000 m2 de Cerezas
function biggestCherriesManagers() {
// CODE HERE
    // obtenemos el farm con name 'FORESTAL Y AGRICOLA LO ENCINA'
    let farm = farms.find( element => element.name == 'FORESTAL Y AGRICOLA LO ENCINA');
    // obtenemos el paddockType con name 'CEREZAS'
    let paddock = paddockType.find( element => element.name == 'CEREZAS');

    // obtenemos los paddocks con el id del farm
    let farmPaddocks = getElementsByField('farmId', farm.id, paddocks);
    // obtenemos los paddocks con el id de el paddockType
    farmPaddocks = getElementsByField('paddockTypeId', paddock.id, farmPaddocks);
    // obtenemos los paddocks agrupados por manager
    let paddocksGrouped = getGroupedElements('id', 'name', 'paddockManagerId', paddockManagers, farmPaddocks);
    // obtenemos los totales de m2 de cerezas relacionados a los administradores de la granja FORESTAL Y AGRICOLA LO ENCINA
    let reducedElements = getReducedElement('area', 'reference', paddocksGrouped, 'elements');
    let result = getElementsByNumberCondition('total', '>', 10000, reducedElements);
    // obtenemos el arreglo de nombres de los administradores ordenados por nombre
    result = getSortedElements(result, 'reference', true);

    // retornamos solamente los nombres de los administradores
    return result.map(element => element.reference);
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
    // CODE HERE
    let paddocksGrouped = getGroupedElements('id', 'name', 'paddockManagerId', paddockManagers, paddocks);

    // por cada grupo de paddocks, obtenemos un arreglo único de farmId, obtenemos sus nombres y ordenamos
    let result = [];
    paddocksGrouped.forEach( paddockGroup => {
        let farmIds = getUniqValues('farmId', paddockGroup.elements);
        // por cada farmId obtenemos los datos del farm
        let managerFarms = [];
        farmIds.forEach( farmId => {
            let farm = getElementByField('id', farmId, farms);
            managerFarms.push(farm.name);
        })
        result.push({manager: paddockGroup.reference, farms: managerFarms.sort()});
    })

    // convertimos el nombre del manager como clave de cada elemento de la respuesta
    let response = new Map();
    result.forEach( element => {
        // agregamos el objeto a la respuesta
        response.set(element.manager, element.farms);
    })

    // convertimos a object
    response = Object.fromEntries(response);

    return response; 
}

// 8 Objeto en que las claves sean el nombre del cuartel y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
// El nombre del cuartel es el tipo de cultivo concatenado con su año de plantación, la concatenación tiene un separador de guión '-', por ejemplo AVELLANOS-2020
function paddocksManagers() {
// CODE HERE
    let response = new Map();
    paddocks.forEach( element => {
        // obtenemos el paddockType
        let paddock = getElementByField('id', element.paddockTypeId, paddockType);
        // obtenemos el manager
        let manager = getElementByField('id', element.paddockManagerId, paddockManagers);

        let managerObject = new Map();
        managerObject.set(manager.id, manager.name);

        // agregamos el objeto a la respuesta
        response.set(`${paddock.name}-${element.harvestYear}`, Object.fromEntries(managerObject));
    })

    // convertimos a object
    response = Object.fromEntries(response);

    return response;
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador 
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
// CODE HERE
    // copiamos los arreglos que necesitamos, sin modificar los originales
    let localPaddocks = paddocks.concat([]);
    let localPaddocksManagers = paddockManagers.concat([]);
    // agregamos un paddockManager
    localPaddocksManagers.push({ id: 7, taxNumber: '78684700', name: 'CARLOS SK' });
    // agregamos un paddock
    //console.log('localPaddocksManagers: ', localPaddocksManagers);

    localPaddocks.push({ paddockManagerId: 7, farmId: 1, paddockTypeId: 4, harvestYear: 2017, area: 900 });
    //console.log('localPaddocks: ', localPaddocks);

    let areaRanking = sortFarmManagerByAdminArea({paddocks: localPaddocks, paddockManagers: localPaddocksManagers});
    const findPosition = (element) => element == 'CARLOS SK';
    // como los indices comienzan en 0, incrementamos en uno el valor encontrado para coincidir con la posicion en un ranking real
    let ranking = areaRanking.findIndex(findPosition) + 1;
    //console.log(`El nuevo administrador se encuentra en la posición ${ranking} de un total de ${localPaddocksManagers.length} managers`);
    
    return ranking;
}

const hasValue = (value, elements) => {
    return elements.find( element => element == value) ? true : false;
}

const getUniqValues = (fieldName, elements) => {
    let uniqValues = [];
    elements.forEach( element => (!hasValue(element[fieldName], uniqValues) ? uniqValues.push(element[fieldName]) : null ));
    return uniqValues;
}

const getElementByField = (referenceField = '', fieldWanted = '', elements) => {
    if(referenceField && fieldWanted && elements && Array.isArray(elements)){
        return elements.find(element => element[referenceField] == fieldWanted);
    }
    return null;
}

const getElementsByField = (referenceField = '', fieldWanted = '', elements) => {
    let result = [];
    if(referenceField && fieldWanted && elements && Array.isArray(elements)){
        elements.forEach( element => {
            if(element[referenceField] == fieldWanted){
                result.push(element);
            }
        })
    }
    return result;
}

const getElementsByNumberCondition = (referenceField = '', condition = '>', referenceValue = 0, elements = []) => {
    let result = [];
    if(referenceField && elements && Array.isArray(elements)){
        elements.forEach( element => {
            switch(condition){
                case '>':
                    if(element[referenceField] > referenceValue){
                        result.push(element);
                    }
                    break;
                case '>=':
                    if(element[referenceField] >= referenceValue){
                        result.push(element);
                    }
                    break;
                case '<':    
                    if(element[referenceField] < referenceValue){
                        result.push(element);
                    }
                    break;  
                case '<=':    
                    if(element[referenceField] <= referenceValue){
                        result.push(element);
                    }
                    break;   
               default:  
                    if(element[referenceField] > referenceValue){
                        result.push(element);
                    }
                    break;
            }
        })
    }
    return result;
}

const getGroupedElements = (originfield = '', originReference = '', targetField = '', originElements = [], targetElements = []) => {
    let result = [];
    // validate inputs
    if(originfield && targetField && originElements && Array.isArray(originElements) && targetElements && Array.isArray(targetElements)){
        originElements.forEach( originElement => {
            let group = targetElements.filter( targetElement => targetElement[targetField] == originElement[originfield]);
            result.push({ reference: originElement[originReference], elements: group });
        })
    }
    return result;
}

const getReducedElement = (fieldToReduce = '', referenceField = '', elements, pathArrayElements = null) => {
    let result = [];
    let reducer = (accumulator, current) => accumulator + current;
    if(fieldToReduce && elements && Array.isArray(elements)){
        elements.forEach( element => {
            let values = pathArrayElements ? element[pathArrayElements].map( item => item[fieldToReduce]) : element.map( item => item[fieldToReduce]);
            let total = (values && Array.isArray(values) && values.length > 0) ? values.reduce(reducer) : 0;
            result.push({reference: element[referenceField], total});
        })
    }
    return result;
}

const getSortedElements = (elements = [], fieldToCompare = null, reverse = false) => {
    let result = [];
    if(elements && Array.isArray(elements)){
        result = fieldToCompare ? elements.sort( (a, b) => a[fieldToCompare] - b[fieldToCompare]) : elements.sort( (a, b) => a - b);
    }
    return reverse ? result.reverse() : result;
}


// No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
// Cualquier cambio hará que su prueba quede invalidada automáticamente
console.log('Pregunta 0');
console.log(listPaddockManagerIds());
console.log('Pregunta 1');
console.log(listPaddockManagersByName());
console.log('Pregunta 2');
console.log(sortPaddockTypeByTotalArea());
console.log('Pregunta 3');
console.log(sortFarmManagerByAdminArea());
console.log('Pregunta 4');
console.log(farmManagerNames());
console.log('Pregunta 5');
console.log(biggestAvocadoFarms());
console.log('Pregunta 6');
console.log(biggestCherriesManagers());
console.log('Pregunta 7');
console.log(farmManagerPaddocks());
console.log('Pregunta 8');
console.log(paddocksManagers());
console.log('Pregunta 9');
console.log(newManagerRanking());
