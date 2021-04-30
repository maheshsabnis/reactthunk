import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchproducts } from "./../actions/actions";
import { fetchPostproduct } from "./../actions/postactions";

const ListProductsComponent=({dispatch, loading, products, hasErrors})=>{
    useEffect(()=>{
        dispatch(fetchproducts());
    },[dispatch]);

    const save=()=>{
        dispatch(fetchPostproduct({
            ProductId:'Prd-0088',
            ProductName: 'Headphone',
            CategoryName: 'Electronics',
            Manufacturer:'Sony',
            Description: 'Base Voice',
            BasePrive:8900
        }));
    };
    const renderUI = ()=>{
        if(loading) return (<p>Loading products.....</p>);
        if(hasErrors) return (<p>Unable to display.....</p>); 
        if(products === undefined) return (<p>No records to display.....</p>); 
        return products.map((prd,idx)=>(
            <p key={idx}>{JSON.stringify(prd)}</p>   
        ));
    };

    return (
        <section>
            <h1>List of Products</h1>
            {renderUI()}
            <hr/>
            <input type="button" value="Save" onClick={save}/>
        </section>
    );
};

const mapStateToProps = state=>({
    loading:state.products.loading,
    products:state.products,
    hasErrors:state.products.hasErrors
});


export default connect(mapStateToProps,null)(ListProductsComponent);