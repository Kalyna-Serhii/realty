function getFormBody(form) {
    const formBody = {};
    const formElements = Array.from(form.elements);
    formElements.forEach((element) => {
        if(element.name){
            if((element.value && element.required === true) || element.required === false) {
                formBody[element.name] = element.value;
            }
        }
    });
    return formBody;
}

export default getFormBody;