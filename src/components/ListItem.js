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
   return h('li.pa1', [
        h('a', {href: item.link}, item.title),
        h('button.f6.link.dim.br2.ph3.pv2.mb2.dib.white.bg-hot-pink', { onClick: this.onUp } , [
          h('i.fa.fa-thumbs-up')
        ]),
        h('button.f6.link.dim.br2.ph3.pv2.mb2.dib.white.bg-hot-pink', { onClick: this.onDown }, [
          h('i.fa.fa-thumbs-down')
        ]),
        h('span', item.score)
      ])
    }
})
module.exports = ListItem
