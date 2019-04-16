import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

class EmojiResultsRow extends PureComponent {
  render() {
    var cod0 = this.props.codice.slice(0, 3);
    var cod1 = this.props.codice.slice(3, 6);
    var url = "http://www.comuni-italiani.it/" + cod0 + "/" + cod1 + "/";
    return (
      <a className="component-emoji-a" target="_blank" href={url}>
        <div className="component-emoji-result-row" >
          <span className="title">{this.props.nome}, {this.props.regione}, {this.props.provincia} ({this.props.sigla})</span>
        </div>
      </a>
    );
  }
}
EmojiResultsRow.propTypes = {
  name: PropTypes.string,
  zona: PropTypes.string,
  regione: PropTypes.string,
  provincia: PropTypes.string,
  sigla: PropTypes.string,
  codice: PropTypes.number,
};
export default EmojiResultsRow;
