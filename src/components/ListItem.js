const h = require('react-hyperscript')
const React = require('react')

const ListItem = React.createClass({
  onUp: function(event) {
    this.props.item.score = this.props.item.score + 1
    this.props.onScoreChange(this.props.item)
  },
  onDown: function(event) {
    if (this.props.item.score === 0) return
    this.props.item.score = this.props.item.score - 1
    this.props.onScoreChange(this.props.item)
  },
  render: function() {
    const item = this.props.item
   return h('li', [
        h('a', {href: item.link}, item.title),
        h('button', { onClick: this.onUp } ,'Up'),
        h('button', { onClick: this.onDown }, 'Down'),
        h('span', item.score)
      ])
    }
})
module.exports = ListItem
