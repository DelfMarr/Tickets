function validar(formulario){
    if (formulario.nombre.value.trim().length==0){
        alert("Debe ingresar un nombre");
        return false;
      }

    if (formulario.apellido.value.trim().length==0){
        alert("Debe ingresar un apellido");
        return false;
      }  

    var expressionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    if (!expressionRegular.test(formulario.email.value)){
      alert("Debe ingresar un mail valido");
      return false;
    }  

    if (formulario.categoria.value == ""){
        alert("Selecciona una categoria");
        return false;
      }  

    if (formulario.cantidad.value == ""){
        alert("Seleccione una categoria");
        return false;
      }

      return true;
    } 

    else { 
      var cantidad = parseInt(document.getElementById('cantidad').value);
      var cantegoria = parseInt(document.getElementById('categoria')value);
      var montoAPagar= 0;

      if(categoria==1){
        montoAPagar= cantidad * (200*0.2);
      } else if (cantegoria==2){
        montoAPagar = cantidad * (200.0.5);
      } else {
        montoAPagar = cantidad * (200.0.85);
      }
      
      console.log(montoAPagar);
      document.getElementById('total').innerHTML = montoAPagar;

    }

   const btnCalcular = document.getElementById('boton')
   btnCalcular.addEventListener('click' , calcular)


    



    
      
    