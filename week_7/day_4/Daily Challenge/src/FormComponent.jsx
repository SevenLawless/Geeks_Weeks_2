function FormComponent(props) {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={props.firstName}
          onChange={props.handleChange}
        />
  
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={props.lastName}
          onChange={props.handleChange}
        />
  
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={props.age}
          onChange={props.handleChange}
        />
  
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
  
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
  
        <select
          name="destination"
          value={props.destination}
          onChange={props.handleChange}
        >
          <option value="">Please Choose a destination</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="France">France</option>
        </select>
  
        <label>
          <input
            type="checkbox"
            name="isNutsFree"
            checked={props.isNutsFree}
            onChange={props.handleChange}
          />
          Nuts free
        </label>
  
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={props.isLactoseFree}
            onChange={props.handleChange}
          />
          Lactose free
        </label>
  
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={props.isVegan}
            onChange={props.handleChange}
          />
          Vegan
        </label>
  
        <button>Submit</button>
      </form>
    );
  }
  
  export default FormComponent;