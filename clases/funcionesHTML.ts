namespace Vehiculos
{
    var rowGlobal:HTMLTableRowElement;
    var tablaGlobal;
    window.addEventListener("load",function(){
        document.getElementById("btnAlta")!.addEventListener("click",mostrarForm); 
        document.getElementById("btnCerrar")!.addEventListener("click",hideForm); 
        document.getElementById("btnAgregar")!.addEventListener("click",guardar);
        document.getElementById("btnEliminar")!.addEventListener("click",eliminar);
        document.getElementById("tipoVehiculo")!.addEventListener("change",cambioTipo);
        document.getElementById("filtroVehiculo")!.addEventListener("change",filtradoTipo);
        document.getElementById("idOcultar")!.addEventListener("change",filtradoColumna);
    })

    window.addEventListener("load",hideForm);

    var listaVehiculos:Array<Vehiculo> = new Array<Vehiculo>();

    export function hideForm()
    {
        document.getElementById("contAgregar")!.hidden = true;
        document.getElementById("infoCamioneta")!.hidden = true;
    }

    export function mostrarForm()
    {
        document.getElementById("contAgregar")!.hidden = false;
    }

    export function cambioTipo()
    {
        if(document.getElementById("tipoVehiculo")!.value == "1")
        {
           document.getElementById("infoCamioneta")!.hidden = true;
        }else if(document.getElementById("tipoVehiculo")!.value == "2")
        {
            document.getElementById("infoCamioneta")!.hidden = false;
        }
    }

    export function guardar()
    {
        var tCuerpo = document.getElementById("tCuerpo");
        var marca:string= document.getElementById("marca")!.value;
        var modelo:string= document.getElementById("modelo")!.value;
        var precio:number = document.getElementById("precio")!.value;
        var cuatroPorCuatro:boolean = document.getElementById("cuatroXcuatro")!.checked;
        var tempId:number;
        var idRow:number = 0;
        var control:boolean = false;
        var row = document.createElement("tr");
        var cel1 = document.createElement("td");
        var cel2 = document.createElement("td");
        var cel3 = document.createElement("td");
        var cel4 = document.createElement("td");
        var text1 = document.createTextNode("");
        var text2 = document.createTextNode(""); 
        var text3 = document.createTextNode(""); 
        var text4 = document.createTextNode("");
        if(marca != "" && modelo != "")
        {
            document.getElementById("marca")!.className="sinError";
            document.getElementById("modelo")!.className="sinError";
            document.getElementById("precio")!.className="sinError";
            switch(document.getElementById("tipoVehiculo")!.value)
            {
                case "1":
                    tempId = calcularID();
                    var miAuto:Auto = new Auto(tempId,marca,modelo,precio);
                    idRow = miAuto.id;
                    listaVehiculos.push(miAuto);
                    text1 = document.createTextNode(tempId.toString());
                    text2 = document.createTextNode(marca);
                    text3 = document.createTextNode(modelo);
                    text4 = document.createTextNode(precio.toString());
                    control = true;
                break;
                case "2":
                    tempId = calcularID();
                    var miCamioneta:Camioneta = new Camioneta(tempId,marca,modelo,precio,cuatroPorCuatro);
                    idRow = miCamioneta.id;
                    listaVehiculos.push(miCamioneta);
                    text1 = document.createTextNode(tempId.toString());
                    text2 = document.createTextNode(marca);
                    text3 = document.createTextNode(modelo);
                    text4 = document.createTextNode(precio.toString())
                    control = true;
                break;
            
            }
        }else
        {
            alert("Debe completar todos los campos");
            document.getElementById("marca")!.className="error";
            document.getElementById("modelo")!.className="error";
            document.getElementById("precio")!.className="error";
        }
        
        if(control == true)
        {
            row.setAttribute("idVehiculo",idRow.toString());
            if(document.getElementById("tipoVehiculo")!.value == "1")
            {
                row.setAttribute("tipoVehiculo","Auto");
            }else if(document.getElementById("tipoVehiculo")!.value == "2")
            {
                row.setAttribute("tipoVehiculo","Camioneta");
            }
            cel1.appendChild(text1);
            cel2.appendChild(text2);
            cel3.appendChild(text3);
            cel4.appendChild(text4);
            row.appendChild(cel1);
            row.appendChild(cel2);
            row.appendChild(cel3);
            row.appendChild(cel4);
            row.addEventListener("dblclick",clickGrilla);
            tCuerpo!.appendChild(row);
            tablaGlobal = tCuerpo;
            control = false;
            document.getElementById("marca")!.value = "";
            document.getElementById("modelo")!.value = "";
            document.getElementById("precio")!.value = "";
            document.getElementById("cuatroXcuatro")!.checked = false;
            document.getElementById("contAgregar")!.hidden = true;
        }
        
    }

    export function filtradoTipo()
    {
        if(document.getElementById("filtroVehiculo")!.value == "1")
        {
            var tempLista = listaVehiculos.filter(function(item)
            {
                
            });
        }
    }

    export function filtradoColumna()
    {
        
    }

    export function eliminar()
    {
        var control:boolean = false;
        var cont:number = 0;
        listaVehiculos.forEach(function(vehiculo)
        {
            if(parseInt(rowGlobal.childNodes[0].innerHTML)== vehiculo.id)
            {
                rowGlobal.remove();
                listaVehiculos.splice(cont,1);
                document.getElementById("id")!.value="";
                document.getElementById("marca")!.value = "";
                document.getElementById("modelo")!.value = "";
                document.getElementById("precio")!.value = "";
                document.getElementById("cuatroXcuatro")!.checked = false;
                document.getElementById("contAgregar")!.hidden = true;
            }else
            {
                cont = cont +1;
            }
        });
    }

    export function clickGrilla(e)
    {
        
        var trClick = e.target.parentNode;
        rowGlobal = trClick;
        document.getElementById("contAgregar")!.hidden = false;
        document.getElementById("id")!.value = trClick.childNodes[0].innerHTML;
        document.getElementById("modelo")!.value = trClick.childNodes[1].innerHTML;
        document.getElementById("marca")!.value = trClick.childNodes[2].innerHTML;
        document.getElementById("precio")!.value = trClick.childNodes[3].innerHTML;
        if(trClick.getAttribute("tipoVehiculo") == "Auto")
        {
            document.getElementById("tipoVehiculo")!.value = "1";
           
        }else if(trClick.getAttribute("tipoVehiculo") == "Camioneta")
        {
            document.getElementById("tipoVehiculo")!.value = "2";
        }
    }

    function calcularID():number
    {
        var id:number;
        id = listaVehiculos.reduce(function(idTotal,item)
        {
            return idTotal = item.id;
        },0);
        return id+1;
    }

}