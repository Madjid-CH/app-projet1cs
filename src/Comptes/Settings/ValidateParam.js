export default function ValidateParam(value) {
    let errors = {}
    if (value.pswd.trim() || value.pswdn.trim() || value.pswdc.trim()) {
        if (!value.pswd && value.pswdn && value.pswdn) {
            errors.pswd = 'Le mot de passe est requis';
        }
        if (value.pswd && value.pswdn && !value.pswdc) {
            errors.pswdc = 'La confirmation de mot de passe est requise';
        }
        if (value.pswdn && value.pswdc && value.pswdn !== value.pswdc) {
            errors.pswdn = 'Vous devez entrer le même mot de passe pour confirmer';
        }

        //if (value.pswd != the actual pass){errors.pswd="le mot de passe que vous avez saisi est incorrecte"}

        if (value.pswdn.length < 8) {
            errors.pswdn = 'Le mot de passe doit contenir 8 symboles ou plus';
        }
        if (value.pswdc.length < 8) {
            errors.pswdc = 'Le mot de passe doit contenir 8 symboles ou plus';
        }
    }
    return errors;
}