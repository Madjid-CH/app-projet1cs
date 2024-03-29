export default function validateLog(val ,emailErrors,passworderrors,validationerror,mobile){
    let errors = {}

    if(!val.email){
        errors.email="L'adresse email est requise"
    }else if(!/\S+\.\S+@esi-sba.dz+/.test(val.email)){
        errors.email = "Adresse email non  valide";
    }
    else if(emailErrors){
      errors.email = "Adresse email n'existe pas";
  }
    if (!val.pswd) {
        errors.pswd= 'Le mot de passe est requis';
      } 
     else if (val.pswd.length < 3) {
        errors.pswd = 'Le mot de passe doit contenir 8 symboles ou plus';
      }
    else if (passworderrors) {
        errors.pswd = "Le mot de passe est incorrecte";
      }
    else if (validationerror) {
      errors.pswd = "Le compte est désactivé , vous ne pouvez pas vous connecter!";
    }
    else if(mobile){
      errors.pswd = "Les utilisateurs mobiles non pas accès à l'interface web!";
    }
      return errors;
    
}