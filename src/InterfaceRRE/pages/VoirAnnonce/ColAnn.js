import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen } from '@fortawesome/free-solid-svg-icons'
export const ColAnn= [

   {
      Header: "Titre",
      accessor:"titre" ,
     
     
    },
    {
        Header: "Organisateur",
        accessor:"organisateur" 
       },
    {
      Header: "Date de publication",
      accessor:"datepost" ,
      Cell:({value,row}) => { return (<>{value.slice(0, 10)}   {"  ... "}<a href={`/RRE/Consulter/details?id=${row.original.id_post.toString()}`} ><FontAwesomeIcon icon={faPen} className="icon" /></a></>)}
     },
   
  ] 