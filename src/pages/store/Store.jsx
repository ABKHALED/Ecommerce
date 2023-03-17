import './store.css'
import { Context } from '../../Provider'
import { useContext, useEffect, useState ,useRef } from 'react'
import FeaGen from '../../components/generaiter/FeaGen'
import {Bars} from 'react-loader-spinner'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { click } from '@testing-library/user-event/dist/click'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function Store() {
    const {data   } = useContext(Context)
    const [cati , setCati] = useState([])
    const [selcted, setSELcted] = useState("All");
    const [secdata , setSEecdata] = useState([])
    const [range , setRange] = useState('1')
    const [text , setText] = useState('')
    const [ open , setOpen] = useState(false)
    const reef = useRef()
    useEffect(() =>{
        let arr =['All']
        if(data.length >0){
            arr = [...arr , ...data.map(ele => ele.category)]
            setCati(Array.from(new Set (arr)).sort())
        }
    } , [data])
    function change(e) {
      const { value } = e.target;
      setSELcted(value);
    }
    function ran(e){
      const {value} = e.target
      setRange(value)
    }
    useEffect(() => {
      if (data.length > 0) {
        if(selcted === 'All'){
          setSEecdata(data)
        }else{
          setSEecdata(data.filter(ele =>ele.category === selcted))
        }
      }
    }, [selcted, data]);
    useEffect(() => {
      if (data.length > 0) {
       setSEecdata(data.filter(ele => ele.price >= +range))
      }
    }, [range]);
    function inp(e){
      const {value} = e.target
      setText(value)
    }
    useEffect(() => {
      if (data.length > 0) {
      setSEecdata(data.filter(ele =>{
        return ele.title.toLowerCase().startsWith(text.toLowerCase())
      }))
      }
    }, [text]);
    useEffect(() =>{
      const store = document.getElementById('store')
      function kli(e){
        // e.stopPropagation()
        const tar = e.target.parentElement
        console.log(tar)
        if(!tar.classList.contains('tt')){
          setOpen(false)
        }
      }
      store.addEventListener('click' , kli )
    } ,[])
    function up (){
      window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      })
    }
  return (
    <>
 <div className='store' id='store'>
   <div className="header">
       <div className="container">
           <p>“We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.”</p>
       </div>
   </div>
<div className="container">
   <div className="row">
       <div className="col-12 col-md-3 left tt">
          <div className='open tt' onClick={() => setOpen(prev => !prev)}>
            <SettingsSuggestIcon className='tt' />
          </div>
           <aside className={`side tt ${open ? 'active' : ''}`}>
              <div className='search tt'>
                <input type="text" placeholder='Search...' className='form-control' onChange={(e) => inp(e)} value={text} />
              </div>
              <div className='cat tt'>
              <h6>Categories</h6>
              {cati && cati.map(ele =>{
               return <div key={ele} className='form-check tt'> 
               <input type="radio" id={ele} name="Categories" className='form-check-input ' onChange={(e) => change(e)} value={ele} checked={selcted === ele} />
               <label className='form-check-label' htmlFor={ele}>{ele}</label>
               </div>
              })}
              </div>
              <div className='ran tt'>
              <h6>Price Filter</h6>
              <input
                  onChange={(e) => ran(e)}
                   type='range'
                   min={1}
                   max={2000}
                   step={10}
                   value={range}
               className='custom-slider'>
           </input>
           <span>Price: ${range}</span>
              </div>
           </aside>
       </div>
       <div className="col-12 col-md-9 apd">
         <FeaGen data={secdata} />
       </div>
   </div>
 </div> 
   <div ref={reef} onClick={up} className="up">
    <ArrowUpwardIcon />
   </div>
</div> 
</>
  )
}

export default Store
