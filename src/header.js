import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const Header = () => {
    const [products, setProducts] = useState([]);
    const [selectedCode, setSelectedCode] =useState('');
    const [first,setFirst]= useState(0)
    const [rows,setRows]=useState(3)


    useEffect(()=>{
        setProducts([
            {
                code:'1',
                name:'product 1',
                category:'x',
                quantity:'5'
            },
            {
                code:'2',
                name:'product 2',
                category:'y',
                quantity:'4'
            },
            {
                code:'3',
                name:'product 3',
                category:'z',
                quantity:'2'
            },
            {
                code:'1',
                name:'product 1',
                category:'x',
                quantity:'5'
            },
            {
                code:'2',
                name:'product 2',
                category:'y',
                quantity:'4'
            },
            {
                code:'3',
                name:'product 3',
                category:'z',
                quantity:'2'
            },
            {
                code:'1',
                name:'product 1',
                category:'x',
                quantity:'5'
            },
            {
                code:'2',
                name:'product 2',
                category:'y',
                quantity:'4'
            },
            {
                code:'3',
                name:'product 3',
                category:'z',
                quantity:'2'
            }

        ])
    },[])

    const codeBodyTemplate=(rowData)=>{
        return <span>
            The code is {rowData.code}
        </span>
    }

    const categoryBodyTemplate=(rowData)=>{
        return <span style={{color:rowData.category==='x'?'red':''}}>
            {rowData.category}
        </span>
    }

    const filterCode =(filter)=>{

        setSelectedCode(filter)

        var list2=products.filter(p=>p.code===filter)

        setProducts(list2)
    }

    const codeFilter=<InputText value={selectedCode} onChange={(e)=>filterCode(e.target.value)} />

    const onPage=(e)=>{
        console.log(e)
        setRows(e.rows)
        setFirst(e.first)
    }

    return (
        <div>
            <div className="card">
                <DataTable value={products} paginator rows={rows} onPage={onPage} first={first} rowsPerPageOptions={[3,6,9]}>
                    <Column field="code" header="Code" body={codeBodyTemplate} filter filterElement={codeFilter}></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" body={categoryBodyTemplate}></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default Header
