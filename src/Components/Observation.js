
import {useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import './CSS/nipponlogo2.png';
// import './login.css';

function Observation() {
  const [Depot,setDepot]=useState('')
  const [BaseTintedAsPerReportInLit,setBr]=useState(0)
  const [BaseTintedAsPerHistoryFileInLit,setBrh]=useState(0)
  const [ColorantPouredInCannistersInLit,setColrcan]=useState(0)
  const [ColorantConsumedInLit,setColrcon]=useState(0)
  const [Remarks,setRemarks]=useState('')
  const [BrandlingForDispensingMachine,setBdm]=useState('OLD')
  const [BrandlingForGyroshakerMachine,setBgm]=useState('OLD')
  const [isPending,setIsPending]=useState(false)
  var CreateBy='Kumaran';
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsPending(true)
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    toast('Data is being saved', {
        position: "top-center",
        autoClose: 50,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  const data={Depot,BaseTintedAsPerReportInLit,BaseTintedAsPerHistoryFileInLit, ColorantPouredInCannistersInLit,ColorantConsumedInLit,Remarks,BrandlingForDispensingMachine,BrandlingForGyroshakerMachine,CreateBy,day,month,year}
  fetch('http://localhost:5147/api/observation/post',{
    method:'POST',
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
      setIsPending(false);
  })
  }
  return (
    <div className="container"> 
        <h1>Observations</h1>

        <h3>Enter details:</h3>
        <form className="observation-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <label for="Depot">Depot :</label>
                <br />
                <input type="text" id="Depot" placeholder="Enter Depot" name="Depot" value={Depot} onChange={(e)=>{setDepot(e.target.value)}} required/>
            </div>

            <div className="input-group">
                <label for="baser">Base Tinted as per Report :</label>
                <br />
                <input type="number" id="baser" placeholder="Enter Base Tinted as per Report" name="baser" value={BaseTintedAsPerReportInLit} onChange={(e)=>{setBr(e.target.value)}} required/>
            </div>

            <div className="input-group">
                <label for="baseh">Base Tinted as per History :</label>
                <br />
                <input type="number" id="baseh" placeholder="Enter Base Tinted as per History" name="baseh" value={BaseTintedAsPerHistoryFileInLit} onChange={(e)=>{setBrh(e.target.value)}} required/>
            </div>

            <div className="input-group">
                <label for="colourant">Colourant Poured in Cannister :</label>
                <br />
                <input type="number" id="colourant" placeholder="Enter Colourant poured in Litres" name="colourant"  value={ColorantPouredInCannistersInLit} onChange={(e)=>{setColrcan(e.target.value)}} required/>
            </div>

            <div className="input-group">
                <label for="colcon">Colourant Consumded :</label>
                <br />
                <input type="number" id="colcon" placeholder="Enter Colourant Consumed in Litres" name="colcon"  value={ColorantConsumedInLit} onChange={(e)=>{setColrcon(e.target.value)}} required/>
            </div>

            <div className="input-group">
                <label for="remarks">Remarks :</label>
                <br />
                <input type="text" id="remarks" placeholder="Enter Remarks" name="remarks"  value={Remarks} onChange={(e)=>{setRemarks(e.target.value)}} required/>
            </div>

            <div className="input-group">
                <label for="brand">Branding for Dispensing Machine :</label>
                <br />
                <select  name="brand" id="barnd" value={BrandlingForDispensingMachine} onChange={(e)=>{setBdm(e.target.value)}} required >
                    <option value="">Select</option>
                    <option value="OLD">Old</option>
                    <option value="NEW">New</option>
                    <option value="NO">No</option>
                </select>
            </div>

            <div className="input-group">
                <label for="brand">Branding for Gyroshaker Machine:</label>
                <br />
                <select  name="brand" id="brand" value={BrandlingForGyroshakerMachine} onChange={(e)=>{setBgm(e.target.value)}} required >
                    <option value="">Select</option>
                    <option value="OLD">Old</option>
                    <option value="NEW">New</option>
                    <option value="NO">No</option>
                </select>
            </div>

            {isPending && <div className="submit-button"><button className="observation-form-button" disabled type="submit">Submit</button></div>}
            {!isPending && <div className="submit-button"><button className="observation-form-button" type="submit">Submit</button></div>}
        </form>
        <ToastContainer/>
    </div>

  );
}

export default Observation;