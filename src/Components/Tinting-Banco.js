const Tinting = () => {
    return (
    <div className="box">
        <h1 class="text-center">Tinting Banco</h1>
        <h3 class="enter-details">Enter Details:</h3>
        <div class="container mt-5">
            <div class="custom-container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="Sno">Sno</label>
                            <input type="integer" class="form-control" id="Sno" placeholder="Enter Sno" name="Sno" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="Date">Date:</label>
                            <input type="date" class="form-control" id="Date" name="Date" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="nameofp">Name Of Project</label>
                            <input type="text" class="form-control" id="nameofp" placeholder="Enter name of project" name="nameofp" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="fandeck">Fandeck</label>
                            <input type="text" class="form-control" id="fandeck" placeholder="Enter name of shade card" name="fandeck" required/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="shadec">Shade Code</label>
                            <input type="text" class="form-control" id="shadec" placeholder="Enter Shade Code" name="shadec" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="shaden">Shade Name</label>
                            <input type="text" class="form-control" id="shaden" placeholder="Enter Shade Name" name="shaden" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="product">Product</label>
                            <input type="text" class="form-control" id="product" placeholder="Enter Product" name="product" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="base">Base</label>
                            <input type="text" class="form-control" id="base" placeholder="Enter Base" name="base" required/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="bbn">Base Batch Number</label>
                            <input type="text" class="form-control" id="bbn" placeholder="Enter Base Batch Number" name="bbn" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="formulation">Formulation for 1L Pack Size</label>
                            <input type="text" class="form-control" id="formulation" placeholder="Enter Formulation for 1L Pack Size" name="formulation" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="qt">Quantity Tinted in Litres</label>
                            <input type="integer" class="form-control" id="qt" placeholder="Enter Quantity Tinted in Litres" name="qt" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="ref">Reference/Standard/Customized</label>
                            <select class="form-control" name="ref" id="ref" required>
                                <option value="">Select</option>
                                <option value="reference">Reference</option>
                                <option value="std">Standard</option>
                                <option value="cust">Customized</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="proj">Project/Retail</label>
                            <select class="form-control" name="proj" id="proj" required>
                                <option value="">Select Project or Retail</option>
                                <option value="pr">Project</option>
                                <option value="ret">Retail</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="smc">Shade Match Confirmation</label>
                            <select class="form-control" name="smc" id="smc" required>
                                <option value="">Select Yes or No</option>
                                <option value="yes">YES</option>
                                <option value="no">NO</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="sps">Shade Patch/Swatch</label>
                            <input type="text" class="form-control" id="sps" placeholder="Enter Shade Patch/Swatch" name="sps" required/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="ob">Other Observations If Any</label>
                            <input type="text" class="form-control" id="ob" placeholder="Enter Other Observations" name="ob" required/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="dp">Dispensing Machine</label>
                            <input type="text" class="form-control" id="dp" placeholder="Enter Dispensing Machine" name="dp" required/>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4 box-submit-button">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>

    );
}
 
export default Tinting;