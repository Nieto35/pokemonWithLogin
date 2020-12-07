import React from 'react';

function Pagination(props){

    let currentPage = props.currentPageFn;
    let pages = [];
    if(currentPage >= 10){
    let limiteInferior = currentPage - 5;
    let limiteSuperior = currentPage + 4;

    for(let i = limiteInferior; i<=limiteSuperior; i++){
        pages.push(i);
    }
    }else{
    for(let i = 1; i<=10; i++){
        pages.push(i);
    }
    }
    //3. Mostrar las páginas disponibles
    //Si solicitamos la página 10 mostrariamos [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] ( |10 - 5| |10 + 4| )
    //Si solicitamos la página 14 mostrariamos [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ( |14 - 5 | |14 + 4| )
    return (
        <div className="pagination-row">
            {
                pages.map( (element, index) => {

                    return <div className="item" key={index} onClick={() => props.fetchPageFn((element)) }>{element}</div>
                })
            }
            
        </div>
    )
}

export default Pagination;