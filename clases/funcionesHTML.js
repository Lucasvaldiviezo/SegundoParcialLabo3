var Vehiculos;
(function (Vehiculos) {
    var rowGlobal;
    var tablaGlobal;
    window.addEventListener("load", function () {
        document.getElementById("btnAlta").addEventListener("click", mostrarForm);
        document.getElementById("btnCerrar").addEventListener("click", hideForm);
        document.getElementById("btnAgregar").addEventListener("click", guardar);
        document.getElementById("btnEliminar").addEventListener("click", eliminar);
        document.getElementById("tipoVehiculo").addEventListener("change", cambioTipo);
    });
    window.addEventListener("load", hideForm);
    window.addEventListener("load", filtradoTipo);
    var listaVehiculos = new Array();
    function hideForm() {
        document.getElementById("contAgregar").hidden = true;
        document.getElementById("infoCamioneta").hidden = true;
    }
    Vehiculos.hideForm = hideForm;
    function mostrarForm() {
        document.getElementById("contAgregar").hidden = false;
    }
    Vehiculos.mostrarForm = mostrarForm;
    function cambioTipo() {
        if (document.getElementById("tipoVehiculo").value == "1") {
            document.getElementById("infoCamioneta").hidden = true;
        }
        else if (document.getElementById("tipoVehiculo").value == "2") {
            document.getElementById("infoCamioneta").hidden = false;
        }
    }
    Vehiculos.cambioTipo = cambioTipo;
    function guardar() {
        var tCuerpo = document.getElementById("tCuerpo");
        var marca = document.getElementById("marca").value;
        var modelo = document.getElementById("modelo").value;
        var precio = document.getElementById("precio").value;
        var cuatroPorCuatro = document.getElementById("cuatroXcuatro").checked;
        var tempId;
        var idRow = 0;
        var control = false;
        var row = document.createElement("tr");
        var cel1 = document.createElement("td");
        var cel2 = document.createElement("td");
        var cel3 = document.createElement("td");
        var cel4 = document.createElement("td");
        var text1 = document.createTextNode("");
        var text2 = document.createTextNode("");
        var text3 = document.createTextNode("");
        var text4 = document.createTextNode("");
        if (marca != "" && modelo != "") {
            document.getElementById("marca").className = "sinError";
            document.getElementById("modelo").className = "sinError";
            document.getElementById("precio").className = "sinError";
            switch (document.getElementById("tipoVehiculo").value) {
                case "1":
                    tempId = calcularID();
                    var miAuto = new Vehiculos.Auto(tempId, marca, modelo, precio);
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
                    var miCamioneta = new Vehiculos.Camioneta(tempId, marca, modelo, precio, cuatroPorCuatro);
                    idRow = miCamioneta.id;
                    listaVehiculos.push(miCamioneta);
                    text1 = document.createTextNode(tempId.toString());
                    text2 = document.createTextNode(marca);
                    text3 = document.createTextNode(modelo);
                    text4 = document.createTextNode(precio.toString());
                    control = true;
                    break;
            }
        }
        else {
            alert("Debe completar todos los campos");
            document.getElementById("marca").className = "error";
            document.getElementById("modelo").className = "error";
            document.getElementById("precio").className = "error";
        }
        if (control == true) {
            row.setAttribute("idVehiculo", idRow.toString());
            if (document.getElementById("tipoVehiculo").value == "1") {
                row.setAttribute("tipoVehiculo", "Auto");
            }
            else if (document.getElementById("tipoVehiculo").value == "2") {
                row.setAttribute("tipoVehiculo", "Camioneta");
            }
            cel1.appendChild(text1);
            cel2.appendChild(text2);
            cel3.appendChild(text3);
            cel4.appendChild(text4);
            row.appendChild(cel1);
            row.appendChild(cel2);
            row.appendChild(cel3);
            row.appendChild(cel4);
            row.addEventListener("dblclick", clickGrilla);
            tCuerpo.appendChild(row);
            tablaGlobal = tCuerpo;
            control = false;
            document.getElementById("marca").value = "";
            document.getElementById("modelo").value = "";
            document.getElementById("precio").value = 1;
            document.getElementById("cuatroXcuatro").checked = false;
            document.getElementById("contAgregar").hidden = true;
        }
    }
    Vehiculos.guardar = guardar;
    function filtradoTipo() {
        /*if(document.getElementById("filtroVehiculo")!.value == "1")
        {
            
        }*/
    }
    Vehiculos.filtradoTipo = filtradoTipo;
    function eliminar() {
        alert("entre");
        var control = false;
        listaVehiculos.forEach(function (vehiculo) {
            if (parseInt(rowGlobal.childNodes[0].innerHTML) == vehiculo.id) {
                rowGlobal.remove();
            }
        });
    }
    Vehiculos.eliminar = eliminar;
    function clickGrilla(e) {
        var trClick = e.target.parentNode;
        rowGlobal = trClick;
        document.getElementById("contAgregar").hidden = false;
        document.getElementById("id").value = trClick.childNodes[0].innerHTML;
        document.getElementById("modelo").value = trClick.childNodes[1].innerHTML;
        document.getElementById("marca").value = trClick.childNodes[2].innerHTML;
        document.getElementById("precio").value = trClick.childNodes[3].innerHTML;
        if (trClick.getAttribute("tipoVehiculo") == "Auto") {
            document.getElementById("tipoVehiculo").value = "1";
        }
        else if (trClick.getAttribute("tipoVehiculo") == "Camioneta") {
            document.getElementById("tipoVehiculo").value = "2";
        }
    }
    Vehiculos.clickGrilla = clickGrilla;
    function calcularID() {
        var id;
        id = listaVehiculos.reduce(function (idTotal, item) {
            return idTotal = item.id;
        }, 0);
        return id + 1;
    }
})(Vehiculos || (Vehiculos = {}));
