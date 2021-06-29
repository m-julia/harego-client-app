const authState = {
    isLoged: false,
    user: {
        firstName: "",
        lastName: "",
        birthday: "",
        phoneNumber: "",
        email: "",
        token: "",
        image: null,
        createdAt: "",
        deletedAt: null,
        lastVisitDate: ""
    },
};

const authReducer = (state: any = authState, action: any) => {
    return state;
}

export default authReducer;