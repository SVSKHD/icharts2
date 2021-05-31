import {useEffect , useState} from "react"
import Layout from "../components/Layout/Layout"
import DataTable from 'react-data-table-component';
import {FaSortAlphaUp} from "react-icons/fa"

const columns = [
    {
      name: 'Symbol',
      selector: '0',
      sortable: true,
    },
    {
      name: 'Price',
      selector: '1',
      sortable: true,
    },
    {
      name: 'Price Chnage',
      selector: '2',
      sortable: true,
      
    },
    {
      name: 'Price Change (%)',
      selector: '3',
      sortable: true,
      
    },
    {
      name: 'Total OI',
      selector: '4',
      sortable: true,
      
    },
    {
      name: 'Total OI Chnage',
      selector: '5',
      sortable: true,
      
    },
    {
      name: 'Total OI Chnage (%)',
      selector: '6',
      sortable: true,
     
    },
    {
      name: 'PCR',
      selector: '7',
      sortable: true,
      
    },
    {
      name: 'IV',
      selector: '8',
      sortable: true,
      
    },
    {
      name: 'IV Range (1yr)',
      selector: '9',
      sortable: true,
     
    },
    {
      name: 'HV(10/20/30 Days)',
      selector: '10',
      sortable: true,
    },
    {
      name: 'IVR',
      selector: '11',
      sortable: true,
    },
    {
      name: 'IVP',
      selector: '12',
      sortable: true,
    },
  ];
  





const IVP = () =>{
    const [data , setData] = useState([])

    
       useEffect(()=>{
        setInterval(()=>{
          const url = "https://options.icharts.in/opt/hcharts/stx8req/php/getDataForIVR_IVP_Report_BhavCopy_for_test.php"
          fetch(url).then(resp=>resp.json())
          .then(resp=>setData(resp.aaData))
        },1000)
        },[])



    return(
        <div>
            <Layout>
            <h1>Hello IVP</h1>
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
    export default IVP