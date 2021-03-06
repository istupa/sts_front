import React, { Component } from 'react';
import _ from 'lodash';

class SubjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { entity: { semester: '1', control_type: 'Exam' } }; // declared default state for selectors
  }

  static defaultProps = {
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
    controls_type: ['Exam', 'Test', 'None']
  };

  handleSubmit () { 
    this.props.submit(this.state.entity);
  };

  onChange(field, event) {
    this.setState({
      entity: {
        ...this.state.entity,
        [field]: _.get(event, 'target.value', '')
      }
    });
  }

  render() {
    const semesterOptions = this.props.semesters.map(semester => {
      return (
        <option key={semester} value={semester}>
          {semester}
        </option>
      );
    });
    const controlOptions = this.props.controls_type.map(control_type => {
      return (
        <option key={control_type} value={control_type}>
          {control_type}
        </option>
      );
    });
    return (
      <div className="card">
        <div className="card-header">
          <h4>Add Subject</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Subject Name:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'name')} />
            </div>
            <div className="form-group">
              <label>Subject Semester:</label>
              <select className="form-control" ref="semester" onChange={this.onChange.bind(this, 'semester')}>
                {semesterOptions}
              </select>
            </div>
            <div className="form-group">
              <label>Program:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'work_program')} />
            </div>
            <div className="form-group">
              <label>Control Type:</label>
              <select className="form-control" ref="control_type" onChange={this.onChange.bind(this, 'control_type')}>
                {controlOptions}
              </select>
            </div>
            <div className="form-group">
              <label>Credits:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'credits')} />
            </div>
            <div className="form-group">
              <label>Hours lections:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'hours_lections')} />
            </div>
            <div className="form-group">
              <label>Hours labs:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'hours_labs')} />
            </div>
            <div className="form-group">
              <label>Hours seminars:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'hours_seminars')} />
            </div>
            <div className="form-group">
              <label>Hours individual:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'hours_individual')} />
            </div>
            <div className="form-group">
              <label>Hours consultations:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'hours_consultations')} />
            </div>
            <div className="form-group">
              <label>Hours practice:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'hours_practice')} />
            </div>
            <div className="form-group">
              <label>Hours self:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'hours_self')} />
            </div>
            <div className="form-group">
              <label>Hours prod:</label>
              <br />
              <input className="form-control" type="text" onChange={this.onChange.bind(this, 'hours_prod')} />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit.bind(this)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SubjectForm;
