import React from 'react';
import PropTypes from 'prop-types';



const Form = ({ onSubmit, onChange }) => (
  <>
    <form className={styles.Form}>
      <section>
        <input type="text" name="url" placeholder="URL"
          onChange={onChange}></input>
        <div>
          <label>
            <input type="radio" name="method" value="get" onChange={onChange}>
            </input>
            <span>GET</span>
          </label>
          <label>
            <input type="radio" name="method" value="post" onChange={onChange}>
            </input>
            <span>POST</span>
          </label>
          <label>
            <input type="radio" name="method" value="put" onChange={onChange}>
            </input>
            <span>PUT</span>
          </label>
          <label>
            <input type="radio" name="method" value="PATCH" onChange={onChange}>
            </input>
            <span>PATCH</span>
          </label>
          <label>
            <input type="radio" name="method" value="DELETE" onChange={onChange}>
            </input>
            <span>DELETE</span>
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
