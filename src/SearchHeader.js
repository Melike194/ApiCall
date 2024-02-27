import {useState} from "react";

function SearchHeader({search}){

    const [value,setValue]=useState('')
    const handleFormSubmit=(event)=>{
        event.preventDefault();{/*submit olduğunda form otomatik olarak sayfayı yeniler bu sayfayı yenilememesini konsoldaki yazının gitmemesini sağlar */}
        search(value);{/*olayların işleme sırası entera bastığında search melike değerini alacak
     app.jste handlesubmit melike değerini içine alacak
     handlesubmit melike değerini terme atıyor sonra da konsola bastırılıyor*/}
    };

    const handleChange=(event)=>{
       setValue(event.target.value);{/*input içerisindeki verinin update edilmesini sağlar */}
    }
    return (
        <div className="searchDiv"> 
            <form onSubmit={handleFormSubmit}>
                <label> Ne Arıyorsunuz?</label>
                <input type="text" value={value} onChange={handleChange} />{/*default hali <input/>*/}
            </form>
            
        </div>
    );
}

export default SearchHeader;