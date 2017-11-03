export const DATA = 'DATA';
export const LOGIN = 'LOGIN';

function formatdData({data = [], status = false}){
    let responseActionObj = {
        type: DATA,
        data
    };

    switch(status){
        case true:
            responseActionObj.data = data;
            break;
        case false:
            break;
    }

    return responseActionObj;
}

export function getData(helpers){
    return function(dispatch){
        dispatch(formatdData({status:false}));
        let user = helpers.getUser();
        let dataTable;
        console.log(user);
        user.listProjects()
            .then(data => {
                let project = data.entities[0];
                dataTable = user.getDataTable(project.id);
                
                return dataTable.listCells();
            })
            .then(data => {
                console.log(data.entities[0].id);
                console.log();
                return dataTable.getCell(data.entities[0].id).fetch();

            })
            .then(data => {
                console.log(data);
                return dispatch(formatdData({data,status:true}));
            });
    }
}

function loginStatus({status = false}){
    let responseActionObj = {
        type: LOGIN,
        status
    };

    switch(status){
        case false:
            responseActionObj['status'] = status;
            break;
        case true:
            responseActionObj['status'] = status;
            break;
    }

    return responseActionObj;
}

export function checkLoggedIn(helpers){
    return function(dispatch){
        dispatch(loginStatus({ status: false }));

        helpers.storeFluxUser()
            .then(function() { return helpers.isLoggedIn() })
            .then(function(isLoggedIn) {
              if (isLoggedIn) {
                // if logged in, make sure the login page is hidden
                return dispatch(loginStatus({status:true}));
              } else {
                return dispatch(loginStatus({status:false}));
              }
            });
    };
};