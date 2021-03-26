import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Customer = () => {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
    ];
    return (
        <form style={{width:'600px', margin:'0 auto', marginTop: '13%'}}>
            <h3>Customer Login</h3>
            <div className="form-group">
                <input type="email" width="40%" className="form-control" placeholder="Enter name" />
            </div> 

            <div className="form-group">
                <input type="contact" className="form-control" placeholder="Enter phone number" />
            </div>

            <div className="form-group">
            <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 600, background: 'white' }}
                
                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Enter Location"/>}
            />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </form>
    )
}

export default Customer;