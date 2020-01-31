import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ onSubmit, onChange }) => (
  <>
    <form>
      <section>
        <input type="text" name="url" placeholder="URL" value></input>
        <div>
          <label>
            <input type="radio" name="method" value="get" onChange={onChange}>
              <span>GET</span>
            </input>
          </label>
          <label>
            <input type="radio" name="method" value="post" onChange={onChange}>
              <span>POST</span>
            </input>
          </label>
          <label>
            <input type="radio" name="method" value="put" onChange={onChange}>
              <span>PUT</span>
            </input>
          </label>
          <label>
            <input type="radio" name="method" value="PATCH" onChange={onChange}>
              <span>PATCH</span>
            </input>
          </label>
          <label>
            <input type="radio" name="method" value="DELETE" onChange={onChange}>
              <span>DELETE</span>
            </input>
          </label>
          <label>
            <button type="submit" onSubmit={onSubmit}>Submit</button>
          </label>
        </div>
      </section>
      <div> <textarea placeholder="Raw JSON Body" name="requestBody"></textarea></div>
    </form>
  </>
);

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
