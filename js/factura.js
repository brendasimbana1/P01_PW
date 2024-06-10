let productos=[
    {nombre:'Aretes', precio:5.5, cantidad:15},
    {nombre:'Collar', precio:2.5, cantidad:10},
    {nombre:'Anillos', precio:2.5, cantidad:5}
];

var totalF = 0;

for(let i=0; i<productos.length;i++)
{
    console.log(productos[i]);
    var p = productos[i];
    var total= p.precio * p.cantidad;
    totalF +=total;

    var el=document.createElement('p');
    el.textContent= p.nombre + ' $'+total;
    document.body.appendChild(el);
}

var tel=document.createElement('p');
    tel.textContent= 'Total: $'+ totalF;
    document.body.appendChild(tel);