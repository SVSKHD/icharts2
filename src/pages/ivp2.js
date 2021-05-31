import {useEffect , useState} from "react"
import Layout from "../components/Layout/Layout"
import DataTable from 'react-data-table-component';

import {FaSortAlphaUp} from "react-icons/fa"

const columns = [
    {
      name: 'Name',
      selector: '0',
      sortable: true,
    },
    {
      name: 'Type',
      selector: '1',
      sortable: true,
    },
    {
      name: 'Future OI',
      selector: '2',
      sortable: true,
      
    },
]

const IVR2 = () =>{
    const [data , setData] = useState([])

    useEffect(()=>{
    const url ="https://options.icharts.in/opt/hcharts/stx8req/php/getDataForFuturesScan_for_react_test.php"
    fetch(url).then(resp=>resp.json())
    .then(resp=>setData(resp.aaData))
    console.log(data)
    },[])


    return(
        <div>
            <Layout>
            <h1>Hello this Future Scan Page</h1>
            <DataTable
            columns={columns}
            data={data}
            highlightOnHover
            sortIcon={<FaSortAlphaUp/>}
            />
            </Layout>
            </div>
    )
    }
    export default IVR2