import React, { Component } from 'react';
import { getGuideByName } from '../../utils/fetchJSON';


class GuideBioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guide: null,
      guideName: this.props.match.params.name,
      loading: true
    }
  }

  componentWillMount() {
    var that = this;
    getGuideByName(this.state.guideName, function (data) {
      that.setState({ guide: data, loading: false });

    });
  }

  render() {
    var guide = "";
    var name = "";
    if (this.state.guide !== null && this.state.guide.length > 0) {
      name = this.state.guide[0].name;
      guide = this.state.guide.map(guide =>
        <div className="col-md-12" key={guide.id}>
          <div className="col-md-4 col-xs-12 text-center">
            <img src={guide.img} alt="" />
            <div className="item-box-desc text-center">
              <h4>{guide.name}</h4>
              <small>{guide.role}</small>
            </div>
          </div>
          <div className="col-md-8 col-xs-12" style={{ textAlign: "middle" }}>
            <span dangerouslySetInnerHTML={{ __html: guide.bio }} />
          </div>
        </div>)
    }
    else if (this.state.guide !== null) {
      guide = <p>That guide could not be found, please go to <a href="/Guides">this page</a> for a full list of the Explore Tasmania guides.</p>

    }
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>{name}</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <a href="/Guides">Guides</a>
                    {this.state.guide !== null && this.state.guide.length > 0 ? (<span>
                      <span className="delimiter">›</span>
                      <span title="" className="nolink">{name}</span>
                    </span>) : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                  <div className="content">

                    {this.state.loading ? <h2><i className="fa fa-spinner"></i></h2> : ''}
                    {guide}


                  </div>
                </div>  </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GuideBioPage;