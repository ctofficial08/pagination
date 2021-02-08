import  React, {Component} from "react";
import DataTable from 'react-data-table-component';
const columns = [
    {
      name: 'Name',
      sortable: true,  
      selector:'name'
    },
    {
      name: 'Native name',
      sortable: true,
      selector:'nativeName'
    },
    {
        name: 'Native name',
        sortable: true,
        selector:'nativeName'
      },
      {
        name: 'Alpha2 Code',
        sortable: true,
        selector:'alpha2Code'
      },
      {
        name: 'Capital',
        sortable: true,
        selector:'capital'
      },
      {
        name: 'Demonym',
        sortable: true,
        selector:'demonym'
      },
      {
        name: 'Numeric Code',
        sortable: true,
        selector:'numericCode'
      },
      {
        name: 'Population',
        sortable: true,
        selector:'population'
      },
      {
        name: 'Region',
        sortable: true,
        selector:'region'
      },
      {
        name: 'Relevance',
        sortable: true,
        selector:'relevance'
      },
      {
        name: 'Subregion',
        sortable: true,
        selector:'subregion'
      }, 
  ];
const data = [
    {
        name:"xyz",
        top_level_domain: ".com"
    }
]
class List extends React.Component{
    /**Componenet did mount life cycle methos */

    constructor(props){
        super(props);
        this.state = {
            listData:[]
        }
    }
    componentDidMount(){
        this.getData();
    }

    /**get data from API */
    getData = () =>{
        fetch("https://restcountries.eu/rest/v1/all")
      .then(res => res.json())
      .then(
        (result) => {
            let lists = []
            for(let res of result){
                let data = {
                    name:res.name,
                    nativeName:res.nativeName,
                    alpha2Code:res.alpha2Code,
                    capital:res.capital,
                    demonym:res.demonym,
                    numericCode:res.numericCode,
                    population:res.population,
                    region:res.region,
                    relevance:res.relevance,
                    subregion:res.subregion
                }
                lists.push(data)
            }
            this.setState({
                listData:lists
            })
        }
      )
    }
    render(){
        console.log("stse",this.state.listData)
        return (
            <div>
                <DataTable
                    title="Lists"
                    columns={columns}
                    data={this.state.listData}
                    theme="solarized"
                    pagination='true'
                    paginationPerPage = '10'
                />
            </div>
        )
    }
}
export default List;