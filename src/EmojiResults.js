import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

class EmojiResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.codice}
            nome={emojiData.nome}
            zona={emojiData.zona.nome}
            regione={emojiData.regione.nome}
            provincia={emojiData.provincia.nome}
            sigla={emojiData.sigla}
            codice={emojiData.codice}
          />
        ))}
      </div>
    );
  }
}
EmojiResults.propTypes = {
  emojiData: PropTypes.array
};
export default EmojiResults;
