hasRequire = typeof require == 'function'

describe 'expand-path', ->
  # Temporary solution to address https://github.com/nodeca/hike-js/issues/13
  # Tl;dr - Remove should from Object prototype before running testem tests
  after -> if hasRequire then require('should').noConflict()
  Given -> @expand = if hasRequire then require '../lib/expand-path' else window.expandPath

  context 'with no expansion', ->
    When -> @list = @expand 'foo.bar.baz'
    Then -> @list.should.eql ['foo.bar.baz']

  context 'with expansion', ->
    context 'and brackets', ->
      When -> @list = @expand 'foo.bar.[baz,quux]'
      Then -> @list.should.eql [
        'foo.bar.baz',
        'foo.bar.quux'
      ]

    context 'with braces', ->
      When -> @list = @expand 'foo.bar.{baz,quux}'
      Then -> @list.should.eql [
        'foo.bar.baz',
        'foo.bar.quux'
      ]

    context 'with angled brackets', ->
      When -> @list = @expand 'foo/bar/<baz,quux>'
      Then -> @list.should.eql [
        'foo/bar/baz',
        'foo/bar/quux'
      ]

    context 'multiple expansions', ->
      When -> @list = @expand 'foo.bar.[baz,quux].hello.world[.js,-spec.coffee]'
      Then -> @list.should.eql [
        'foo.bar.baz.hello.world.js',
        'foo.bar.quux.hello.world.js',
        'foo.bar.baz.hello.world-spec.coffee',
        'foo.bar.quux.hello.world-spec.coffee'
      ]
