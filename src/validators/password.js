export function hasNumber(value) {

    return(/\d/.test(value)) ? true:false;
}

export function hasLowerCaseAlpha(value) {

    return(/[a-z]/.test(value)) ? true:false;
}

export function hasUpperCaseAlpha(value) {

    return(/[A-Z]/.test(value)) ? true:false;
}

//Special chars for Cognito can be found here: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html
export function hasSpecialChar(value) {

    return(/[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`]/.test(value)) ? true:false;
}