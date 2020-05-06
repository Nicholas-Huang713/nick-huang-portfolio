const currentPage = (state = "home", action) => {
    switch(action.type){
        case 'HOME':
            state = "home";
            break;
        case 'ABOUT':
            state = "about";
            break;
        case 'PROJECTS':
            state = "projects";
            break;
        case 'CONTACT':
            state = "contact";
            break;
        default: 
            return state;
    }
    return state;
}

export default currentPage;