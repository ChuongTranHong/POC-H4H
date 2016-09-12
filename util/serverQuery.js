import $ from 'jquery';

export function queryTest(){
    return $.ajax({
        type:"GET",
        url:"/api/test",
    })
}

export function fetchAllDisaster(){
    return $.ajax({
        type:"GET",
        url:"/api/getAll",
    })
}

export function addDisaster(disaster){
    console.log(JSON.stringify(disaster));
    return $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
       },
        type:"POST",
        url:"/api/add",
        data: JSON.stringify(disaster)
    })
}

export function deleteDisaster(itemId){
    return $.ajax({
        type:"DELETE",
        url:"/api/delete/"+itemId,
    })
}