function validateField(element) {
    const elementName = element.name;
    const elementValue = element.value;
    let error = false;

    if (elementName === 'name') {
        const pattern = /^[A-ZА-ЯҐЄІЇ][a-zа-яґєії\- `']+$/;
        if (!pattern.test(elementValue)) {
            error = true;
        }
    } else if (elementName === 'phone') {
        const pattern = /^\+38\(0\d{2}\)-\d{3}-\d{2}-\d{2}$/;
        if (!pattern.test(elementValue)) {
            error = true;
        }
    } else if (elementName === 'password') {
        const passwordLength = elementValue.length;
        if (passwordLength < 8) {
            error = true;
        }
    } else if (elementName === 'email') {
        const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!pattern.test(elementValue)) {
            error = true;
        }
    }
    return error;
}

export default validateField;