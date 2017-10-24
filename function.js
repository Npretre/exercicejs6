function controle(form1){
          var firstnumber = document.form1.premier_nombre.value;
          var secondnumber = document.form1.deuxieme_nombre.value;
          var arrondi = Math.trunc(firstnumber);

          alert('Le résultat est de ' + arrondi % secondnumber);
      }
